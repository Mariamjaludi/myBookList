//book class
class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI class: handles UI tasks
class UI {
  //class method
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'Book One',
        author: 'John Doe',
        isbn: '325543'
      },
      {
        title: 'Book Two',
        author: 'Jane Doe',
        isbn: '1244521'
      }
    ];
    const books = StoredBooks;

    books.forEach( book => UI.addBookToList(book));
  }

  static addBookToList(book){
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href='#' class="btn btn-danger btn-sm delete">X</a></td>
    `;
    list.appendChild(row);
  }

  static deleteBook(el){
    if(el.classList.contains('delete')){
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

//store class: handles storage


//event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//event: add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault()
  //get form values
  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const isbn = document.querySelector('#isbn').value

  //instantiate book
  const book = new Book(title, author, isbn)
  // console.log(book)
  UI.addBookToList(book);

  //Clear fields
  UI.clearFields();
})

//event: remove a book
document.querySelector('#book-list').addEventListener('click', e => {
  UI.deleteBook(e.target)
})
