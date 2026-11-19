
/* ==========================================================
   BOOKWORM PROJECT
   JAVASCRIPT FOR BEGINNERS

   FEATURE 1: WRITING BOOK REVIEWS
   FEATURE 2: ADDING NEW BOOKS

   This file explains the JavaScript concepts step by step.
========================================================== */



/* ==========================================================
   FEATURE 1: ADD A BOOK REVIEW
========================================================== */


/*
CONCEPT 1: FUNCTIONS

WHAT IS A FUNCTION?

A function is a group of instructions that JavaScript
can run whenever we ask it to.

Think of a function like a recipe.

A recipe contains instructions for making food.
A function contains instructions for completing a task.

In our website, the task is adding a book review.


WHAT DOES "function" MEAN?

The word "function" tells JavaScript that we are
creating a function.


WHAT IS "addReview"?

addReview is the name of our function.

We choose this name because the function
will add a review to a book.


WHAT IS "(button)"?

"button" is called a PARAMETER.

A parameter is a variable that receives information
when the function is called.

In our HTML, we have:

<button onclick="addReview(this)">
  Submit Review
</button>

"onclick" means:
Run JavaScript when this button is clicked.

"this" means:
The exact HTML button that was clicked.

Therefore:

addReview(this)

passes the clicked button into our function.

Inside JavaScript, we call that button "button".


WHAT ARE THE CURLY BRACKETS { }?

Curly brackets contain the instructions
that belong to the function.

Everything inside these brackets runs
when the function is called.
*/

