const container = document.querySelector('#container');

window.onload = () => {
  for (let i = 1; i <= 256; i++) {
    const squareDiv = document.createElement('div');
    container.appendChild(squareDiv);
  }
};
