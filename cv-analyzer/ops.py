import json, sys
T = 1959075777
OPS = [
 (r"Sold \$1\+ in projects", "Sold $25M+ in projects"),
 (r"^Martin Fabichak has 20 years.*", "CTO and Head of Engineering with 20 years in game development, 16 of them leading technical teams, specialized in real-time multiplayer and network architecture. At Magic Media I sold over $25M in projects, hired 100+ engineers and led up to 160 across 20+ concurrent projects on PC, consoles, VR and mobile. At Chimera I rewrote the real-time multiplayer architecture of Monopoly Go, taken to worldwide soft launch, and worked with Rovio, Take-2 and Paradox. Before that I co-founded Insolita Studios, shipping Latin America's first PSP game and a social game with 5M+ players."),
 (r"^As CTO he is heavily involved.*", ""),
 (r"^Martin has a strong analytical mindset.*", ""),
 (r"refers to linkedin for previous work experiences\..*", "(earlier roles on LinkedIn)"),
 (r"^Hired and envisioned the technical leadership.*", "Hired 100+ engineers and built the technical leadership layer; managed up to 160 engineers, and no project was ever lost due to technical issues;"),
 (r"^Envisioned the CI/CD.*", "Designed the CI/CD pipeline and shared Unity/Unreal frameworks, reused across dozens of projects;"),
 (r"^Improved the production department.*", "Mentored production leads and co-created production plans, [result, e.g. on-time delivery X% -> Y%];"),
 (r"^Improved the pitching pipeline.*", "Rebuilt the pitching pipeline to handle more pitches and raise conversion ([X] -> [Y]);"),
 (r"^Delivered projects for PC.*", "Shipped original IPs, IP-based games and ports on PC, Gen9/8 consoles, VR, blockchain and mobile, with 20+ projects running concurrently;"),
 (r"^Delivered original IPs.*", ""),
 (r"product owner of central tech architecture\.", "product owner of central tech architecture. Worked with Rovio, Take-2 and Paradox."),
 (r"^Created a solid foundation.*", "Built shared architecture, tooling and guidelines so projects could be led by less experienced leads;"),
 (r"^Created over 5 different tools.*", "Built 5+ internal tools for debugging, performance and automated testing, used daily by [N] developers, cutting [task] from [X] to [Y];"),
 (r"^Mentored 4 people.*", "Mentored 4 developers into technical leads, resolving interpersonal and communication issues in their teams;"),
 (r"^Sole responsible for the technical roadmap.*", "Solely responsible for the post-launch technical roadmap; defined technical KPIs ([e.g. crash rate, latency]) that let stakeholders assess product quality;"),
 (r"^Idealized, delegated.*", "Designed and rolled out development-process changes that improved quality and speed each iteration ([metric]);"),
 (r"^Architected the client architecture.*", "Designed the client architecture that let 3 teams work in parallel from early development to post-launch;"),
 (r"^Conceptualized and implemented the realtime multiplayer.*", "Rewrote from scratch the real-time multiplayer architecture of Monopoly Go and proved it at global scale in worldwide soft launch ([CCU / latency]);"),
 (r"^Optimized development through.*", ""),
 (r"^Fostered the tech culture.*", "Built the team's engineering culture as manager ([attrition / engagement metric])."),
 (r"Paulo - Brasil", "Paulo - Brazil"),
 (r"^Turma do Chico Bento, a Facebook.*", "Turma do Chico Bento: Facebook/Orkut social game on one of Brazil's best-known IPs; 5M+ registered players, 500k+ MAU, 100k+ DAU, 20k peak CCU. Led the full technical implementation from prototype to live ops with weekly quests;"),
 (r"^Globo Futebol, a five football.*", "Globo Futebol: 5-a-side football multiplayer mini-games for TV Globo, Brazil's largest TV network, likely the first large-scale web multiplayer game in Unity. Built all gameplay and the multiplayer layer;"),
 (r"^Freekscape: Escape from Hell.*", "Freekscape: Escape from Hell, the first PSP game developed in Latin America ([your role]);"),
 (r"^Excellent communication, expertly.*", ""),
 (r"^Estimation and pitching for a plethora.*", ""),
 (r"^Technical vision for the future years.*", ""),
 (r"^Technical direction for client and server.*", ""),
 (r"^Extensive experience in creating technical product roadmap.*", ""),
 (r"^Extensive knowledge of metrics.*", ""),
 (r"^Conceptualization, integration and feedback loops.*", ""),
 (r"^Continuous integration implementation.*", ""),
 (r"^Conceptualization of several different automated testing.*", ""),
 (r"^Management and coaching of engineers.*", ""),
 (r"^Extensive network experience.*", ""),
 (r"^Projects delivered in:.*", "Tech stack: Unity, Unreal, C++ (proprietary engines), C#, Node.js, TypeScript, React, Java, Ruby on Rails, HTML5/Phaser; CI/CD, cloud cost optimization, real-time networking."),
]
def c(**k): k["tabId"]=T; return {"name":"computer","input":k}
def batch(ops):
    a=[]
    for f,r in ops:
        a += [c(action="triple_click",ref="ref_1206"),c(action="key",text="ctrl+a"),c(action="type",text=f),
              c(action="wait",duration=1),{"name":"read_page","input":{"ref_id":"ref_1246","tabId":T}},
              c(action="triple_click",ref="ref_1210"),c(action="key",text="ctrl+a")]
        a += [c(action="type",text=r)] if r else [c(action="key",text="Delete")]
        a += [c(action="left_click",ref="ref_1229"),c(action="wait",duration=2)]
    return a
i,j=map(int,sys.argv[1:3]); print(json.dumps(batch(OPS[i:j])))
