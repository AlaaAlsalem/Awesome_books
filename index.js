class BookLibrary {
  constructor() {
    this.booksCollection = document.querySelector('.books');
    this.bookList = JSON.parse(localStorage.getItem('books')) || [];
    this.bookList.forEach((book) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h2>${book.title}</h2>
        <p>${book.author}</p>
      `;

      const removeBtn = document.createElement('button');
      removeBtn.innerText = 'Remove';
      removeBtn.addEventListener('click', () => {
        this.removeBook(div, book.title, book.author);
      });

      div.appendChild(removeBtn);

      this.booksCollection.appendChild(div);
    });
  }
