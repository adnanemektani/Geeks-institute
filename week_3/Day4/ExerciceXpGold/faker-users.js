const { faker } = require('@faker-js/faker');
const inquirer = require('inquirer');

const users = [];


function addRandomUser() {
    const user = {
        name: faker.person.fullName(),
        addressStreet: faker.location.streetAddress(),
        country: faker.location.country()
    };
    users.push(user);
    console.log('\n=== Random User Added ===');
    console.log(user);
}


console.log('=== Adding Random Users with Faker ===');
for (let i = 0; i < 3; i++) {
    addRandomUser();
}

console.log('\n=== All Users ===');
console.log(users);


async function promptUserForInfo() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter your name:'
            },
            {
                type: 'input',
                name: 'addressStreet',
                message: 'Enter your street address:'
            },
            {
                type: 'input',
                name:'country',
                message:'Enter your country:' 
           }
       ]);
       
 
       const newUser={
           name : answers.name,
           addressStreet : answers.addressStreet,
           country : answers.country 
       };
       
  
      newUser.name=answers.name.split(' ')
                           .map(word=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase())
                           .join(' ');
  
      const nameRegex=/^[A-Za-z]+(\s[A-Za-z]+)*$/;
      
      if(!nameRegex.test(newUser.name)){
          console.error('\nError : Name should contain only letters and a single space between words.');
          return;
      }
      
      if(answers.addressStreet.trim()===''||answers.country.trim()===''){
          console.error('\nError : Address and Country cannot be empty.');
          return;
      }

     newUser.addressStreet=answers.addressStreet;
     newUser.country=answers.country; 
     
     users.push(newUser); 
     
     console.log('\n=== User Added Successfully ===');  
     console.log(newUser);   
     
   } catch(error){
         console.error('Error:',error);
   }
}


module.exports={users,addRandomUser,promptUserForInfo};
