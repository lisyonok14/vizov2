const canvas = document.getElementById('canvas');
const widthInput = document.getElementById('widthInput');
const heightInput = document.getElementById('heightInput');
let colorInputs = document.querySelectorAll('.colorInput');
const back = document.getElementById('back');
const eras1 = document.getElementById('er1')
const eras2 = document.getElementById('er2')
const createCanva = document.getElementById('createCanvas')    
let currentColor = colorInputs.value;
  
function createCanvas() {
    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);
    canvas.innerHTML = '';
    if (width>128 || height>128){
        alert('Максимальный размер холста 128x128!')
    }
    else{
        if (height>80){
            main.style.height = "1500px"
        }
        back.src = "img/"
        for (let i = 0; i < height; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < width; j++) {
                const cell = document.createElement('td');
                row.appendChild(cell);
            }
            canvas.appendChild(row);
          } 
        }
    }
  
function changeColor(event) {
    event.target.style.backgroundColor = currentColor;
}

function erase(event){
    event.target.style.backgroundColor = "#ffffff";
}

function resetColors() {
    const cells = canvas.getElementsByTagName('td');
    for (let cell of cells) {
        cell.style.backgroundColor = '';
    }
}

colorInputs.forEach((item)=>{
    item.addEventListener('input', function(event) {
        currentColor = event.target.value;
        canvas.addEventListener('click', function(event) {
            if (event.target.tagName === 'TD') {
                changeColor(event);
                event.target.style.backgroundColor = currentColor;
            }
        });
    });
})

eras1.addEventListener('click', function(){
    canvas.addEventListener('click', function(event) {
          event.target.style.backgroundColor = "white";
      });
})
eras2.addEventListener('click', resetColors);
createCanva.addEventListener('click', createCanvas);
