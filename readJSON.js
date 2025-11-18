const fs = require('fs');

// Read the JSON file
fs.readFile('books.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Parse the JSON data
  const bookData = JSON.parse(data);

  // --- Fixed Section ---

  // Access the information of the first book
  console.log("--- First Book Details ---");
  const firstBook = bookData.Books[0];
  console.log("Title:", firstBook.title);
  console.log("Author:", firstBook.author);
  console.log("Year:", firstBook.publicationYear);
  console.log("Genres:", firstBook.genres);


  // Access and print the information of all books
  console.log("\n--- All Book Titles ---");
  bookData.Books.forEach(element => {
    console.log("Title:", element.title);
  });
});