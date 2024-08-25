document.addEventListener('DOMContentLoaded', async () => {
  const Header = document.getElementById('header');

  let IsHovered = false;

  function Sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function HeaderHover() {
    Header.style.width = '200px';
    Header.style.marginLeft = 'calc(50% - 95px)';
    Header.style.marginRight = 'calc(50% - 95px)';
  }

  function HeaderUnhover() {
    Header.style.width = '50px';
    Header.style.marginLeft = 'calc(50% - 25px)';
    Header.style.marginRight = 'calc(50% - 25px)';
  }

  function headerFirstTime() {
    HeaderUnhover();
  }

  Header.addEventListener('mouseover', () => {
    IsHovered = true;
    HeaderHover();
  });

  Header.addEventListener('mouseout', () => {
    IsHovered = false;
    HeaderUnhover();
  });

  await Sleep(1000);
  headerFirstTime();
});