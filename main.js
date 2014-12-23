var icon = document.getElementById('icon');
var anchor = document.getElementById('about--anchor');

icon.addEventListener('click', function(event){
  event.preventDefault();
  Velocity(anchor, "scroll", { duration: 500 }, { easing: "ease-in-out" });
});