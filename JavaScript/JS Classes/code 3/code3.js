
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`Book Issued: ${this.title}`);
        } else {
            console.log("Book is already issued.");
        }
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(`Book Returned: ${this.title}`);
        } else {
            console.log("Book is not issued yet.");
        }
    }

    getDetails() {
        return `${this.title} by ${this.author} | ISBN: ${this.isbn} | Issued: ${this.isIssued}`;
    }
}


const library = [
    new Book("The Alchemist", "Paulo Coelho", "101"),
    new Book("Harry Potter", "J.K. Rowling", "102"),
    new Book("Atomic Habits", "James Clear", "103"),
    new Book("Wings of Fire", "A.P.J. Abdul Kalam", "104"),
];

console.log("Available Books:");
library
    .filter(book => !book.isIssued)
    .forEach(book => console.log(book.getDetails()));


function issueByISBN(isbn) {
    const book = library.find(b => b.isbn === isbn);
    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found!");
    }
}

issueByISBN("103");

console.log("\nAvailable Books After Issue:");
library
    .filter(book => !book.isIssued)
    .forEach(book => console.log(book.getDetails()));
