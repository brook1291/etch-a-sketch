const container = document.querySelector('#container');
const changeGridBtn = document.querySelector('#change-grid');

for (let i = 1; i <= 256; i++) {
  const squareDiv = document.createElement('div');
  container.appendChild(squareDiv);
  squareDiv.addEventListener('mouseover', () => {
    squareDiv.classList.add('color');
  });
}

changeGridBtn.addEventListener('click', () => {
  const squares = Math.floor(
    +prompt('How many squares do you want on each side?')
  );
  if (squares > 100) {
    alert('The limit is 100.');
  } else {
    container.innerHTML = '';
    for (let i = 1; i <= squares ** 2; i++) {
      const squareDiv = document.createElement('div');
      squareDiv.style.height = `${512 / squares}px`;
      squareDiv.style.width = `${512 / squares}px`;
      container.appendChild(squareDiv);
      squareDiv.addEventListener('mouseover', () => {
        squareDiv.classList.add('color');
      });
    }
  }
});
