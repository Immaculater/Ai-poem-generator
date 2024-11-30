function generatePoem(event) {
event.preventDefault();

new Typewriter("#poem", {
  strings: "codding is fun",
  autoStart: true,
  delay: 1,
  cursor: "",
});
}



let poemElement = document.querySelector("#poem-generator-form");
poemElement.addEventListener("submit", generatePoem);