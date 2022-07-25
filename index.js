
// window.onload = () => {

let library = []

function Book(name, author) {
    this.name = name;
    this.author = author;

}

function addBookToLibrary(book) {
    library.push(book);
}


function loopThrough() {

}

// variables

const addBtn = document.querySelector('.addBook');
const container = document.querySelector('.container');


/*
addBtn.addEventListener('click', () => {
});
*/
    
function addCard() {
    const card = document.createElement("div");
    card.className = "card";
    container.appendChild(card);

}







function openForm() {
    document.getElementById("myForm").style.display = "flex";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }