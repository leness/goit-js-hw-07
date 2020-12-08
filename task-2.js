const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const itemList = document.getElementById('ingredients');

const products = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  return item;
})

itemList.append(...products)
