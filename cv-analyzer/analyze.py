"""CV check against ebook Passo 4 / Anexo A rules, using Jev for per-bullet snap judgments."""
import json
import re
import sys

import pymupdf
from typesafe_sdk import Noul, TypeSafeClient

MODEL = "jev-1.13.0"

# One flaw/property per Noul. {p} = backticked state path of the bullet.
BULLET_QUESTIONS = {
    "has_result": "Does {p} state an outcome that changed because of the work (something faster, cheaper, sold, fixed, grown, avoided), rather than only describing an activity or responsibility?",
    "has_metric": "Does {p} quantify the outcome of the work with a number (percent, money, time, count before/after), not just the size of the team or project?",
    "has_scope": "Does {p} say how big the work was (how many people, users, teams, projects or how much money was involved)?",
    "names_tech": "Does {p} name at least one specific technology, language, engine, or tool?",
    "action_verb": "Does {p} start with a past-tense action verb describing what the author personally did?",
    "grammar": "Does {p} contain a spelling, grammar, capitalization or plural mistake in English?",
    "vague_claim": "Does {p} make a claim that cannot be checked, such as an adjective about quality or feelings ('excellent', 'happier', 'solid', 'great') with no evidence?",
}
SUMMARY_QUESTIONS = {
    "says_level": "Does `summary` state the author's seniority level or role?",
    "concrete_wins": "Does `summary` mention at least two concrete achievements with a number or named result?",
    "generic_adjectives": "Does `summary` rely on generic self-praise ('striving for excellence', 'strong analytical mindset', 'great interpersonal skills') instead of proof?",
    "target_role": "Does `summary` make clear which one type of job the author is applying for?",
    "short": "Could `summary` be read in about 10 seconds?",
}
THRESH = 0.5


def parse(pdf):
    text = "\n".join(p.get_text() for p in pymupdf.open(pdf))
    summary = text.split("Summary", 1)[1].split("“", 1)[0]
    body = text.split("Professional Experience", 1)[1].split("Education and Life", 1)[0]
    # section header = line before a date range; bullets start with ●
    sections, cur = {}, None
    for chunk in re.split(r"\n\s*●​?\s*\n", body):
        m = re.search(r"\n([^\n]+)\n(\w+ \d{4} – \w+ \d{4})", chunk)
        if m:
            if cur and chunk[:m.start()].strip():
                sections[cur].append(" ".join(chunk[:m.start()].split()))
            cur = m.group(1).strip()
            sections[cur] = []
            desc = chunk[m.end():].strip()
            if desc:
                sections[cur].append(" ".join(desc.split()))
            continue
        if "Technical and key experiences" in chunk:
            before, after = chunk.split("Technical and key experiences", 1)
            sections[cur].append(" ".join(before.split()))
            cur = "Technical and key experiences"
            sections[cur] = []
            continue
        if cur and chunk.strip():
            sections[cur].append(" ".join(chunk.split()))
    return " ".join(summary.split()), sections


def parse_txt(path):
    """Google Docs txt export: job header = line followed by a date-range line; bullets start with '* '."""
    lines = [l.strip() for l in open(path, encoding="utf-8")]
    i = lines.index("Summary") + 2
    summary = lines[i]
    sections, cur = {}, None
    for n, l in enumerate(lines[i + 1:], i + 1):
        nxt = lines[n + 1] if n + 1 < len(lines) else ""
        if re.match(r"\w+ \d{4} [–-] (\w+ \d{4}|Present)", nxt) or l == "Technical and key experiences":
            cur = l
            sections[cur] = []
        elif l.startswith("Education and Life"):
            break
        elif cur and l.startswith("* "):
            sections[cur].append(l[2:])
        elif cur and l and not re.match(r"\w+ \d{4} [–-]", l) and not l.startswith("_"):
            sections[cur].append(l)  # role description paragraph
    return summary, sections


def code_checks(summary, sections):
    """Exact checks kept in code (skill rule 10): placeholders, conflicting repeated counts."""
    text = summary + " " + " ".join(b for v in sections.values() for b in v)
    issues = [f"placeholder left: {m}" for m in re.findall(r"\[[^\]]*\]", text)]
    sys_counts = set(re.findall(r"(\d+) systems in production", text))
    if len(sys_counts) > 1:
        issues.append(f"conflicting 'systems in production' counts: {sorted(sys_counts)}")
    return issues


def run(pdf):
    summary, sections = parse_txt(pdf) if pdf.endswith(".txt") else parse(pdf)
    out = {"summary": {}, "sections": {}, "code_issues": code_checks(summary, sections)}
    with TypeSafeClient(model=MODEL) as c:
        r = c.system_one({"summary": summary},
                         {k: Noul(instructions=q) for k, q in SUMMARY_QUESTIONS.items()})
        out["summary"] = {k: a.noul for k, a in r.nouls.items()}
        out["model"] = r.model
        for name, bullets in sections.items():
            qs = {f"{i}:{k}": Noul(instructions=q.format(p=f"`bullets[{i}]`"))
                  for i in range(len(bullets)) for k, q in BULLET_QUESTIONS.items()}
            r = c.system_one({"bullets": bullets}, qs)
            rows = [{"text": b} for b in bullets]
            for qid, a in r.nouls.items():
                i, k = qid.split(":")
                rows[int(i)][k] = a.noul
            out["sections"][name] = rows
            print(f"{name}: {len(bullets)} bullets, {r.usage.input_tokens} tok", file=sys.stderr)
    return out


if __name__ == "__main__":
    print(json.dumps(run(sys.argv[1]), ensure_ascii=False, indent=1))
