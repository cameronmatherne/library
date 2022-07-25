
// window.onload = () => {

let library = []

// book constructor 
function Book(name, author) {
    this.name = name;
    this.author = author;
}

function addBookToLibrary(book) {
    library.push(book);
}

function loopThrough() {

}

// hook HTML elements to Javascript objects 
const addBtn = document.querySelector('.btn');
const container = document.querySelector('.container');




function addBook() {
    // add a new card to the visible grid, where book information 
    // will be displayed 
    const card = document.createElement("div");
    card.className = "card";
    container.appendChild(card);

    // take the data from the form 
    const authorData = document.getElementById("author").value;
    const titleData = document.getElementById("title").value;
    
    // create book object, then add it to library array
    const book = new Book(authorData,titleData);
    addBookToLibrary(book);

    // reset the form
    document.getElementById("myForm").style.display = "none";
    document.getElementById("author").value = "";
    document.getElementById("title").value = "";

    console.log(library);

}

function openForm() {
    document.getElementById("myForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

addBtn.addEventListener("click", addBook);


