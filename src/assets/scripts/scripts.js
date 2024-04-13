  
  document.addEventListener('astro:page-load', () => {
    const drawer = document.querySelector('.compact-menu');
    const openButton = document.querySelector('#menu-trigger');

    openButton?.addEventListener('click', (ev) => {
      drawer.show();
    });
  });
