// ===== Exercise 1

setTimeout(() => {
    alert("Hello World");
}, 2000);




const container = document.getElementById("container");
const clearButton = document.getElementById("clear");


const addParagraph = () => {
    const newP = document.createElement("p");
    newP.textContent = "Hello World";
    container.appendChild(newP);

  
    const allParagraphs = container.querySelectorAll("p");
    if (allParagraphs.length >= 5) {
        clearInterval(myInterval);
        console.log("Interval cleared because we reached 5 paragraphs.");
    }
};

const myInterval = setInterval(addParagraph, 2000);

clearButton.addEventListener("click", () => {
    clearInterval(myInterval);
    console.log("Interval cleared by button click.");
});






// ===== Exercise 2
function myMove() {
  const elem = document.getElementById("animate");
  let pos = 0;

  
  const id = setInterval(frame, 1);

  function frame() {
    
    if (pos === 350) {
      clearInterval(id); 
    } else {
      pos++; 
      elem.style.left = pos + "px"; 
    }
  }
}



// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...