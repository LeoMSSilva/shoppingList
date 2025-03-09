const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');
const message = document.querySelector('.successDelete');

const createNewItem = () => {  
  const newLi = document.createElement('li');
  ul.appendChild(newLi);

  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'checkbox');
  newInput.setAttribute('name', 'item');
  newLi.appendChild(newInput);

  const newSpan = document.createElement('span');
  newLi.appendChild(newSpan);
  newSpan.innerText = input.value;

  const newTrash = document.createElement('span');
  newTrash.classList.add('trash');
  newLi.appendChild(newTrash);
}

button.onclick = (e) => {
  e.preventDefault();
  
  if (input.value !== '') {
    createNewItem();
    input.value = '';
  }
};

ul.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('trash')) {
    e.target.parentNode.remove();
    message.classList.toggle('visible');
    setTimeout(() => {
      message.classList.toggle('visible');
    }, 300);
  }
});
