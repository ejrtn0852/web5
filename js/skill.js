const imgBox = document.querySelectorAll('.skill--img');
const skillMessage = document.querySelector('.skill--message');


const htmlInfo = ["웹 표준, 웹 접근성을 고려한 HTML 마크업 작업이 가능합니다.", "85", "%", "HTML"]
const cssInfo = ["css3 생동감 있는 애니메이션 효과, Transitions을 사용하여 사용자 상호작용에 반응하는 동적인 요소 구현 가능합니다. ", "60", "%", "CSS"]
const jsInfo = ["API 호출, 돔 조작 및 이벤트, ES6+ 비동기 프로그래밍 등 능숙하게 다룰 수 있습니다.", "90", "%", "Javascript"]
const reactInfo = ["Styled Component, React Query, React Router DOM SPA 등을 다룰 수 있습니다.", "50", "%", "React"]
const tsInfo = ["객체지향 프로그래밍과, 강타입 언어를 이해하고 있습니다. ", "30", "%", "TypeScript"];
const sectionBox = document.querySelector('.sections:nth-child(2)');

const isContains = (event, classes) => {
  return  event.target.classList.contains(classes)
}

imgBox.forEach( box => {
  let target;

  box.addEventListener('click', (event) => {

    skillMessage.classList.add('opacity--one')
    if (sectionBox.style.backgroundColor !== 'black') {
      sectionBox.style.backgroundColor = 'black';
      skillMessage.style.color = 'white';
    }
    if (isContains(event,'skill--card--html')) {
      skillMessage.textContent = htmlInfo[0];
      target = document.querySelector('#html')
      target.style.opacity = 1;
    }
    if (isContains(event,'skill--card--css') ) {
      skillMessage.textContent = cssInfo[0];
      target = document.querySelector('#css')
      target.style.opacity = 1;

    }
    if (isContains(event,'skill--card--js')) {
      skillMessage.textContent = jsInfo[0]
      target = document.querySelector('#js')
      target.style.opacity = 1;

    }
    if (isContains(event,'skill--card--react')) {
      skillMessage.textContent = reactInfo[0]
      target =document.querySelector('#react')
      target.style.opacity = 1;

    }
    if (isContains(event,'skill-card--ts') ) {
      skillMessage.textContent = tsInfo[0]
      target = document.querySelector('#ts')
      target.style.opacity = 1;

    }
    setTimeout( () => {
      skillMessage.classList.remove('opacity--one')
      target.style.opacity = 0;
    } , 1500)
  })
})