function addReview(button) {


  /* ========================================================
     CONCEPT 2: VARIABLES, LET, AND CLOSEST()
  ======================================================== */

  /*
  WHAT IS A VARIABLE?

  A variable is like a labeled box.

  We can store information inside that box
  and use the information later.


  WHAT DOES "let" MEAN?

  "let" creates a variable.

  Example:

  let age = 13;

  We created a variable called "age"
  and stored the number 13 inside it.


  WHAT IS "card"?

  "card" is the variable name.

  We will use it to store the HTML book card
  that contains the clicked button.


  WHAT DOES button.closest() DO?

  closest() searches upward through the HTML.

  It starts at the clicked button and looks
  for the nearest parent element matching
  the CSS selector we provide.


  WHAT IS ".book-card"?

  In HTML, each book has:

  <div class="card book-card h-100">

  The dot (.) means we are searching
  for an HTML class.

  ".book-card" means:

  Find an element with class="book-card".


  WHAT DOES THE COMPLETE LINE MEAN?

  Find the book card containing the button
  that was clicked.

  Then save that book card in a variable
  called "card".
  */

  let card = button.closest(".book-card");



  /* ========================================================
     CONCEPT 3: QUERYSELECTOR() AND .VALUE
  ======================================================== */

  /*
  WHAT IS querySelector()?

  querySelector() finds an HTML element
  using a CSS selector.

  Example:

  document.querySelector(".review")

  finds the first element with class="review"
  in the entire webpage.

  However, we have multiple books!

  Every book has its own review textarea.

  Therefore, instead of searching the
  entire webpage, we search inside "card".


  WHAT DOES card.querySelector(".review") MEAN?

  Find the review textarea that belongs
  to the book card we selected.


  WHY STORE THE ELEMENT?

  We will use this textarea twice:

  1. To read what the user typed.
  2. To clear the textarea afterward.

  Saving it in a variable makes it easier
  to use again.
  */

  let reviewInput = card.querySelector(".review");


  /*
  WHAT IS .value?

  .value reads the current information
  inside an HTML input, textarea, or select.

  Imagine the student typed:

  "This book was amazing!"

  The variable "review" will now contain:

  "This book was amazing!"
  */

  let review = reviewInput.value;


  /*
  READING THE STAR RATING

  Our HTML has a dropdown:

  <select class="rating">
    <option value="5">⭐⭐⭐⭐⭐</option>
    <option value="4">⭐⭐⭐⭐</option>
  </select>

  querySelector(".rating") finds the dropdown.

  .value gets the selected option's value.

  Example:

  If the user selects 4 stars,
  the variable "rating" contains "4".

  IMPORTANT:

  Input values are normally strings.

  That means "4" is text, not the number 4.

  We will convert it into a number later.
  */

  let rating = card.querySelector(".rating").value;



  /* ========================================================
     CONCEPT 4: IF, CONDITIONS, TRIM(), AND RETURN
  ======================================================== */

  /*
  WHAT IS AN IF STATEMENT?

  An if statement allows JavaScript
  to make decisions.

  Think of it like asking a question.

  Example:

  If it is raining, take an umbrella.

  In JavaScript:

  if (raining) {
    // Take an umbrella
  }


  WHAT IS review.trim()?

  trim() removes extra spaces from
  the beginning and end of text.

  Example:

  "   Hello   ".trim()

  becomes:

  "Hello"

  Why do we need it?

  Because someone could enter only spaces
  instead of writing an actual review.


  WHAT DOES === MEAN?

  === means "is exactly equal to".

  Example:

  5 === 5       // true
  5 === 3       // false

  In our code:

  review.trim() === ""

  asks:

  After removing extra spaces,
  is the review empty?


  WHAT IS alert()?

  alert() displays a small popup message
  in the browser.


  WHAT IS return?

  return stops the function immediately.

  If the review is empty, we do not want
  JavaScript to create a review box.

  Therefore, we stop the function.
  */

  if (review.trim() === "") {

    alert("Please write a review!");

    return;

  }



  /* ========================================================
     CONCEPT 5: CREATING HTML ELEMENTS
  ======================================================== */

  /*
  WHAT IS document.createElement()?

  JavaScript can create new HTML elements
  without us manually writing them in HTML.

  Example:

  document.createElement("div")

  creates a new <div> element.

  But it does not appear on the webpage yet!

  The element exists in JavaScript memory.

  We must add it to the webpage later.


  WHAT IS "reviewBox"?

  We create a variable called reviewBox
  to store our new div element.
  */

  let reviewBox = document.createElement("div");


  /*
  WHAT IS .className?

  .className sets the CSS class
  of an HTML element.

  We already have CSS styling for:

  .review-item

  By assigning this class, our new
  review box receives that styling.

  The result is similar to writing:

  <div class="review-item"></div>

  in HTML.
  */

  reviewBox.className = "review-item";



  /* ========================================================
     CONCEPT 6: TEXTCONTENT, REPEAT(), AND NUMBER()
  ======================================================== */

  /*
  CREATING THE STAR ELEMENT

  We want to display the rating
  using star symbols.

  The <strong> HTML element
  makes text bold.

  Therefore, we create a strong element.
  */

  let stars = document.createElement("strong");


  /*
  WHAT IS textContent?

  textContent allows JavaScript to set
  the text inside an HTML element.

  Example:

  let heading = document.createElement("h1");

  heading.textContent = "Hello!";

  The result is:

  <h1>Hello!</h1>


  WHAT IS repeat()?

  repeat() repeats a string a certain
  number of times.

  Example:

  "Hi".repeat(3)

  Result:

  "HiHiHi"


  WHAT IS Number()?

  Number() converts a value into a number.

  Our rating dropdown gives us "4".

  Number("4") converts it into 4.

  Then:

  "★".repeat(4)

  produces:

  ★★★★


  WHAT DOES THE COMPLETE LINE DO?

  It creates the number of stars
  the student selected.
  */

  stars.textContent = "★".repeat(Number(rating));


  /*
  CREATING THE REVIEW TEXT

  We create a paragraph element.

  Then we put the student's review
  inside that paragraph.
  */

  let words = document.createElement("p");

  words.textContent = review;



  /* ========================================================
     CONCEPT 7: APPENDCHILD()
  ======================================================== */

  /*
  WHAT IS appendChild()?

  appendChild() places one HTML element
  inside another HTML element.

  Think of it like putting objects
  inside a container.

  Our reviewBox is the container.

  We want to put two things inside:

  1. The stars
  2. The written review


  FIRST:

  Add the stars inside reviewBox.
  */

  reviewBox.appendChild(stars);


  /*
  SECOND:

  Add the review paragraph inside reviewBox.

  Our reviewBox now contains:

  <div class="review-item">
    <strong>★★★★</strong>
    <p>This book was amazing!</p>
  </div>

  But it still has not been added
  to the visible webpage.
  */

  reviewBox.appendChild(words);


  /*
  THIRD:

  Find the review-list inside
  the correct book card.

  Then add reviewBox inside it.

  This makes the review appear
  on the webpage!

  Because we used appendChild(),
  new reviews are added after
  previous reviews instead of
  replacing them.
  */

  card.querySelector(".review-list").appendChild(reviewBox);



  /* ========================================================
     CONCEPT 8: CLEARING THE INPUT
  ======================================================== */

  /*
  WHY CLEAR THE TEXTAREA?

  After submitting a review, we want
  the textarea to become empty.

  That way, the user can type
  another review.


  WHAT DOES "" MEAN?

  Two quotation marks with nothing
  inside represent an empty string.

  By setting:

  reviewInput.value = "";

  we replace the current textarea
  content with empty text.
  */

  reviewInput.value = "";

}



