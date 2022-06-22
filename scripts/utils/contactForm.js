const modal = document.getElementById("contact_modal");
// open modal
const contactButton = document.querySelector("#form_modal");
contactButton.addEventListener("click", () => {
  modal.style.display = "block";
});

// close modal
const closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// submit form
const form = document.getElementById("form");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const message = document.getElementById("message");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(
    `prenom : ${first.value}, nom : ${last.value}, email : ${email.value}, message : ${message.value}`
  );
});
