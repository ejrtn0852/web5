// todo 전역 상태 관리 프로바이더라고 가정
const domFind = [];
// todo 전역 상태 관리 프로바이더라고 가정

const findFlag = () => {
  const findAll = Array.from(document.querySelectorAll('.project-item'));
  const mobile = [];
  const pc = [];
  const all = [];

  findAll.forEach(target => {
    if (target.classList.contains('mobile')) {
      mobile.push(target);
    }
    if (target.classList.contains('pc')) {
      pc.push(target);
    }
    if (target.classList.contains('all')) {
      all.push(target);
    }
  });

  domFind.push(mobile);
  domFind.push(pc);
  domFind.push(all);
}

const isContains = (target, classes) => {
  return target.classList.contains(classes);
}

const searchHandler = (button) => {
  const [mobile, pc, all] = domFind;
  const parent = document.querySelector('.project--items--show');
  console.log(parent)
  if (isContains(button, 'mobile--btn')) {
    render(mobile, parent);
  }

  if (isContains(button, 'pc--btn')) {
    render(pc, parent);
  }

  if (isContains(button, 'all--btn')) {
    render(all, parent);
  }
}

const render = (repository, target ) => {
  target.innerHTML = '';
  repository.forEach(element => target.appendChild(element));
}


const searchClass = () => {
  const buttonList = document.querySelectorAll('.filter--button');
  findFlag();
  buttonList.forEach(button => button.addEventListener('click', () => searchHandler(button)));
}

searchClass();
