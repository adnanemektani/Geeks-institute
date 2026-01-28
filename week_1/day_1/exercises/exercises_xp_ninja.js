// ===== Exercise 1
let person1 = {
  FullName: "Adnane Mektani",
  Mass: 72,
  Height: 1.85
};
let person2 = {
  FullName: "John Doe",
  Mass: 85,
  Height: 1.75
};

person1.BMI = function() {
  return this.Mass / (this.Height * this.Height);
};

person2.BMI = function() {
  return this.Mass / (this.Height * this.Height);
};
function compareBMI(p1, p2) {
  let bmi1 = p1.BMI();
  let bmi2 = p2.BMI();  
    if (bmi1 > bmi2) {  
    console.log(`${p1.FullName} has a higher BMI of ${bmi1.toFixed(2)} compared to ${p2.FullName}'s BMI of ${bmi2.toFixed(2)}`);
    } else if (bmi2 > bmi1) {   
    console.log(`${p2.FullName} has a higher BMI of ${bmi2.toFixed(2)} compared to ${p1.FullName}'s BMI of ${bmi1.toFixed(2)}`);
    } else {    
    console.log(`${p1.FullName} and ${p2.FullName} have the same BMI of ${bmi1.toFixed(2)}`);
    }
}
compareBMI(person1, person2);






// ===== Exercise 2

function findAvg(gradesList) {
    function calculateAverage(grades) {
        let sum = grades.reduce((acc, curr) => acc + curr, 0);
        return sum / grades.length;
    }

    let average = calculateAverage(gradesList);
    console.log(`The average grade is: ${average.toFixed(2)}`);
    if (average >= 65) {
        console.log("Congratulations! You passed.");
    }
    else {
        console.log("Unfortunately, you failed and must repeat the course.");
    }   
}
let grades = [70, 85, 90, 60, 75];
findAvg(grades);
    

