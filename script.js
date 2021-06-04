const grid = document.querySelector('#grid');
let color = '#ffa500';

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createCanvas(pixels) {
    for (let i = 0; i < pixels*pixels; i++) {
        grid.style.cssText = `grid-template: repeat(${pixels}, 1fr) / repeat(${pixels}, 1fr);`
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.backgroundColor = 'transparent';
        pixel.style.border = '1px solid black';
        pixel.style.boxSizing = 'border-box';
        pixel.addEventListener('click', () => {
            pixel.style.backgroundColor = color;
        });
        grid.appendChild(pixel);
    }
}

const pixel = document.querySelectorAll('.pixel')

/*BOTON PARA CREAR NUEVO CANVAS*/
const newCanvas = document.querySelector('#newCanvas')
newCanvas.addEventListener('click', () => {
    const value = prompt('What canvas size would you like?') || 15;
    removeAllChildNodes(grid);
    createCanvas(value);
});

createCanvas(15)

/*BOTON PARA MOSTRAR U OCULTAR LA GRID*/
const showGrid = document.querySelector('#showGrid');
showGrid.addEventListener('click', () => {
    pixel.classList.toggle('pixel-border');
    grid.classList.toggle('grid-border');
    showGrid.style.cssText = 'background-color: rgb(160 160 132)';
});

/*PALETA DE COLORES*/
const palette = document.querySelector('#palette')
palette.addEventListener('input', (e) => {
    color = e.target.value
});