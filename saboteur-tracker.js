window.onload = function() {
  var cards = document.getElementsByClassName("card");
  console.log(cards);
  console.log(cards.length);
  
  Array.from(cards).forEach(function(element) {
    element.addEventListener("click", function(event) {
      console.log(event.target.textContent);
      
      var count = event.target.textContent;
      if (count == 0) {
        count = 6;
      }
      event.target.textContent = count - 1;
    }, false);
  });
};
