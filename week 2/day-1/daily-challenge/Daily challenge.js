let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
let displayGroceries = () =>{
    groceries.fruits.forEach(fruit => console.log(fruit));
};
displayGroceries();

let cloneGroceries = () => {
    let user = client ;
    client= "Betty";
     // no we don't see anychange in user var because when we write user = client wt just take a copie ig first var not link it 


     let shopping = groceries;
     groceries.totalPrice = "35$";
     // yes we gonna see the change in shopping because th groceries var is the hot if anything changr an it is chage also in shopping
     groceries.other.paid = false;
     // yes as i said in my last answer  (nested ones) .




    console.log("Client:", client);
    console.log("User:", user);
    console.log("Shopping Total:", shopping.totalPrice);
    console.log("Shopping Paid:", shopping.other.paid);



};
cloneGroceries();
