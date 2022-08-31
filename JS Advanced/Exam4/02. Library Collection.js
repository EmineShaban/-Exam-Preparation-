class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity
        this.books = []
        // this.num = 0
    }

    addBook(bookName, bookAuthor) {
        this.capacity = Number(this.capacity)
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.')
        }
        this.books.push({ bookName: bookName, bookAuthor: bookAuthor, payed: false })
        // this.num += 1
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        let book = this.books.find(e => e.bookName === bookName)
        if (book == undefined) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        if (book.payed) {
            throw new Error(`${bookName} has already been paid.`)
        }else{

            book.payed = true
            return `${bookName} has been successfully paid.`
        }
    }

    removeBook(bookName) {
        let book = this.books.find(e => e.bookName === bookName)
        if (book == undefined) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        if (book.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        this.books.splice(this.books.indexOf(bookName), 1)
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {

        if (bookAuthor == undefined) {            
            let sortedBook = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
            let result = []
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`)
            sortedBook.map(e => {
                let paid = e.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${e.bookName} == ${e.bookAuthor} - ${paid}.`)
            })
            return result.join('\n').trim()
        } else {
            let book = this.books.find(e => e.bookAuthor === bookAuthor)

            // let bookAuthor1 = this.books.find(e => e.bookAuthor === bookAuthor)
            if(book != undefined){
                let result = []
                let paid = book.paid ? 'Has Paid' : 'Not Paid';
                result.push(`${book.bookName} == ${book.bookAuthor} - ${paid}.`)
                return result.join('\n').trim()

            }else{
                throw new Error (`${bookAuthor} is not in the collection.`)

            }
        }
    }
}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'vasya');
console.log(library.getStatistics());

// The book collection has 2 empty spots left.
// Don Quixote == Miguel de Cervantes - Has Paid.
// In Search of Lost Time == Marcel Proust - Not Paid.
// Ulysses == James Joyce - Not Paid.