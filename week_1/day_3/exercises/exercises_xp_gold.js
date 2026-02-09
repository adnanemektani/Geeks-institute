// ===== Exercise 1 Select a kind of Music

const select = document.getElementById("genres");
console.log("Selected value:", select.value);
const newOption = new Option("Classic", "classic");
select.add(newOption);
newOption.selected = true;



// ===== Exercise 2

const button = document.querySelector('input[type="button"]');
const colorSelect = document.getElementById("colorSelect");

const removecolor = () => {
    const selectedIndex = colorSelect.selectedIndex;
    if (selectedIndex !== -1) {
        colorSelect.remove(selectedIndex);
    }
};


button.addEventListener("click", removecolor);






// ===== Exercise 3

let shoppingList = [];
const root = document.getElementById("root");

const form = document.createElement("form");
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Add item";

const addBtn = document.createElement("button");
addBtn.textContent = "AddItem";
addBtn.type = "button";

const clearBtn = document.createElement("button");
clearBtn.textContent = "ClearAll";
clearBtn.type = "button";

form.append(input, addBtn, clearBtn);
root.appendChild(form);


const addItem = () => {
    if (input.value !== "") {
        shoppingList.push(input.value);
        console.log("List updated:", shoppingList);
        input.value = ""; 
    }
};

const clearAll = () => {
    shoppingList = [];
    console.log("List cleared:", shoppingList);
};
addBtn.addEventListener("click", addItem);
clearBtn.addEventListener("click", clearAll);





