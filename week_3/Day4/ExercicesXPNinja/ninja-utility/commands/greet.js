// greet.js - Command to display a colorful greeting message
const chalk = require('chalk');

function greet(name = 'User') {
    console.log('\n');
    console.log(chalk.cyan('╔═══════════════════════════════════════╗'));
    console.log(chalk.cyan('║') + chalk.yellow.bold('     🏯 NINJA UTILITY 🏯          ') + chalk.cyan('║'));
    console.log(chalk.cyan('╚═══════════════════════════════════════╝'));
    console.log('\n');
    
    const messages = [
        `Welcome, ${chalk.green.bold(name)}!`,
        `${chalk.blue('Your journey as a Ninja begins now!')} ${chalk.red('⚔️')}`,
        `${chalk.magenta('Ready to conquer your tasks!')} ${chalk.yellow('💪')}`
    ];
    
    messages.forEach((msg, index) => {
        setTimeout(() => {
            console.log(chalk.white.bgBlue(`  ${msg}  `));
        }, index * 300);
    });
    
    console.log('\n' + chalk.dim('-'.repeat(40)) + '\n');
}

module.exports = greet;
