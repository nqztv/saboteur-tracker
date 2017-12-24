window.onload = function() {
  var cards = document.getElementsByClassName("card");
  
  var decrementCounter = 
  
  Array.from(cards).forEach(function(element) {
    element.addEventListener("click", function(event) {
      event.target.textContent = event.target.textContent - 1;
    }, false);
};
