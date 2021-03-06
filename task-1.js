const categoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${categoriesRef.length} категории`);

const categoriesArr = [...categoriesRef]
  .map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArr);