/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

// A simple Book class (using constructor function in JS)
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
// Function to display book information
// function displayBook(book) {
//   const bookList = document.getElementById("book-list");
//   const bookDiv = document.createElement("div");
//   bookDiv.innerHTML = `
//     <h2>${book.title}</h2>
//     <p>By ${book.author}, ${book.year}</p>
//   `;
//   bookList.appendChild(bookDiv);
// }
function displayBook(book) {
    const bookList = document.getElementById("book-list");
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>By ${book.author}, ${book.year}</p>
  `;
    bookList.appendChild(bookDiv);
}
// Create some book objects
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);
// Display the books on the webpage
displayBook(book1);
displayBook(book2);
// --- Tasks
// Task 1: Add type annotations to the function parameters and return types.
// Task 2: Convert the Book function to a TypeScript class.
// Task 3: Create an interface for a "Review" object (with properties like bookId, rating, comment).
// Task 4: Add a function to add a review to a book (you can simulate this with an array for now).
// Task 5: Add type annotations to the new variables and functions that you created in prior steps.

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsZUFBZSxZQUFZLElBQUksVUFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQixZQUFZLFlBQVksSUFBSSxVQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlZWstMS10eXBlc2NyaXB0LXdlYnBhY2stZ3VpZGVkLWFjdGl2aXR5LXRlc2ZhaHVuZm9sYS8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gQSBzaW1wbGUgQm9vayBjbGFzcyAodXNpbmcgY29uc3RydWN0b3IgZnVuY3Rpb24gaW4gSlMpXG4vLyBmdW5jdGlvbiBCb29rKHRpdGxlLCBhdXRob3IsIHllYXIpIHtcbi8vICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuLy8gICB0aGlzLmF1dGhvciA9IGF1dGhvcjtcbi8vICAgdGhpcy55ZWFyID0geWVhcjtcbi8vIH1cbmNsYXNzIEJvb2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBhdXRob3IsIHllYXIpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmF1dGhvciA9IGF1dGhvcjtcbiAgICAgICAgdGhpcy55ZWFyID0geWVhcjtcbiAgICB9XG59XG4vLyBGdW5jdGlvbiB0byBkaXNwbGF5IGJvb2sgaW5mb3JtYXRpb25cbi8vIGZ1bmN0aW9uIGRpc3BsYXlCb29rKGJvb2spIHtcbi8vICAgY29uc3QgYm9va0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2stbGlzdFwiKTtcbi8vICAgY29uc3QgYm9va0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIGJvb2tEaXYuaW5uZXJIVE1MID0gYFxuLy8gICAgIDxoMj4ke2Jvb2sudGl0bGV9PC9oMj5cbi8vICAgICA8cD5CeSAke2Jvb2suYXV0aG9yfSwgJHtib29rLnllYXJ9PC9wPlxuLy8gICBgO1xuLy8gICBib29rTGlzdC5hcHBlbmRDaGlsZChib29rRGl2KTtcbi8vIH1cbmZ1bmN0aW9uIGRpc3BsYXlCb29rKGJvb2spIHtcbiAgICBjb25zdCBib29rTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9vay1saXN0XCIpO1xuICAgIGNvbnN0IGJvb2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvb2tEaXYuaW5uZXJIVE1MID0gYFxuICAgIDxoMj4ke2Jvb2sudGl0bGV9PC9oMj5cbiAgICA8cD5CeSAke2Jvb2suYXV0aG9yfSwgJHtib29rLnllYXJ9PC9wPlxuICBgO1xuICAgIGJvb2tMaXN0LmFwcGVuZENoaWxkKGJvb2tEaXYpO1xufVxuLy8gQ3JlYXRlIHNvbWUgYm9vayBvYmplY3RzXG5jb25zdCBib29rMSA9IG5ldyBCb29rKFwiVGhlIEhvYmJpdFwiLCBcIkouUi5SLiBUb2xraWVuXCIsIDE5MzcpO1xuY29uc3QgYm9vazIgPSBuZXcgQm9vayhcIlRoZSBMb3JkIG9mIHRoZSBSaW5nc1wiLCBcIkouUi5SLiBUb2xraWVuXCIsIDE5NTQpO1xuLy8gRGlzcGxheSB0aGUgYm9va3Mgb24gdGhlIHdlYnBhZ2VcbmRpc3BsYXlCb29rKGJvb2sxKTtcbmRpc3BsYXlCb29rKGJvb2syKTtcbi8vIC0tLSBUYXNrc1xuLy8gVGFzayAxOiBBZGQgdHlwZSBhbm5vdGF0aW9ucyB0byB0aGUgZnVuY3Rpb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHR5cGVzLlxuLy8gVGFzayAyOiBDb252ZXJ0IHRoZSBCb29rIGZ1bmN0aW9uIHRvIGEgVHlwZVNjcmlwdCBjbGFzcy5cbi8vIFRhc2sgMzogQ3JlYXRlIGFuIGludGVyZmFjZSBmb3IgYSBcIlJldmlld1wiIG9iamVjdCAod2l0aCBwcm9wZXJ0aWVzIGxpa2UgYm9va0lkLCByYXRpbmcsIGNvbW1lbnQpLlxuLy8gVGFzayA0OiBBZGQgYSBmdW5jdGlvbiB0byBhZGQgYSByZXZpZXcgdG8gYSBib29rICh5b3UgY2FuIHNpbXVsYXRlIHRoaXMgd2l0aCBhbiBhcnJheSBmb3Igbm93KS5cbi8vIFRhc2sgNTogQWRkIHR5cGUgYW5ub3RhdGlvbnMgdG8gdGhlIG5ldyB2YXJpYWJsZXMgYW5kIGZ1bmN0aW9ucyB0aGF0IHlvdSBjcmVhdGVkIGluIHByaW9yIHN0ZXBzLlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9