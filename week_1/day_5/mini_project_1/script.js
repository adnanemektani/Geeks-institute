let design = document.getElementById('main-grid');
let selectColor = 'white';
let colors = document.querySelectorAll('.color');
let isDrawing = false;
function createGrid(){
    for (let i = 0 ; i < 2400 ; i++){
        let square = document.createElement('div');
        design.appendChild(square);
          square.addEventListener('mousedown', () => {
            square.style.backgroundColor = selectColor;
       });
        square.addEventListener('mouseover',() =>{
              if (isDrawing === true){
               square.style.backgroundColor = selectColor;
              };
        } );
    };
};
createGrid();
colors.forEach(color => {
    color.addEventListener('click', () => {
        selectColor = color.style.backgroundColor;
        console.log("Color selected: " + selectColor);
    });
});


design.addEventListener('mousedown', () =>{
    isDrawing = true;
});

window.addEventListener('mouseup', () =>{
    isDrawing = false ;
});
let clearBtn = document.getElementById('clear'); 
clearBtn.addEventListener('click', () => {
    selectColor = 'white';
    
     let allSquares = design.querySelectorAll('div'); 
     allSquares.forEach(sq => {
         sq.style.backgroundColor = 'white';
         
         });
        
         });




