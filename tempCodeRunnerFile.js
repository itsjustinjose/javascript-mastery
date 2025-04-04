const groupedByRating = books.reduce((groupedBooks, book) => {
  const key = Math.floor(books.rating);
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book);
  return groupedBooks;
}, {});
console.log(groupedByRating);