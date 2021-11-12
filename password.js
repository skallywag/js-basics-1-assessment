const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Please validate your password!", function(input){
//-----It seems to be working but i feel like i still did this wrong?

        if(input.length <= 10){
            console.log('Success!');
        }else{
            console.log('Password failed');
        }

	// This line closes the connection to the command line interface.
	reader.close()

});