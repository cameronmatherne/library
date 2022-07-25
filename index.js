
// window.onload = () => {

let library = []

// book constructor 
function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary(book) {
    library.push(book);

    // create a card that is visible on the grid 
    const card = document.createElement("div");

    // add the book title to the card
    const titleField = document.createElement("div");
    titleField.innerText = book.title;
    titleField.id = 'titleField';

    const fillerWord = document.createElement("div");
    fillerWord.innerText = "By";

    // add the author's name to card
    const authorField = document.createElement("div");
    authorField.innerText = book.author;
    authorField.id = 'authorField';

    // name the class that holds the information to style with CSS
    card.className = "card";

    // append the fields that show text (author and title) to the card 
    container.appendChild(card);
    card.appendChild(titleField);
    card.appendChild(fillerWord);
    card.appendChild(authorField);




}

function loopThrough() {

}

// hook HTML elements to Javascript objects 
const addBtn = document.querySelector('.btn');
const container = document.querySelector('.container');


// add a new card to the visible grid, where book information 
// will be displayed 
function addBook() {
    // take the data from the form 
    const authorData = document.getElementById("author").value;
    const titleData = document.getElementById("title").value;

    // create book object, then add it to library array
    const newBook = new Book(titleData, authorData);
    addBookToLibrary(newBook);

    // reset the form
    document.getElementById("myForm").style.display = "none";
    document.getElementById("author").value = "";
    document.getElementById("title").value = "";
}

function openForm() {
    document.getElementById("myForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

addBtn.addEventListener("click", addBook);


