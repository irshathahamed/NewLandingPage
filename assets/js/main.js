window.onscroll = () => {
    const nav = document.querySelector('#top-nav');
    if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
  };