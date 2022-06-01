let numberFact = document.getElementById("numberFact");
numberFact.style.display = "none";

let inputValue = document.querySelector("input");

let number = inputValue.value;
let getFact = document.querySelector("button");
let count = 5;
let loading = "Loading in " + count + " seconds";
/*Fetching From API*/

fetch("http://numbersapi.com/" + number,{cache: "no-store"})
  .then((response) => response.text())
  .then((data) => {
    data === ""
      ? (numberFact.innerHTML = "Invalid input")
      : (numberFact.innerHTML = data);
  })
  .catch((error) => {
    alert(error + " occurred");
  });

/*Button Events*/

getFact.addEventListener("click", (e) => {
  e.preventDefault();
  if(number=""){
    window.location.reload();
  }
  numberFact.style.display = "block";
});
inputValue.addEventListener("change", () => {
  window.location.reload();


});
