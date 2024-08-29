const container = document.querySelector('#container');
const changeGridBtn = document.querySelector('#change-grid');

for (let i = 1; i <= 256; i++) {
  const squareDiv = document.createElement('div');
  container.appendChild(squareDiv);
  squareDiv.addEventListener('mouseover', () => {
    squareDiv.classList.add('color');
  });
}
