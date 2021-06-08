function enterSpecialDate() {
  var userDate = new Date(document.getElementById("special-date").value);
  console.log(userDate);

  const currentTime = new Date();
  const diff = userDate - currentTime;

  /* we've been given the difference in milliseconds, so some division is needed */
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  /* send values back into HTML document */
  document.getElementById("days").innerHTML = d;
  document.getElementById("hours").innerHTML = h;
  document.getElementById("minutes").innerHTML = m;
  document.getElementById("seconds").innerHTML = s;

  /*collect user's special occasion and send back into document*/
  var userOccasion = document.getElementById("userOccasion").value;
  document.getElementById("userOccasionOutput").innerHTML = userOccasion;
  console.log(document.getElementById("userOccasion").value);
}
setInterval(enterSpecialDate, 1000);

/*peekaboo!*/
let hideInput = document.getElementById("input-hide");
console.log(hideInput);
let hideCountdown = document.getElementById("countdown-hide");
console.log(hideCountdown);
hideCountdown.style.display = "none";

let button = document.querySelector("button");
console.log(button);

button.addEventListener("click", () => {
  if (hideInput.style.display === "none") {
    hideInput.style.display = "block";
  } else {
    hideInput.style.display = "none";
    hideCountdown.style.display = "block";
  }
});
