// Set the date we're counting down to
var countDownDate = new Date("october 30, 2022 19:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  var d =document.getElementById("day");
  var he =document.getElementById("heure");
  var m =document.getElementById("minutes");
  var s =document.getElementById("second");
  
    d.innerHTML = days;
    he.innerHTML = hours;
    m.innerHTML = minutes;
    s.innerHTML = seconds;
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Il n'y plus de formatiion";
    document.getElementById('timer').style.display = 'none';
  }
}, 1000);


function chargebattery() {
    var a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf244;";
    a.style.color = "orangered";
    setTimeout(function () {
        a.innerHTML = "&#xf243;";
        a.style.color = "blue";
      }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf242;";
        a.style.color = "orange";
      }, 2000);
    setTimeout(function () {
        a.innerHTML = "&#xf241;";
        a.style.color = "white";
      }, 3000);
    setTimeout(function () {
        a.innerHTML = "&#xf240;";
        a.style.color = "gray";
      }, 4000);
  }
  chargebattery();
  setInterval(chargebattery, 5000);