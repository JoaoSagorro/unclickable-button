const maxWidth = 200;
const maxHeight = 50;

const div = document.querySelector(".div-height")

const newButtonWidth = window.innerWidth - maxWidth
const newButtonHeight = window.innerHeight - maxHeight


window.addEventListener("DOMContentLoaded", () => {
  const buttonOne = document.getElementById("button1");
  const buttonTwo = document.getElementById("button2");

  buttonTwo.addEventListener("click", () => {
    const body = document.querySelector(".full-heigth")
    const title = document.getElementById("title")
    buttonOne.remove()
    title.remove()
    body.insertAdjacentHTML("afterbegin", "<h1>🤡 YOU SUCK 🤡</h1>")
    buttonTwo.innerText = "Ahahah, try again!"
    console.log(body)
  })

  buttonOne.addEventListener("mouseover", () => {
    console.log("You can try, but you won't catch me")
    buttonOne.style.left = Math.floor(Math.random() * (newButtonWidth + 1)) + "px";
    buttonOne.style.top = Math.floor(Math.random() * (newButtonHeight +1)) + "px";
  })
})
