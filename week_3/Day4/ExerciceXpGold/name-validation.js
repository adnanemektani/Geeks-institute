// Exercise 6: Regular Expression #2


const readline = require('readline');

function validateName(name) {

    const spaceCount = (name.match(/ /g) || []).length;
    
    if (spaceCount !== 1) {
        return {
            valid: false,
            message: 'The name should contain exactly one space between first and last name.'
        };
    }
    

    const letterPattern = /^[A-Za-z]+ [A-Za-z]+$/;
    
    if (!letterPattern.test(name)) {
        return {
            valid: false,
            message: 'The name should contain only letters.'
        };
    }

    const parts = name.split(' ');
    
    for (const part of parts) {
        if (part.length === 0) {
            return {
                valid: false,
                message: 'Each name part must have at least one letter.'
            };
        }
        const firstChar = part.charAt(0);
        if (firstChar !== firstChar.toUpperCase()) {
            return {
                valid: false,
                message: 'The first letter of each name should be uppercased.'
            };
        }
    }
    
    return {
        valid: true,
        message: 'Name is valid!'
    };
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptAndValidate() {
    rl.question('\nEnter your full name (e.g., John Doe): ', (name) => {
        const result = validateName(name);
        
        console.log('\n=== Name Validation Result ===');
        
        if (result.valid) {
            console.log('✓ ' + result.message);
            console.log('Your name: ' + name);
        } else {
            console.log('✗ ' + result.message);
        }
        
        rl.close();
    });
}

if (require.main === module) {
    promptAndValidate();
}

module.exports = { validateName, promptAndValidate };
