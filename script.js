function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(numberOfPixels) {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    
    const gridPixelSize = 800 / numberOfPixels;

    for (let i = 1; i <= numberOfPixels * numberOfPixels; i++) {
        const gridPixel = document.createElement('div');
        gridPixel.classList.add('grid-pixel');
        gridPixel.style.width = `${gridPixelSize}px`;
        gridPixel.style.height = `${gridPixelSize}px`;

        gridPixel.addEventListener('mouseover', () => {
            gridPixel.style.backgroundColor = getRandomColor();
        });

        container.appendChild(gridPixel);
    }
}

document.getElementById('new-grid-button').addEventListener('click', () => {
    let gridSize = parseInt(prompt("Enter the number of squares per side for the new grid (between 1-100):"))

    if (gridSize < 1 || !Number.isInteger(gridSize) || gridSize > 100) {
        alert("Please enter a valid integer between 1-100.");
    }
    else {    
        createGrid(gridSize);
    }
});

createGrid(16);
