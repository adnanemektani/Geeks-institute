const chalk = require('chalk');

function displayColorfulMessage() {
    console.log('\n=== COLORFUL MESSAGES ===\n');
    
    
    console.log(chalk.blue('This message is displayed in blue color.'));
    console.log(chalk.green('This message is displayed in green color.'));
    console.log(chalk.yellow('This message is yellow.'));
    
    
    console.log(chalk.bold.red('This is bold red text'));
    console.log(chalk.bold.cyan('This is bold cyan text'));
    
     
    console.log(chalk.underline.magenta('This is underlined magenta text'));
    
   
    console.log(chalk.bgRed.white('Background Red, White Text'));
    

  const styledText = chalk.blue.bgRed.bold.underline("Styled & Colored!");
  console.log(styledText);
}

module.exports = { displayColorfulMessage };
