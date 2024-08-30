const container = document.querySelector('#container');
const changeGridBtn = document.querySelector('#change-grid');
const colorInput = document.querySelector('input[type = color]');
const randomModeToggle = document.querySelector('h1');
const clearBtn = document.querySelector('#clear');

for (let i = 1; i <= 256; i++) {
  const squareDiv = document.createElement('div');
  container.appendChild(squareDiv);
  squareDiv.addEventListener('mouseover', () => {
    if (randomModeToggle.className === 'random-on') {
      squareDiv.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * (255 - 1) + 1
      )}, ${Math.floor(Math.random() * (255 - 1) + 1)}, ${Math.floor(
        Math.random() * (255 - 1) + 1
      )})`;
    } else {
      squareDiv.style.backgroundColor = colorInput.value;
    }
  });
}

changeGridBtn.addEventListener('click', () => {
  const squares = Math.floor(
    +prompt('How many squares do you want on each side (value between 1-100)?')
  );
  if (squares > 100 || squares < 1 || isNaN(squares)) {
    alert('Please enter a number between 1 and 100.');
  } else {
    container.innerHTML = '';
    for (let i = 1; i <= squares ** 2; i++) {
      const squareDiv = document.createElement('div');
      squareDiv.style.height = `${512 / squares}px`;
      squareDiv.style.width = `${512 / squares}px`;
      container.appendChild(squareDiv);
      squareDiv.addEventListener('mouseover', () => {
        if (randomModeToggle.className === 'random-on') {
          squareDiv.style.backgroundColor = `rgb(${Math.floor(
            Math.random() * (255 - 1) + 1
          )}, ${Math.floor(Math.random() * (255 - 1) + 1)}, ${Math.floor(
            Math.random() * (255 - 1) + 1
          )})`;
        } else {
          squareDiv.style.backgroundColor = colorInput.value;
        }
      });
    }
  }
});

randomModeToggle.addEventListener('click', () => {
  randomModeToggle.classList.toggle('random-on');
  if (randomModeToggle.className === 'random-on') {
    randomModeToggle.textContent = 'Random Color Mode';
    randomModeToggle.style.fontSize = '20px';
  } else {
    randomModeToggle.textContent = 'Etch-a-Sketch';
    randomModeToggle.style.fontSize = '30px';
  }
});

clearBtn.addEventListener('click', () => {
  document.querySelectorAll('#container div').forEach((div) => {
    div.style.backgroundColor = 'white';
  });
});
