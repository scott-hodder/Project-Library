let myLibrary = [];

//object constuctor
function Book(Title, Author, Pages, Read) {
  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.Read = Read;
}

//function for adding book to library
function addBookToLibrary(Title, Author, Pages, Read) {
  let book = new Book(Title, Author, Pages, Read);
  myLibrary.push(book);
  displayBooksOnPage();
}
// function to display array on page
function displayBooksOnPage() {
  const books = document.querySelector(".books");

  //remove all previously displayed cards before i loop over array again
  const removeDivs = document.querySelectorAll(".card");
  console.log("show me the node count of current card divs....", removeDivs);
  for (let i = 0; i < removeDivs.length; i++) {
    removeDivs[i].remove();
  }

  myLibrary.forEach((myLibrary) => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);
    for (let key in myLibrary) {
      console.log(`${key}: ${myLibrary[key]}`);
      const para = document.createElement("p");
      para.textContent = `${key}: ${myLibrary[key]}`;
      card.appendChild(para);
    }
  });
}

//Event Listnerer to add a new book to library
const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", displayTheForm);

function displayTheForm() {
  document.getElementById("add-book-form").style.display = "";
}
//add input to array for new entry form
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", intakeFormData);
//transform form data to variables for intake
function intakeFormData() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;

  if (title == "" || author == "" || pages == "" || read == "") {
    return;
  }

  addBookToLibrary(title, author, pages, read);

  document.getElementById("add-book").reset();
}
const clearButton = document.querySelector(".reset-button");
clearButton.addEventListener("click", clearForm);

function clearForm() {
  document.getElementById("add-book").reset();
}

addBookToLibrary("The Hobbit", " J.R.R. Tolkien", "295 Pages", "Unread");
addBookToLibrary("The Hobbit", " J.R.R. Tolkien", "295 Pages", "Unread");
