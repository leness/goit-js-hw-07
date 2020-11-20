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
 const items = document.createElement("li");
  // items.innerHTML = ingredient;
  items.insertAdjacentHTML('afterbegin', ingredient)
  itemList.append(items)
})

  console.log(itemList);
