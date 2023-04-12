function fetchBooks(){
return fetch("https://anapioficeandfire.com/api/books").then((response) => {  
    //console.log('resolved', response);
    return response.json();
}).then(data => { renderBooks(data);
  //console.log(data);
}).catch((err) => {
  //console.log('rejected', err);
}); 
}

  // To pass the tests, don't forget to return your fetch!
  // I think I broke the code.

function renderBooks(data) {
  const main = document.querySelector('main');
  data.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
