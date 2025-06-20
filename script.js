document.addEventListener("DOMContentLoaded", () => {
  const nameHeading = document.querySelector("h1");
  nameHeading.addEventListener("click", () => {
    alert("Welcome to Bismark's Portfolio!");
  });
});
 const date = new Date()
 document.getElementById('year').innerHTML = date.getFullYear()