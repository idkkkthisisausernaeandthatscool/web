document.addEventListener('DOMContentLoaded', async () => {
  const Header = document.getElementById('header');

  let IsHovered = false;

  const Sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const HeaderHover = () => {
    Header.style.width = '170px';
    Header.style.marginLeft = 'calc(50% - 95px)';
    Header.style.marginRight = 'calc(50% - 95px)';
  }

  const HeaderUnhover = () => {
    Header.style.width = '50px';
    Header.style.marginLeft = 'calc(50% - 25px)';
    Header.style.marginRight = 'calc(50% - 25px)';
  }

  const HeaderFirstTime = () => {
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
  HeaderFirstTime();
});