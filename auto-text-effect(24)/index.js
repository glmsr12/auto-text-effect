const text = document.getElementById('text');
const prog = 'Small project for a day for 100 days!';

let index = 1;

setInterval(writeText, 100);

function writeText() {
  text.innerText = prog.slice(0, index);

  index++;
  if (index > prog.length) {
    index = 1;
  }
}
