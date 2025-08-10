  function goHome(){
      // if embedded somewhere, try go back; otherwise go to root
      if(window.history.length>1) window.history.back(); else window.location.href = '/';
    }

    function surprise(){
      const btn = document.querySelector('.btn.primary');
      btn.textContent = 'Noté ✅';
      btn.disabled = true;
      btn.style.opacity = '0.95';
      // small confetti burst
      for(let i=0;i<18;i++){
        const c = document.createElement('div');
        const size = Math.random()*8 + 6;
        c.style.position='fixed';
        c.style.left = (50 + (Math.random()-0.5)*28) + '%';
        c.style.top = (40 + (Math.random()-0.5)*24) + '%';
        c.style.width = c.style.height = size + 'px';
        c.style.borderRadius = '2px';
        c.style.background = ['#7c3aed','#06b6d4','#f97316','#ef4444'][Math.floor(Math.random()*4)];
        c.style.transform = 'translateY(0) rotate(0deg)';
        c.style.zIndex=9999;
        document.body.appendChild(c);
        const dx = (Math.random()-0.5)*600;
        const dy = -Math.random()*600 - 60;
        c.animate([
          {transform:`translate(0px,0px) rotate(0deg)`, opacity:1},
          {transform:`translate(${dx}px,${dy}px) rotate(${Math.random()*720}deg)`, opacity:0}
        ],{duration:1200+Math.random()*800,easing:'cubic-bezier(.2,.8,.2,1)'});
        setTimeout(()=>c.remove(),2200);
      }
    }