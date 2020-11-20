const btnAdd = document.querySelector('[data-action="increment"]')
const btnRemove = document.querySelector('[data-action="decrement"]')
const span = document.getElementById('value')
const wrapper = document.getElementById('counter')
    
let counterValue = 0;
const increment = () => {
  counterValue += 1;

  span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  span.textContent = counterValue;
};

btnAdd.addEventListener('click', increment);
btnRemove.addEventListener('click', decrement);