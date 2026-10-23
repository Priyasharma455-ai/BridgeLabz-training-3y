// Q3: Library Management System (Classes + Objects)
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = false;
    }
    issueBook() {
        if (this.isIssued) return false;
        this.isIssued = true;
        return true;
    }
    returnBook() {
        if (!this.isIssued) return false;
        this.isIssued = false;
        return true;
    }
}
const books = [
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN101"),
    new Book("The Alchemist", "Paulo Coelho", "ISBN102"),
    new Book("Atomic Habits", "James Clear", "ISBN103")
];
function showAvailableBooks() {
    const available = books.filter(book => !book.isIssued);
    console.log("Available books:");
    if (available.length === 0) console.log("No books available.");
    available.forEach(book => console.log(`${book.title} by ${book.author} (ISBN: ${book.isbn})`));
}
function issueBookByISBN(isbn) {
    const book = books.find(item => item.isbn === isbn);
    if (!book) console.log("Book not found.");
    else if (book.issueBook()) console.log(`Issued: ${book.title}`);
    else console.log(`${book.title} is already issued.`);
}
showAvailableBooks();
issueBookByISBN("ISBN102");
console.log("\nAvailable after issuing:");
showAvailableBooks();
// To return a book: books.find(book => book.isbn === "ISBN102").returnBook();
