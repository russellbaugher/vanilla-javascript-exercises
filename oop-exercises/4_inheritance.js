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

// Magazine Constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);   // take in magazine

  this.month = month;   // add month
}

// Inherit Prototype (this process is easier with classes)
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');
console.log(mag1);

console.log(mag1.getSummary());

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;
console.log(mag1);
