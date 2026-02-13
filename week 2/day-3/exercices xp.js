// exercice 1 Output
//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)




//exercice 2

function displayStudentInfo(objUser){
    const {first , last  }= objUser ;
    return 'ur full name is ' + first + " " + last + "." ;
    
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

