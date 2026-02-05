// ===== Exercise 1
let retriveh1 = document.querySelector('h1');
console.log(retriveh1);

let lastPargraphe = document.querySelector('article').lastElementChild.remove();


let colorH2 = document.querySelector('h2');
colorH2.addEventListener('click' ,() => {
    colorH2.style.background = 'red';
});

let properityH3 = document.querySelector('h3');
properityH3.addEventListener('click' ,()=> {
    properityH3.style.display = 'none';
});

let bottom = document.createElement('button');
bottom.innerHTML = "Make Bold";
document.body.appendChild(bottom);

bottom.addEventListener('click', ()=> {
    let allp = document.querySelectorAll('p');
    allp.forEach(p =>{
        p.style.fontWeight = 'bold';
    });
});

retriveh1.addEventListener('mouseover' , () =>{
    let randomSize = Math.floor(Math.random() * 101);
    retriveh1.style.fontSize = randomSize + "px";
})
let paragraphs = document.querySelectorAll('p');
let secondp = paragraphs[1];

secondp.style.transition = "opacity 1s ease";
secondp.addEventListener('mouseover', ()=>{
    secondp.style.opacity = "0";
});
secondp.addEventListener('mouseout',()=>{
    secondp.style.opacity = "1";
});









// ===== Exercise 2

let Form = document.forms[0];
console.log(Form);

let input1 = document.getElementById('fname');
console.log(input1);
let input2 = document.getElementById('lname');
console.log(input2);

let inputName1 = document.getElementsByName('firstname');
console.log(inputName1);
let inputName2 = document.getElementsByName('lastname');
console.log(inputName2);

//we use event.preventDefault() to stope page refleching until we can see the data by js .
Form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let val1= input1.value;
    let val2= input2.value;
    if (val1 === "" || val2 === ""){
        alert("enter the form!!");
        return;
    }
    let ul = document.querySelector('.userAnswer');
    let li1 = document.createElement('li');
    li1.innerText = val1;
    let li2 = document.createElement('li');
    li2.innerText = val2;
    ul.appendChild(li1);
    ul.appendChild(li2);
});





// ===== Exercise 3


let allBoldItems;
function getBoldItems(){

    allBoldItems = document.querySelectorAll('strong');

};
getBoldItems();
function highlight(){
    allBoldItems.forEach(item => {
        item.style.color = 'blue';
    });
}
function returnItemsToDefault(){
    allBoldItems.forEach(item => {
        item.style.color = 'black';
    })
}
let para = document.querySelector('p');
para.addEventListener('mouseover',highlight);
para.addEventListener('mouseout',returnItemsToDefault);





// ===== Exercise 4
let myForm = document.getElementById('MyForm');
let radiusInput = document.getElementById('radius');
let volumInput = document.getElementById('volume');

myForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    let r = Number(radiusInput.value);
    if(isNaN(r) || r < 0){
        alert("enter a positive number!");
        return;
    }
    let v = (4 / 3) * Math.PI * Math.pow(r, 3);
    volumInput.value = v.toFixed(2);
})





// ===== Exercise 5.