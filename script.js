const prompts = [
  "Write the first sentence of a note you are not ready to send.",
  "Describe a room by naming only what changed today.",
  "Make a list of five small things that kept their promise.",
  "Start with: I almost forgot to notice...",
  "Name the color of the problem, then give it a door.",
  "Write three lines that would fit on a receipt."
];

const promptEl = document.querySelector("#prompt");
const savedEl = document.querySelector("#saved");
const nextButton = document.querySelector("#next");
const saveButton = document.querySelector("#save");
const clearButton = document.querySelector("#clear");

let current = 0;
let saved = [];

function renderPrompt() {
  promptEl.textContent = prompts[current];
}

function renderSaved() {
  savedEl.innerHTML = "";
  saved.forEach((text) => {
    const article = document.createElement("article");
    article.textContent = text;
    savedEl.append(article);
  });
}

nextButton.addEventListener("click", () => {
  current = (current + 1) % prompts.length;
  renderPrompt();
});

saveButton.addEventListener("click", () => {
  const text = prompts[current];
  if (!saved.includes(text)) {
    saved = [text, ...saved].slice(0, 4);
    renderSaved();
  }
});

clearButton.addEventListener("click", () => {
  saved = [];
  renderSaved();
});

renderPrompt();
renderSaved();
