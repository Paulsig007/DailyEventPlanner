// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Variables
var dateDisplayEl = $("#date-display");
var saveEl = $(".saveBtn");

// TODO: Add code to display the current date in the header of the page.

function displayDate() {
  var currentDate = dayjs().format("MMM D, YYYY");
  dateDisplayEl.text(currentDate);
}

saveEl.click(function (event) {
  console.log("clicked");
  event.preventDefault();
  // 'this' references the .saveBtn class. $(this) will turn .saveBtn into a jQuery object allowing all jQuery properties to be used on it.
  // the .siblings() and .parent() are both traversing methods that select the specific elements that are siblings and parents (respectively) with the set class or id that is refered to in the methods parens.
  // the .val then refers to the Description written and the Hour block that said description is written in.
  var schedHour = $(this).parent().attr("id").split("-")[1];
  var description = $(this).siblings(".description").val();
  // setItem() method will save the data to local storage and will require the keyName and the keyValue.
  localStorage.setItem(schedHour, description);

  $("#hour-09 .description").val(localStorage.getItem("09"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  $("#hour-17 .description").val(localStorage.getItem("17"));
});

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//

displayDate();
