const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const itemList = document.getElementById('ingredients');

const products = [];
ingredients.map((ingredient) => {
  let items = document.createElement("li");
  items.textContent = ingredient;
  products.push(items);
})

itemList.append(...products)
