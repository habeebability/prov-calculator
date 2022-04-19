let screen = document.querySelector(".screen");
let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    if (screen.innerText.length > 15) {
      screen.innerText = "";

      //   return "Nan";
    }
    switch (e.target.innerText) {
      case "C":
        screen.innerText = "";
        break;
      case "←":
        if (screen.innerText) {
          screen.innerText = screen.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          screen.innerText = eval(screen.innerText);
        } catch {
          screen.innerText = "Error";
        }
        break;

      default:
        screen.innerHTML += e.target.innerText;
    }
  });
});
