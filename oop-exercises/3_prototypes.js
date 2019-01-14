// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
};

// getSummary Prototype bc not always want it
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// getAge prototype
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// Revise / Change Year , manipulate data
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
}

// Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

// console.log(book1.getSummary());
// console.log(book2.getSummary());
console.log(book2.getAge());
console.log(book2);
book2.revise('2018');
console.log(book2);
