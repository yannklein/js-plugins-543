// var MarkdownIt = require('markdown-it'); // ES5
import MarkdownIt from 'markdown-it'; // ES6

const initMarkdownIt = () => {
  const md = new MarkdownIt();
  // Select the input and preview area
  const editor = document.querySelector("#editor");
  const preview = document.querySelector("#preview");

  // Listen to a keyup in the editor
  editor.addEventListener("keyup", (event) => {
    // compute the markdown version of the editor value
    const result = md.render(event.currentTarget.value);
    // display it on the preview area
    preview.innerHTML = result;
  });
};

export { initMarkdownIt };
