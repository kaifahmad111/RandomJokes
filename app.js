document.querySelector(".get-jokes").addEventListener("click", function (e) {
  console.log("You pressed the get jokes button");
  const num = document.querySelector("#number").value; //note we did not used the textContent here
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://api.icndb.com/jokes/random/${num}`, true); //true for asyncronous

  let value = "";
  xhr.onload = function () {
    console.log(this.status);
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response.value);
      if (response.type === "success") {
        response.value.forEach((element) => {
          value += `<li>${element.joke}</li>`;
          //   console.log(value);
        });
      }
      document.querySelector(".jokes").innerHTML = `${value}`;
    }
  };
  //   console.log(value);

  xhr.send();

  e.preventDefault();
  console.log(num);
});
