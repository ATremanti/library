const mainContainer = document.querySelector('.main-container');
const newbookBtn = document.querySelector('.new-book-btn');
const closeBtn = document.querySelector('.btn-close');
const addbookBtn = document.querySelector('.add-book-btn');
const mainForm = document.querySelector('#main-form');
const formTitle = document.querySelector('#book-title');
const formAuthor = document.querySelector('#book-author');
const formPages = document.querySelector('#book-pages');
const formRead = document.querySelector('#book-read');
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

    const bookReadDiv = document.createElement('div');
    bookReadDiv.classList.add('read-div');
    bookItem.appendChild(bookReadDiv);
    const bookRead = document.createElement('p');
    bookRead.classList.add('item-read');
    if (book.read === true) {
        bookRead.textContent = "Read";
    } else {
        bookRead.textContent = "Not read";
    }
    bookRead.setAttribute('data-read', myLibrary.indexOf(book));
    bookReadDiv.appendChild(bookRead);

    renderSVG(bookReadDiv);
}

function renderSVG (node) {
    const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    svgIcon.classList.add('update-icon');
    svgPath.setAttribute('d',
    'M12,18A6,6 0 0,1 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12A8,8 0 0,0 12,20V23L16,19L12,15M12,4V1L8,5L12,9V6A6,6 0 0,1 18,12C18,13 17.75,13.97 17.3,14.8L18.76,16.26C19.54,15.03 20,13.57 20,12A8,8 0 0,0 12,4Z');

    svgIcon.appendChild(svgPath);
    return node.appendChild(svgIcon);
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
    addBook(formTitle.value, formAuthor.value, formPages.value, formRead.checked);
    appendShelf(myLibrary[i]);
    i++;
    mainForm.reset();
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

console.log(myLibrary)