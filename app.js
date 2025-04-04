//Reduce

const nums = [10, 1, 5, 25];

const sum = nums.reduce((sum, curVal) => {
  return sum + curVal;
});
console.log(sum);

//with initial value
const sum1 = nums.reduce((sum1, curVal) => {
  return sum1 + curVal;
}, 100);
console.log(sum1);

const product = nums.reduce((prod, curVal) => {
  return prod * curVal;
});
console.log(product);

const maxVal = nums.reduce((max, currVal) => {
  if (currVal > max) return currVal;
  return max;
});
console.log(maxVal);

const votes = [
  "y",
  "y",
  "y",
  "y",
  "y",
  "y",
  "y",
  "y",
  "y",
  "n",
  "n",
  "n",
  "n",
  "n",
  "n",
];

const results = votes.reduce((tally, val) => {
  if (tally[val]) {
    tally[val]++;
  } else {
    tally[val] = 1;
  }
  return tally;
}, {});

console.log(results);

const results1 = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});
console.log(results1);

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    publishedYear: 1960,
    rating: 4.28,
    price: 12.99,
    inStock: true,
    pages: 336,
    publisher: "HarperCollins",
    language: "English",
    isbn: "9780061120084",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publishedYear: 1949,
    rating: 4.19,
    price: 9.99,
    inStock: true,
    pages: 328,
    publisher: "Secker & Warburg",
    language: "English",
    isbn: "9780451524935",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    publishedYear: 1925,
    rating: 3.93,
    price: 8.5,
    inStock: false,
    pages: 180,
    publisher: "Charles Scribner's Sons",
    language: "English",
    isbn: "9780743273565",
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    publishedYear: 1997,
    rating: 4.47,
    price: 15.99,
    inStock: true,
    pages: 223,
    publisher: "Bloomsbury",
    language: "English",
    isbn: "9780747532743",
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publishedYear: 1937,
    rating: 4.28,
    price: 14.95,
    inStock: true,
    pages: 310,
    publisher: "Allen & Unwin",
    language: "English",
    isbn: "9780261102217",
  },
  {
    id: 6,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publishedYear: 1813,
    rating: 4.26,
    price: 7.99,
    inStock: true,
    pages: 279,
    publisher: "T. Egerton",
    language: "English",
    isbn: "9780141439518",
  },
  {
    id: 7,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Literary Fiction",
    publishedYear: 1951,
    rating: 3.81,
    price: 11.25,
    inStock: false,
    pages: 234,
    publisher: "Little, Brown and Company",
    language: "English",
    isbn: "9780316769488",
  },
  {
    id: 8,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publishedYear: 1954,
    rating: 4.52,
    price: 22.99,
    inStock: true,
    pages: 1178,
    publisher: "Allen & Unwin",
    language: "English",
    isbn: "9780618640157",
  },
  {
    id: 9,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    publishedYear: 1988,
    rating: 3.9,
    price: 10.49,
    inStock: true,
    pages: 208,
    publisher: "HarperOne",
    language: "English",
    isbn: "9780062315007",
  },
  {
    id: 10,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    publishedYear: 2003,
    rating: 3.84,
    price: 13.75,
    inStock: true,
    pages: 489,
    publisher: "Doubleday",
    language: "English",
    isbn: "9780307474278",
  },
];

const groupedByRating = books.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book);
  return groupedBooks;
}, {});
console.log(groupedByRating);
