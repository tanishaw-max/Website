const orderButtons = document.querySelectorAll(".menu-card button");

orderButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("☕ Your coffee has been added to cart!");
  });
});
const subscribeBtn = document.querySelector(".subscribe-form button");
const emailInput = document.querySelector(".subscribe-form input");

subscribeBtn.addEventListener("click", () => {
  if (emailInput.value === "") {
    alert("Please enter your email 📧");
  } else {
    alert("Thanks for subscribing ☕");
    emailInput.value = "";
  }
});
