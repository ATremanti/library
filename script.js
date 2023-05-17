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
    const svgFlex = document.createElement('div');
    svgFlex.classList.add('svg-flex');
    bookReadDiv.appendChild(svgFlex);
    renderSVG(svgFlex);

    bookRead.addEventListener('click', function () {
        if (bookRead.textContent == 'Read') {
            bookRead.textContent = 'Not read';
        } else bookRead.textContent = 'Read';
    })

    function renderSVG (node) {
        const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        svgIcon.classList.add('delete-icon');
        svgPath.setAttribute('d',
        'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z');
        svgIcon.appendChild(svgPath);
        svgIcon.setAttribute('data-delete', myLibrary.indexOf(book));
        return node.appendChild(svgIcon);
    }
}

newbookBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

closeBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

addbookBtn.addEventListener('click', function (e) {
    e.preventDefault();
    addBook(formTitle.value, formAuthor.value, formPages.value, formRead.checked);
    appendShelf(myLibrary[i]);
    i++;
    mainForm.reset();
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

console.log(myLibrary)