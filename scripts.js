/* ===== Contact Form Validation ===== */
function validateForm() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");

  if (name.value == "" || email.value == "") {
    alert("Please fill out all required fields.");
    return false;
  } else {
    alert("Thank you! Your message has been submitted.");
    return true;
  }
}

/* بروجكت دسكربشن للشو الهايد */
function toggleDescription(descriptionId, button) {

  var description = document.getElementById(descriptionId);

  if (description.classList.contains("hidden")) {
    description.classList.remove("hidden");
    button.innerHTML = "Hide Description";
  } else {
    description.classList.add("hidden");
    button.innerHTML = "Show Description";
  }

}


/* ===== CV Blockquote Event Handling ===== */

var quote = document.querySelector("blockquote");

if (quote != null) {

quote.addEventListener("mouseover", function() {
  quote.style.backgroundColor = "#f2e3de";
  quote.style.fontStyle = "normal";
  quote.style.fontSize = "1.2rem";
});

quote.addEventListener("mouseout", function() {
  quote.style.backgroundColor = "#fffaf5";
  quote.style.fontStyle = "italic";
  quote.style.fontSize = "1.08rem";
});

}


/* ===== Homepage Load Date ===== */
window.onload = function() {
  var footer = document.querySelector("footer");

  if (footer != null && document.title == "Home") {
    var newParagraph = document.createElement("p");
    var currentDate = new Date();
    var message = document.createTextNode("Page loaded on: " + currentDate);

    newParagraph.appendChild(message);
    footer.appendChild(newParagraph);
  }
};
