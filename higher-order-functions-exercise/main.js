const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// **FOR**
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

//=======================================================

// **FOREACH**
// companies.forEach(function(company) {
//   console.log(company.category, company.name);
// });

//=======================================================

// **FILTER** Get 21 & Older
// Option 1 - for
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// Option 2 - filter
// const canDrink = ages.filter(function(age) {
//   if (age >= 21) {
//     return true;
//   }
// });
//
// console.log(canDrink);

// Option 3 - filter w/arrow function
// const canDrink = ages.filter(age => age >= 21); //(parameter,arrow,condition)
//
// console.log(canDrink);

//=======================================================

// **FILTER** Filter Retail Companies
// const retailCompanies = companies.filter(function(company) {
//   if (company.category === 'Retail') {
//     return true;
//   }
// });
//
// console.log(retailCompanies);

// **FILTER** Filter Retail Companies => Arrow
// const retailCompanies = companies.filter((company) => company.category === 'Retail');
//
// console.log(retailCompanies);

//=======================================================

// **FILTER** Filter 80s companies
// const eightiesCompanies = companies.filter(function(company) {
//   if (company.start < 1990) {
//     return true;
//   }
// });
// console.log(eightiesCompanies);

// **FILTER** Filter 80s companies => Arrow
// const eightiesCompanies = companies.filter((company) => (company.start > 1979 && company.start < 1990));
//
// console.log(eightiesCompanies);

//=======================================================

// **FILTER** Companies that lasted 10+ years
// const lastedTenYears = companies.filter(company => ((company.end - company.start) >= 10 ));
//
// console.log(lastedTenYears);

//=======================================================

// **MAP** Array from Array
// Create array of company names
// const companyNames = companies.map(function(company) {
//   return company.name;
// });
// console.log(companyNames);

// Create array of company names show dates
// const companyNames = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });
// console.log(companyNames);

// Create array of company names show dates => arrow
// const companyNames = companies.map(company =>
// `${company.name} [${company.start} - ${company.end}]`);
//
// console.log(companyNames);

//=======================================================

// **MAP** Array from Array , manipulate data
// const ageMap = ages
// .map(age => Math.sqrt(age))
// .map(age => age * 2);
// console.log(ageMap);

//=======================================================

// **SORT** // sort companies by date
// const sortedCompanies = companies.sort(function(c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedCompanies);

// **SORT** // sort companies by date CONCISE (arrow,ternary)
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

// **SORT** // sort ages ascending
// const sortAges = ages.sort((a, b) => a - b); // b - a for descending
// console.log(sortAges);

//=======================================================

// **REDUCE** Sum
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }
// console.log(ageSum);

// Sum Ages
// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);
// console.log(ageSum);

// Sum Ages =>
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// **REDUCE** total business years for all Companies
// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);
// console.log(totalYears);

// **REDUCE** total business years for all Companies CONCISE
// const totalYears =
// companies.reduce((total, company) => (total + (company.end - company.start)), 0);
// console.log(totalYears);


// **COMBINE METHODS**
const combined = ages
.map(age => age * 2) //array
.filter(age => age >= 40) //remove some
.sort((a, b) => a - b) //ascending order
.reduce((a, b) => a + b, 0);  //sum
console.log(combined);
