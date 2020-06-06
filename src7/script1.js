const lis = document.querySelectorAll('.item');

const Array = [...lis];

console.log(`В списку категорій:` + lis.length);


for (let i = 0; i < Array.length; i++) {

    const elem = document.querySelector('h2');

    const cLis = Array[i].querySelectorAll('li');

    console.log(`Категорія:` + elem.textContent);

    console.log(`Кількість елементів:` + cLis.length);
}