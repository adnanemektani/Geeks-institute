const { addDays, format } = require('date-fns');

function performDateOperations() {
    
    const currentDate = new Date();
    console.log('\n=== Date Operations ===');
    console.log(`Current Date: ${currentDate}`);

   
    const futureDate = addDays(currentDate, 5);
    console.log(`After adding 5 days: ${futureDate}`);


    const formattedDate = format(futureDate, 'yyyy-MM-dd HH:mm:ss');
    

    console.log(`Formatted Date: ${formattedDate}`);
    
    return formattedDate;
}

module.exports = performDateOperations;
