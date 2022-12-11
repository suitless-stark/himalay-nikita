var modalCloseBtn = document.querySelector('.in-button');
var modal = document.querySelector('.modal-container');
var bgAudio = document.querySelector('.bg-audio');

modalCloseBtn.onclick = function() {
  modal.style.display = "none";
  bgAudio.play();
  window.scrollTo(0, 0);
  var guestName = document.querySelector('#fullName');

  if (guestName.value == "") {
    guestName.value = 'Guest';
  }

  console.log(guestName.value);

  var guestName2 = document.querySelector('.guest-name');
  guestName2.innerHTML = guestName.value + ',';
};

//modal ends ^^


function updateTimer() {
  future = Date.parse("Jan 21, 2023 11:30:00");
  now = new Date();
  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  document.getElementById("timer")
    .innerHTML =
    '<div>' + d + '<span>days</span></div>' +
    '<div>' + h + '<span>hours</span></div>' +
    '<div>' + m + '<span>minutes</span></div>' +
    '<div>' + s + '<span>seconds</span></div>';
}
setInterval('updateTimer()', 1000);

//timer ends ^^
