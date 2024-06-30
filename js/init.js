const domLoadStart = () => window.addEventListener('DOMContentLoaded', () => {
  setTimeout( () => {
    const careerBox = document.querySelector('.profile--items:nth-child(2)');
    const imgBox = document.querySelector('.profile--items:last-child');
    careerBox.style.transform = 'translateX(0px)';
    imgBox.style.transform = 'translateX(0px)';
  },1000)
})

domLoadStart();