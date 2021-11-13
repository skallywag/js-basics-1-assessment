const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Please validate your password!", function(input){


        // if(input.length <= 10 && input.length ){
        //     console.log('Success!');
        // }else{
        //     console.log('Password failed');
        // }
        //--------Created a more advanced pass validator
        function passCheck(pass){
            let char = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,18}$/;
                if(pass.match(char)){
                    console.log("success")
                }else {
                    console.log('Make your password contains required characters');
                }
        }
        passCheck('50trk!!!!')


	// This line closes the connection to the command line interface.
	reader.close()

});