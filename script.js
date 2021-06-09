const grid = document.querySelector('#grid');
let color = '#ffa500';

var mouseDown = 0;
document.body.onmousedown = function() { 
  mouseDown = 1;
}
document.body.onmouseup = function() {
  mouseDown = 0;
}

function createCanvas(pixels) {
    for (let i = 0; i < pixels*pixels; i++) {
        grid.style.cssText = `grid-template: repeat(${pixels}, 1fr) / repeat(${pixels}, 1fr);`
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.backgroundColor = 'transparent';
        pixel.style.border = '1px solid black';
        pixel.style.boxSizing = 'border-box';
        pixel.addEventListener('mouseover', () => {
            if (mouseDown === 1) {
                pixel.style.backgroundColor = color;
            }
        });
        grid.appendChild(pixel);
    }
}

/*BOTON PARA CREAR NUEVO CANVAS*/
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const canvasText = document.querySelector('#canvasText');
const canvasMenu = document.querySelector('#canvasMenu');
const newCanvas = document.querySelector('#newCanvas');
newCanvas.addEventListener('click', () => {
    canvasMenu.classList.toggle('hidden');
    canvasText.classList.toggle('hidden');
});

const newCanvasCancel = document.querySelector('#newCanvasCancel');
newCanvasCancel.addEventListener('click', () => {
    canvasMenu.classList.add('hidden');
    canvasText.classList.remove('hidden');
});

const canvasSize = document.querySelector('.buttonSlider');
const newCanvasAccept = document.querySelector('#newCanvasAccept');
newCanvasAccept.addEventListener('click', () => {
    removeAllChildNodes(grid);
    createCanvas(canvasSize.value);
    canvasMenu.classList.add('hidden');
    canvasText.classList.remove('hidden');
});

createCanvas(15)

/*BOTON PARA BORRAR*/
const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', () => {
    color = 'transparent';
    mouseDown = 0;
});

/*BOTON PARA PINTAR CON COLORES DEL ARCOIRIS*/
let colors = ['rgb(255, 0, 0)', 'rgb(255, 127, 0)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(75, 0, 130)', 'rgb(143, 0, 255)']

const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', () => {
    setInterval(() => {
        color = colors[Math.floor(Math.random()*7)]
    }, 100);
    mouseDown = 0;
})
/*BOTON PARA MOSTRAR U OCULTAR LA GRID*/
const showGrid = document.querySelector('#showGrid');
showGrid.addEventListener('click', () => {
    pixel.classList.toggle('pixel-border');
    grid.classList.toggle('grid-border');
    showGrid.style.cssText = 'background-color: rgb(160 160 132)';
    mouseDown = 0;
});

/*PALETA DE COLORES*/
const palette = document.querySelector('#palette')
palette.addEventListener('input', (e) => {
    color = e.target.value;
    mouseDown = 0;
});