
let library = []

// hook HTML elements to Javascript objects 
const addBtn = document.querySelector('.addSubmission');
const removeBtn = document.querySelector('.removeBtn');
const cancelBtn = document.querySelector('.cancelSubmission');
const container = document.querySelector('.container');
const statusBtn = document.querySelector('.statusBtn');

// book constructor 

function Book(title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
}


// take input from form and turn it into a Book object
function createBook() {
    // take the data from the form 
    const authorData = document.getElementById("author").value;
    const titleData = document.getElementById("title").value;

    // create book object
    const bookEntry = new Book(titleData, authorData, false);

    // take book object, add it to library array / put information on card 
    addBookToLibrary(bookEntry);

    // reset the form
    document.getElementById("myForm").style.display = "none";
    document.getElementById("author").value = "";
    document.getElementById("title").value = "";
}

// takes a book object with data and adds it to a block on the grid 
function addBookToLibrary(book) {
    library.push(book);

    // create a card that is visible on the grid 
    const card = document.createElement("div");
    card.className = "card";

    // add the book title to the card
    const titleField = document.createElement("div");
    titleField.innerText = book.title;

    // add the author's name to card
    const authorField = document.createElement("div");
    authorField.innerText = book.author;

    // add button to determine if book was read or not 
    const statusBtn = document.createElement("button");
    statusBtn.id = book.title;
    statusBtn.className = 'statusBtn';
    statusBtn.innerHTML = "Not read";

    // function that toggles whether a book has been read or not 
    statusBtn.onclick = function () {
        book.readStatus = !book.readStatus;
        if (book.readStatus == true) {
            statusBtn.innerText = 'Read'
        } else {
            statusBtn.innerText = 'Not read'
        }
    };

    // append the fields that show text (author and title) to the card 
    container.appendChild(card);
    card.appendChild(titleField);
    card.appendChild(authorField);
    card.appendChild(statusBtn);
}

function openForm() {
    document.getElementById("myForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// button on form that sends data into a card and displays it 
addBtn.addEventListener("click", createBook);

