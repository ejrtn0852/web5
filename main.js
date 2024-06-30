$(document).ready(function() {
  console.log('gd')
  $('#fullpage').fullpage({
    anchors: ['section1', 'section2', 'section3','section4'],
    sectionSelector: '.sections',
    navigation: true,
    slidesNavigation: true,
    css3: true,
    controlArrows: false,
    afterLoad: function (anchorLink, index) {
      console.log(index)
      if (index !== 2) {
        const sectionBox = document.querySelector('.sections:nth-child(2)');
        const skillMessage = document.querySelector('.skill--message');
        const menuBar = document.querySelector('.header--wrap');
        const menuText = document.querySelectorAll('.header--wrap');

        menuText.forEach( text => text.classList.remove('color--black'));
        menuBar.classList.remove('background--white');
        sectionBox.style.backgroundColor = '';
        skillMessage.style.color = 'black';
      }
      const lastImg = document.querySelector('.last--section--container');
      if (index === 4) {
        lastImg.classList.add('opacity--one');
      } else {
        lastImg.classList.remove('opacity--one');
      }
    }
  });
});