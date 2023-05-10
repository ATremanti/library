const mainContainer = document.querySelector('.main-container');
const newbookBtn = document.querySelector('.new-book-btn');
const closeBtn = document.querySelector('.btn-close');
const addbookBtn = document.querySelector('.add-book-btn');
const overlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');

let myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook (title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

function appendBooks () {
    for(i=0;i<myLibrary.length;i++) {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        mainContainer.appendChild(bookItem);

        const bookTitle = document.createElement('p');
        bookTitle.classList.add('item-title');
        bookItem.appendChild(bookTitle);

        const bookAuthor = document.createElement('p');
        bookAuthor.classList.add('item-author');
        bookItem.appendChild(bookAuthor);

        const bookPages = document.createElement('p');
        bookPages.classList.add('item-pages');
        bookItem.appendChild(bookPages);

        const title = myLibrary.map(a => a.title);
        bookTitle.textContent = title[i];

        const author = myLibrary.map(a => a.author);
        bookAuthor.textContent = author[i];

        const pages = myLibrary.map(a => a.pages);
        bookPages.textContent = pages[i];
    }
}

newbookBtn.addEventListener('click', function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

closeBtn.addEventListener('click', function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

addBook('The Hobbit', 'J. R. R. Tolkien', 411, 'Read');
addBook('Death on the Nile', 'Agatha Christie', 288, 'Read');
addBook('The Art of War', 'Sun Tzu', 256, 'Read');

appendBooks()
console.log(myLibrary)