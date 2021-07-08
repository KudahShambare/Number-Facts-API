let numberFact = document.getElementById("numberFact");
let inputValue = document.querySelector("input");
let number = inputValue.value;
let getFact = document.querySelector("button");

/*Fetching From API*/
function fetchData() {
    fetch("http://numbersapi.com/" + number)
      .then((response) => response.text())
        .then((data) => {
          data ===""?numberFact.innerHTML="Invalid input":
          numberFact.innerHTML = data;
      }).catch((error) => {
          alert(error+" occurred")
      })

}
/*Button Events*/

getFact.addEventListener("click", fetchData)
inputValue.addEventListener("change", () => {
    window.location.reload();
})
