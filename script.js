const mainContainer = document.querySelector('.main-container');
const newbookBtn = document.querySelector('.new-book-btn');
const closeBtn = document.querySelector('.btn-close');
const addbookBtn = document.querySelector('.add-book-btn');
const mainForm = document.querySelector('#main-form');
const formTitle = document.querySelector('#book-title');
const formAuthor = document.querySelector('#book-author');
const formPages = document.querySelector('#book-pages');
const overlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');

let myLibrary = [];
let i = 0;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(formTitle, formAuthor, formPages, read) {
    myLibrary.push(new Book(formTitle, formAuthor, formPages, read));
}

function appendShelf(book) {

    const bookItem = document.createElement('div');
    bookItem.classList.add('book-item');
    bookItem.setAttribute('data-shelf', myLibrary.indexOf(book));
    mainContainer.appendChild(bookItem);

    const bookTitle = document.createElement('p');
    bookTitle.textContent = book.title;
    bookTitle.classList.add('item-title');
    bookTitle.setAttribute('data-title', myLibrary.indexOf(book));
    bookItem.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = book.author;
    bookAuthor.classList.add('item-author');
    bookAuthor.setAttribute('data-author', myLibrary.indexOf(book));
    bookItem.appendChild(bookAuthor);

    const bookPages = document.createElement('p');
    bookPages.classList.add('item-pages');
    bookPages.textContent = book.pages;
    bookPages.setAttribute('data-pages', myLibrary.indexOf(book));
    bookItem.appendChild(bookPages);
}

newbookBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

closeBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

addbookBtn.addEventListener('click', function () {
    addBook(formTitle.value, formAuthor.value, formPages.value);
    appendShelf(myLibrary[i]);
    i++;
    mainForm.reset();
})

console.log(myLibrary)