const numbers = document.querySelectorAll(".number");
const input = document.querySelector(".input");
const eq = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const comma = document.querySelector(".point");
numbers.forEach((element) => {
  if (element.classList.contains("delete")) {
    element.addEventListener("click", () => {
      const inp = input.innerText.split("");
      inp.pop();
      const inpJoined = inp.join("");
      input.innerText = inpJoined;
    });
  } else {
    element.addEventListener("click", () => {
      input.innerText += `${element.innerText}`;
    });
  }

  eq.addEventListener("click", () => {
    if (input.innerText.includes("+")) {
      const splitarr = input.innerText.split("+");
      const suma = Number(splitarr[0]) + Number(splitarr[1]);
      input.innerText = String(suma);
    } else if (input.innerText.includes("-")) {
      const splitarr = input.innerText.split("-");
      const diff = Number(splitarr[0]) - Number(splitarr[1]);
      input.innerText = String(diff);
    } else if (input.innerText.includes("/")) {
      const splitarr = input.innerText.split("/");
      const divison = Number(splitarr[0]) / Number(splitarr[1]);
      input.innerText = String(divison);
    } else if (input.innerText.includes("*")) {
      const splitarr = input.innerText.split("*");
      const mult = Number(splitarr[0]) * Number(splitarr[1]);
      input.innerText = String(mult);
    } else if (input.innerText.includes("%")) {
      const splitarr = input.innerText.split("%");
      const percentage = Number(splitarr[0] / 100) * Number(splitarr[1]);
      input.innerText = String(percentage);
    }
  });

  clear.addEventListener("click", () => {
    input.innerText = "";
  });
});
comma.addEventListener("click", () => {
  input.innerText + ".";
});
