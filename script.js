const newBookBtn = Document.querySelector('#new-book-btn')

let myLibrary = [];

function Books (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook (title, author, pages, read) {
    myLibrary.push(new Books(title, author, pages, read));
}

newBookBtn.addEventListener('click', function() {
    addBook();
})

addBook('The Hobbit', 'JRR Tolkien', '411', 'Not read')
addBook('The Murder of Roger Ackroyd', 'Agatha Christie', '358', 'Read')
console.log(myLibrary)