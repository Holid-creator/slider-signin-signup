const signUpButton = document.getElementById("signUp");
const signUpForm = document.getElementById("signUpForm");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signUpForm.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
