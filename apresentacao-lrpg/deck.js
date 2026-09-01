(function(){
  var idx = 0, shown = 0, slides = window.SLIDES || [];
  var palco, progresso, dots;

  function esc(t){ return String(t==null?'':t)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  // marca cada item com class="reveal" quando o slide é de revelação progressiva
  function items(arr, reveal, fn){
    return arr.map(function(x){ return '<li class="'+(reveal?'reveal':'')+'">'+fn(x)+'</li>'; }).join('');
  }

  function logo(){ return '<span class="logo"><i></i><i></i></span>'; }
  function footer(){ return '<div class="hud-footer"><span>Mentoria · Code Leadership</span>'+logo()+'</div>'; }

  function wrap(s, cls, inner){
    var chrome = (s.tipo==='capa') ? '' : footer();
    return '<div class="slide '+cls+'"'+(s.revela?' data-revela="1"':'')+'>'+inner+chrome+'</div>';
  }

  function badge(s){ return s.badge?'<div class="badge">'+esc(s.badge)+'</div>':''; }

  function tplCapa(s){
    return wrap(s,'t-capa',
      '<div class="capa-logo">'+logo()+'</div>'
      +'<div class="capa-body">'
      +(s.selo?'<div class="selo">'+esc(s.selo)+'</div>':'')
      +'<h1>'+esc(s.titulo)+' <span class="neon">'+esc(s.destaque)+'</span></h1>'
      +(s.sub?'<p class="sub">'+esc(s.sub)+'</p>':'')
      +(s.rodape?'<div class="rodape">'+esc(s.rodape)+'</div>':'')
      +'</div>'); }

  function tplAgenda(s){
    return wrap(s,'t-agenda',
      badge(s)+'<h2>'+esc(s.titulo)+'</h2>'
      +(s.texto?'<p class="lead">'+esc(s.texto)+'</p>':'')
      +'<ol class="fases">'+s.itens.map(function(x){
        return '<li><span class="fk">'+esc(x.k)+'</span><span class="fd">'+esc(x.d)+'</span></li>';
      }).join('')+'</ol>'); }

  function tplPilar(s){
    return wrap(s,'t-pilar',
      badge(s)
      +'<div class="pilar-head"><h2>'+esc(s.titulo)+'</h2>'
      +(s.tag?'<span class="tag">'+esc(s.tag)+'</span>':'')+'</div>'
      +(s.sub?'<p class="lead">'+esc(s.sub)+'</p>':'')
      +'<ul class="bul">'+items(s.bullets,false,function(b){
        return '<b>'+esc(b.t)+'</b> '+esc(b.d);
      })+'</ul>'); }

  function tplLista(s){
    return wrap(s,'t-lista',
      badge(s)
      +'<div class="pilar-head"><h2>'+esc(s.titulo)+'</h2>'
      +(s.tag?'<span class="tag">'+esc(s.tag)+'</span>':'')+'</div>'
      +'<ul class="bul big">'+items(s.itens,s.revela,function(b){
        return '<b>'+esc(b.t)+'</b>'+(b.d?' <span class="d">'+esc(b.d)+'</span>':'');
      })+'</ul>'); }

  function tplStack(s){
    var rows = items(s.itens, s.revela, function(r){
      return '<span class="s-t">'+esc(r.t)+'</span><span class="s-v">'+esc(r.v)+'</span>';
    });
    var total = '<li class="'+(s.revela?'reveal ':'')+'total"><span class="s-t">Valor</span>'
      +'<span class="s-v">'+(s.totalDe?'<span class="s-de">'+esc(s.totalDe)+'</span> ':'')+esc(s.total)+'</span></li>';
    return wrap(s,'t-stack',
      badge(s)
      +'<div class="pilar-head"><h2>'+esc(s.titulo)+'</h2>'
      +(s.tag?'<span class="tag">'+esc(s.tag)+'</span>':'')+'</div>'
      +'<ul class="stack">'+rows+total+'</ul>'); }

  function tplPreco(s){
    return wrap(s,'t-preco',
      badge(s)
      +(s.de?'<div class="de">'+esc(s.de)+'</div>':'')
      +'<div class="valor">'+esc(s.titulo)+'</div>'
      +(s.parcelas?'<div class="parcelas">'+esc(s.parcelas)+'</div>':'')
      +(s.sub?'<p class="lead">'+esc(s.sub)+'</p>':'')); }

  function tplCronologia(s){
    var n = s.itens.length, rows = '';
    for (var i=0;i<n;i++){
      var it = s.itens[i];
      if (it.cycle && i+1<n){
        var next = s.itens[i+1];
        rows += '<li class="cr-cycle-group">'
          +'<div class="cr-row cr-linked'+(s.revela?' reveal':'')+'"><span class="cr-num">'+(i+1)+'</span><span class="cr-box">'+esc(it.t)+'</span></div>'
          +'<div class="cr-row cr-linked'+(s.revela?' reveal':'')+'"><span class="cr-num">'+(i+2)+'</span><span class="cr-box">'+esc(next.t)+'</span></div>'
          +'<div class="cr-bracket"><span class="cr-bracket-arrow">↻</span></div>'
          +'</li>';
        i++;
      } else {
        rows += '<li class="cr-row'+(i>0?' cr-linked':'')+(s.revela?' reveal':'')+'"><span class="cr-num">'+(i+1)+'</span><span class="cr-box">'+esc(it.t)+'</span></li>';
      }
    }
    return wrap(s,'t-cronologia',
      badge(s)+'<h2>'+esc(s.titulo)+'</h2>'
      +'<ol class="cronologia">'+rows+'</ol>'); }

  function tplCheckpoint(s){
    var t = Array.isArray(s.titulo) ? s.titulo.map(esc).join('<br>') : esc(s.titulo);
    t = t.replace(/\*([^*]+)\*/g,'<span class="gold">$1</span>');
    return wrap(s,'t-checkpoint', badge(s)+'<h1>'+t+'</h1>'); }

  function tplConfronto(s){
    var a = s.itens[0], b = s.itens[1];
    var long = (a.titulo.length + b.titulo.length) > 90 ? ' cf-long' : '';
    return wrap(s,'t-confronto',
      badge(s)
      +'<div class="cf-row'+long+'">'
        +'<div class="cf-col"><div class="cf-word">'+esc(a.titulo)+'</div><div class="cf-icon">'+esc(a.icone)+'</div></div>'
        +'<div class="cf-x">×</div>'
        +'<div class="cf-col"><div class="cf-word">'+esc(b.titulo)+'</div><div class="cf-icon">'+esc(b.icone)+'</div></div>'
      +'</div>'); }

  function tplDivisor(s){
    return wrap(s,'t-divisor',
      badge(s)+'<h1>'+esc(s.titulo)+'</h1>'
      +(s.sub?'<p class="sub">'+esc(s.sub)+'</p>':'')); }

  function tplResultado(s){
    var imgs = s.imgs || [{img:s.img, legenda:s.legenda}];
    return wrap(s,'t-resultado',
      badge(s)
      +'<div class="shots shots-'+imgs.length+(s.layout?' shots-'+s.layout:'')+'">'
      +imgs.map(function(it){
        return '<div class="shot"><img src="'+esc(it.img)+'" alt="">'
          +(it.legenda?'<p class="legenda">'+esc(it.legenda)+'</p>':'')+'</div>';
      }).join('')
      +'</div>'); }

  function tplTimeline(s){
    return wrap(s,'t-timeline',
      badge(s)+'<h2>'+esc(s.titulo)+'</h2>'
      +'<div class="tl-wrap">'
        +'<div class="tl-track"><div class="tl-fill"></div></div>'
        +'<div class="tl-mark tl-mark-a"><i></i><b>'+esc(s.de)+'</b></div>'
        +'<div class="tl-mark tl-mark-b"><i></i><b>'+esc(s.ate)+'</b></div>'
        +'<div class="tl-tag tl-tag-b '+(s.revela?'reveal':'')+'"><span class="tl-chev">▾</span>'+esc(s.tagB)+'</div>'
        +'<div class="'+(s.revela?'reveal':'')+' tl-group2">'
          +'<div class="tl-tag tl-tag-a"><span class="tl-chev">▾</span>'+esc(s.tagA).replace(/\n/g,'<br>')+'</div>'
          +(s.nota?'<p class="tl-nota">'+esc(s.nota)+'</p>':'')
        +'</div>'
      +'</div>'); }

  function tplPrecoDupla(s){
    return wrap(s,'t-precodupla',
      badge(s)
      +'<div class="pd-col pd-left">'
        +(s.esquerda.rotulo?'<div class="pd-k">'+esc(s.esquerda.rotulo)+'</div>':'')
        +'<div class="pd-v">'+esc(s.esquerda.valor)+'</div>'
        +(s.esquerda.parcelas?'<div class="pd-p">'+esc(s.esquerda.parcelas)+'</div>':'')
      +'</div>'
      +'<div class="pd-div"></div>'
      +'<div class="pd-col pd-right">'
        +'<div class="pd-k">'+esc(s.direita.titulo)+'</div>'
        +'<div class="'+(s.revela?'reveal':'')+'">'
          +'<div class="pd-v pd-v-alt">'+esc(s.direita.valor)+'</div>'
          +(s.direita.parcelas?'<div class="pd-p">'+esc(s.direita.parcelas)+'</div>':'')
        +'</div>'
      +'</div>'); }

  function tplFim(s){
    return wrap(s,'t-fim',
      '<h1>'+esc(s.titulo)+'</h1>'
      +(s.rodape?'<div class="rodape">'+esc(s.rodape)+'</div>':'')); }

  var TEMPLATES = { capa:tplCapa, agenda:tplAgenda, pilar:tplPilar, lista:tplLista,
    stack:tplStack, preco:tplPreco, checkpoint:tplCheckpoint, divisor:tplDivisor,
    resultado:tplResultado, timeline:tplTimeline, precoDupla:tplPrecoDupla, cronologia:tplCronologia,
    confronto:tplConfronto, fim:tplFim };

  // ---- revelação progressiva ----
  function activeEl(){ return palco.querySelectorAll('.slide')[idx]; }
  function stepTotal(){ var el=activeEl(); return el?el.querySelectorAll('.reveal').length:0; }
  function applyShown(){
    var el=activeEl(); if(!el) return;
    el.querySelectorAll('.reveal').forEach(function(r,k){ r.classList.toggle('on', k<shown); });
  }

  function render(){
    palco.innerHTML = slides.map(function(s){
      return (TEMPLATES[s.tipo]||tplCapa)(s);
    }).join('');
    dots.innerHTML = slides.map(function(_,i){
      return '<button class="dot" data-i="'+i+'"></button>';
    }).join('');
    dots.querySelectorAll('.dot').forEach(function(d){
      d.addEventListener('click',function(){ goto(+d.dataset.i,'fwd'); });
    });
    goto(0,'fwd');
  }

  function goto(i, dir){
    idx = Math.max(0, Math.min(slides.length-1, i));
    palco.querySelectorAll('.slide').forEach(function(el,j){ el.classList.toggle('ativo', j===idx); });
    dots.querySelectorAll('.dot').forEach(function(d,j){ d.classList.toggle('ativo', j===idx); });
    // entrando pela frente: colapsado; voltando de trás: já revelado
    shown = (slides[idx]&&slides[idx].revela && dir==='back') ? stepTotal() : 0;
    applyShown();
    progresso.style.width = ((idx+1)/slides.length*100)+'%';
  }

  function next(){ if(shown<stepTotal()){ shown++; applyShown(); } else goto(idx+1,'fwd'); }
  function prev(){ if(shown>0){ shown--; applyShown(); } else goto(idx-1,'back'); }

  // API usada pelo export_pptx.py
  window.deckGoto = function(i){ goto(i,'fwd'); };
  window.deckSlideCount = function(){ return slides.length; };
  window.deckRevealNext = function(){ if(shown<stepTotal()){ shown++; applyShown(); return true; } return false; };

  document.addEventListener('keydown',function(e){
    if(e.key==='ArrowRight'||e.key===' '||e.key==='PageDown'){ e.preventDefault(); next(); }
    else if(e.key==='ArrowLeft'||e.key==='PageUp'){ e.preventDefault(); prev(); }
  });

  document.addEventListener('DOMContentLoaded',function(){
    var deck = document.getElementById('deck');
    deck.innerHTML = '<div class="palco"></div>'
      + '<div class="progresso"></div><div class="dots"></div>'
      + '<div class="nav-hint">← → para navegar</div>';
    palco = deck.querySelector('.palco');
    progresso = document.querySelector('.progresso');
    dots = document.querySelector('.dots');
    palco.addEventListener('click',function(e){
      if(e.target.closest('button,input,textarea,a')) return;
      next();
    });
    render();
  });
})();