/* ==========================================================
   FEATURE 2: ADD A NEW BOOK
========================================================== */


/*
CONCEPT 1: CREATING ANOTHER FUNCTION

We already learned about functions.

Now we create another function
called addBook.

Its job is to:

1. Read information from the form.
2. Check if the information is valid.
3. Create a new book card.
4. Add the card to the webpage.
5. Clear the form.


WHY DOES THIS FUNCTION HAVE ()?

Unlike addReview(button), this function
does not need to receive a button.

It can find the form inputs directly
using their HTML IDs.

In HTML, we call it using:

<button onclick="addBook()">
  Add Book
</button>
*/

function addBook() {



  /* ========================================================
     CONCEPT 2: GETELEMENTBYID() AND VARIABLES
  ======================================================== */

  /*
  WHAT IS getElementById()?

  getElementById() finds an HTML element
  using its unique ID.

  Example HTML:

  <input id="bookTitle">

  JavaScript:

  document.getElementById("bookTitle")

  finds that input.


  WHY USE IDs?

  Each form input has a different purpose.

  We have:

  bookTitle
  bookAuthor
  bookGenre
  bookImage

  IDs allow us to find each input separately.


  WHAT DOES .value DO?

  It reads the information entered
  or selected by the user.


  WHAT DOES let DO?

  It creates variables to store
  the information we read.
  */


  // Store the book title.

  let title = document.getElementById("bookTitle").value;


  // Store the author's name.

  let author = document.getElementById("bookAuthor").value;


  // Store the selected genre.

  let genre = document.getElementById("bookGenre").value;


  // Store the image URL.

  let image = document.getElementById("bookImage").value;



  /* ========================================================
     CONCEPT 3: VALIDATION, IF, AND OR (||)
  ======================================================== */

  /*
  WHAT IS VALIDATION?

  Validation means checking whether
  the user entered the information
  we need.

  For our book, we require:

  1. A title
  2. An author
  3. A genre

  The image is optional.


  WHAT DOES || MEAN?

  || means OR.

  We use OR when we want to check
  multiple conditions.

  Example:

  if (age < 13 || age > 19)

  means:

  If age is less than 13
  OR age is greater than 19.


  OUR CONDITION:

  title.trim() === ""

  Checks if the title is empty.

  author.trim() === ""

  Checks if the author is empty.

  genre === ""

  Checks if no genre was selected.


  WHAT DOES THE COMPLETE IF MEAN?

  If the title is empty
  OR the author is empty
  OR the genre is missing:

  Show an alert and stop the function.


  WHY USE return?

  Because we do not want to create
  a book with missing information.
  */

  if (
    title.trim() === "" ||
    author.trim() === "" ||
    genre === ""
  ) {

    alert("Please enter a title, author, and genre!");

    return;

  }



  /* ========================================================
     CONCEPT 4: CREATING A BOOTSTRAP GRID COLUMN
  ======================================================== */

  /*
  We already learned createElement().

  Now we will use it to create
  a new book container.


  WHAT IS A DIV?

  A div is an HTML container.

  It helps us group other HTML elements.


  WHY CREATE A DIV?

  Our existing book cards are placed
  inside Bootstrap grid columns.

  We want new books to use the
  same layout.


  WHAT DOES className DO?

  It assigns CSS classes.


  WHAT IS col-md-6?

  This is a Bootstrap class.

  On medium screens, the column
  uses 6 out of 12 grid spaces.

  That means 2 columns per row.


  WHAT IS col-lg-4?

  On large screens, the column
  uses 4 out of 12 grid spaces.

  That means 3 columns per row.


  WHAT IS newBook?

  A variable that stores the new
  Bootstrap column.
  */

  let newBook = document.createElement("div");

  newBook.className = "col-md-6 col-lg-4";



  /* ========================================================
     CONCEPT 5: INNERHTML AND TEMPLATE LITERALS
  ======================================================== */

  /*
  WHAT IS innerHTML?

  innerHTML allows JavaScript to place
  HTML code inside an element.

  Example:

  let box = document.createElement("div");

  box.innerHTML = "<h1>Hello!</h1>";

  This creates a div containing an h1.


  WHAT ARE BACKTICKS ` `?

  Backticks allow us to write text
  across multiple lines.

  This is called a TEMPLATE LITERAL.

  We use backticks because our
  book card contains many lines
  of HTML.


  WHY ARE WE REUSING HTML?

  We already have book cards in
  our website.

  Instead of designing a new card,
  we use the same structure.

  This keeps every book looking
  consistent.


  IMPORTANT:

  The HTML below creates:

  - Book cover
  - Checkbox
  - Menu button
  - Read Book button
  - Book title
  - Author
  - Genre
  - Star rating dropdown
  - Review textarea
  - Submit Review button
  - Review display area

  We leave the title, author, genre,
  and image empty for now.

  We will fill them using JavaScript
  in the next concept.
  */

  newBook.innerHTML = `

    <div class="card book-card h-100">

      <div class="cover-wrap">

        <input
          type="checkbox"
          class="cover-check"
          aria-label="Select book"
        >

        <button
          type="button"
          class="cover-menu"
          aria-label="More options"
        >
          <i class="bi bi-three-dots-vertical"></i>
        </button>

        <img
          class="card-img-top"
          alt="Book cover"
        >

        <button
          type="button"
          class="btn btn-read cover-read"
        >
          Read Book
        </button>

      </div>


      <div class="card-body">

        <h5 class="card-title"></h5>

        <p class="card-text book-author"></p>

        <p class="text-muted book-genre"></p>


        <details class="review-panel">

          <summary>Rate &amp; Review</summary>

          <h6>Rate This Book</h6>

          <select class="form-select rating mb-2">

            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>

          </select>


          <textarea
            class="form-control review mb-2"
            placeholder="Write your review..."
          ></textarea>


          <button
            class="btn btn-read"
            onclick="addReview(this)"
          >
            Submit Review
          </button>


          <div class="review-list mt-3"></div>

        </details>

      </div>

    </div>

  `;



  /* ========================================================
     CONCEPT 6: QUERYSELECTOR() AND TEXTCONTENT
  ======================================================== */

  /*
  Our new book card currently has
  empty spaces for the information.

  For example:

  <h5 class="card-title"></h5>

  We need to insert the title
  that the user typed.


  WHAT DOES newBook.querySelector() DO?

  It searches inside our newly
  created book column.

  This is important because
  other books already have
  the same CSS classes.


  WHAT DOES textContent DO?

  It places text inside an HTML element.


  FIRST:

  Find the title element.

  Then put the book title inside it.
  */

  newBook.querySelector(".card-title").textContent = title;


  /*
  SECOND:

  Find the author paragraph.

  The + symbol joins strings together.

  This is called STRING CONCATENATION.

  Example:

  "Hello " + "World"

  Result:

  "Hello World"

  Therefore:

  "Author: " + author

  might produce:

  "Author: J.R.R. Tolkien"
  */

  newBook.querySelector(".book-author").textContent =
    "Author: " + author;


  /*
  THIRD:

  Find the genre paragraph.

  Then display the selected genre.

  Example:

  "Genre: Fantasy"
  */

  newBook.querySelector(".book-genre").textContent =
    "Genre: " + genre;



  /* ========================================================
     CONCEPT 7: STARTSWITH(), NOT (!), AND AND (&&)
  ======================================================== */

  /*
  WHAT IS startsWith()?

  startsWith() checks whether a string
  begins with certain characters.

  Example:

  "Hello World".startsWith("Hello")

  Result:

  true


  WHY CHECK THE IMAGE URL?

  A normal web image URL usually
  starts with:

  https://

  or

  http://


  WHAT DOES ! MEAN?

  ! means NOT.

  It reverses a true/false value.

  Example:

  !true

  becomes:

  false


  WHAT DOES && MEAN?

  && means AND.

  Both conditions must be true.


  OUR CONDITION:

  !image.startsWith("https://")

  means:

  The image does NOT start with https://


  THE COMPLETE CONDITION:

  If the image does NOT start with https://

  AND

  does NOT start with http://

  then use our placeholder image.


  WHY USE A PLACEHOLDER?

  Because the student might leave
  the image input empty.

  We still want the book card
  to display an image.

  NOTE:

  This is a basic beginner check.

  It does not guarantee that an image
  link is valid or that the image exists.
  */

  if (
    !image.startsWith("https://") &&
    !image.startsWith("http://")
  ) {

    image = "https://placehold.co/200x280?text=Book";

  }


  /*
  WHAT IS .src?

  The src property controls
  the source of an image.

  HTML example:

  <img src="book.jpg">

  JavaScript can change this value.


  WHAT DOES THIS LINE DO?

  Find the image inside our new card.

  Then set its source to the
  user's image URL or placeholder.
  */

  newBook.querySelector("img").src = image;



  /* ========================================================
     CONCEPT 8: ADDING THE BOOK TO THE COLLECTION
  ======================================================== */

  /*
  Our new book card is now complete.

  But it is not visible on the webpage yet.


  WHAT IS bookCollection?

  In our HTML, we have:

  <div class="row g-4" id="bookCollection">

  This container holds all the book cards.


  WHAT DOES getElementById() DO?

  It finds that container.


  WHAT DOES appendChild() DO?

  It adds our new book column
  inside the collection.

  This makes the new book appear
  on the webpage.


  IMPORTANT:

  appendChild() adds the new book
  after the existing elements.

  It does not delete the other books.

  In our current HTML, the Add New Book
  card is also inside bookCollection.

  Therefore, the new book will appear
  after the Add New Book card.
  */

  document.getElementById("bookCollection").appendChild(newBook);



  /* ========================================================
     CONCEPT 9: CLEARING THE FORM
  ======================================================== */

  /*
  After adding a book, we want
  to reset the form.

  We already learned that:

  .value

  reads or changes the value
  of an input.


  WHAT DOES = "" DO?

  It replaces the current value
  with an empty string.

  This clears the input.


  We clear all four fields so
  the student can add another book.
  */


  // Clear the title.

  document.getElementById("bookTitle").value = "";


  // Clear the author.

  document.getElementById("bookAuthor").value = "";


  // Reset the genre dropdown.

  document.getElementById("bookGenre").value = "";


  // Clear the image URL.

  document.getElementById("bookImage").value = "";

}
