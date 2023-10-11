const menuIcon = document.querySelector('.nav-bar-menu-icon');

const sideBar = document.querySelector('.left-side-bar');

const container = document.querySelector('.container');

menuIcon.onclick = function()
{
  sideBar.classList.toggle('small-side-bar');
  container.classList.toggle('large-container');
}

