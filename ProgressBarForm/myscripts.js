const nume = document.getElementById("numeid");
const prenume = document.getElementById("prenumeid");
const username = document.getElementById("usernameid");
const password = document.getElementById("passwordid");
const email = document.getElementById("emailid");
const progressive = document.querySelector(".progressive-bar-1");
const button = document.querySelector(".submit-button");
const p1 = document.querySelector(".para1");
const p2 = document.querySelector(".para2");

let progress = 0;
let x = [0, 0, 0, 0, 0];
let z = 0;
const inputArr = [nume, prenume, username, password, email];
inputArr.forEach((input, index, arr) => {
  input.addEventListener("blur", () => {
    if (
      input.value != "" &&
      input.value != null &&
      input.value
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) &&
      index === 4
    ) {
      x[index] = 1;
      email.style.border = "1px solid gray";
      p2.classList.add("hidden");
    } else if (
      input.value != "" &&
      input.value != null &&
      !input.value
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) &&
      index === 4
    ) {
      email.style.border = "2px solid red";
      email.style.outline = "none";
      p2.classList.remove("hidden");
      p2.style.color = "red";
      p2.style.fontSize = "0.6em";
    } else if (
      input.value != "" &&
      input.value != null &&
      input.value.match(/^(?=.*[a-zA-Z])(?=.*[0-9])/) &&
      index === 3
    ) {
      x[index] = 1;
      password.style.border = "1px solid gray";
      p1.classList.add("hidden");
    } else if (
      input.value != "" &&
      input.value != null &&
      !input.value.match(/^(?=.*[a-zA-Z])(?=.*[0-9])/) &&
      index === 3
    ) {
      password.style.border = "2px solid red";
      password.style.outline = "none";
      p1.classList.remove("hidden");
      p1.style.color = "red";
      p1.style.fontSize = "0.7em";
    } else if (
      input.value != "" &&
      input.value != null &&
      (index === 0 || index === 1 || index === 2)
    ) {
      x[index] = 1;
    } else if (input.value === "" && index === 4) {
      email.style.border = "1px solid gray";
      p2.classList.add("hidden");
      x[index] = 0;
    } else if (input.value === "" && index === 3) {
      password.style.border = "1px solid gray";
      p1.classList.add("hidden");
      x[index] = 0;
    } else {
      x[index] = 0;
    }
    var y = x.slice(); // trb sa copiezi un array in alt array by value, not by reference
    let nr = 0;
    for (let e = 0; e < y.length; e++) {
      if (y[e] == 1) {
        nr++;
      }
      if (nr < 5) {
        button.disabled = true;
      } else {
        button.disabled = false;
      }
    }
    console.log(nr);
    progressive.style.width = nr * 20 + "%";
    progressive.style.backgroundColor = "green";
  });
});

// const slider = document.querySelector(".slider");
// const img = document.querySelector("img");

// slider.addEventListener("mousemove", () => {
//   img.style.transform = "scale(" + slider.value / 100 + ")";
// });
