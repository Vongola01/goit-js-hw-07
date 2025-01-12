const categoriesListEl = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesListEl.length}`);

categoriesListEl.forEach(category => {
    console.log(category.querySelector('h2').textContent);
    console.log(category.querySelectorAll('ul li').length);
});

