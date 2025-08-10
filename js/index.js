  // Animation de transition fluide au clic sur le bouton Jouer en ligne
    const onlineBtn = document.querySelector('.online-btn');
    onlineBtn.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('mainBody').style.transition = 'opacity 0.5s ease';
      document.getElementById('mainBody').style.opacity = '0';
      setTimeout(() => {
        window.location.href = this.href;
      }, 500);
    });