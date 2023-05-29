// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Variables
var dateDisplayEl = $("#date-display");
var saveEl = $(".saveBtn");
var timeBlockEl = $(".time-block");

// TODO: Add code to display the current date in the header of the page.
function displayDate() {
  var currentDate = dayjs().format("MMM D, YYYY");
  dateDisplayEl.text(currentDate);
}
// TODO: Add code that saves text data to local storage when the save button is clicked.
$(timeBlockEl).each(function () {
  var currentHour = dayjs().format("HH");
  var schedHour = $(this).attr("id").split("-")[1];
  console.log(schedHour);
  console.log(currentHour);

  if (schedHour > currentHour) {
    $(this).addClass("future");
  } else if (schedHour == currentHour) {
    $(this).addClass("present");
    $(this).removeClass("future");
  } else {
    $(this).addClass("past");
    $(this).removeClass("present");
  }
});

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
});

// TODO: Add code that writes the saved data in local storage to the page.
// this for loop runs through the potentially saved local storage and retrieves said potential data to dynamically write it to the textareas in the html.
for (let i = 09; i <= 17; i++) {
  $(`#hour-${i} .description`).val(localStorage.getItem(`${i}`));
}
// ^refers to the id and class vallue                    ^ refers to the key stored in local storage

displayDate();
