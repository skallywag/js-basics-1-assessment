/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = 'Git is a version control program that keeps track and saves changes in your files. It can help to revert back to what you have done in previous versions and can prevent bugs and lost progress.'
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = 'Github is a website (different than git) where you can upload your files/projects/code to a remote repo(its in the cloud.). You are able to clone other repos and upload your own local repos as well as many other usefull things.'
//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
let init = {
    description: 'the "git init" command, once ran will create a local repo on your machine, ready to start tracking your files and changes. (make sure to be in the directory where you want to intitialize the repo in)',
    code: 'git init',
}
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = {
    description: 'Cloning a repo will copy a repo from github where you can pull it down to your local computer. Where you can fix/update merge code to push it back up to github tree.',
    code: 'git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY',
}
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = {
    description: 'The status command will check to see what files are currently being tracked or not(its important to check this before you start coding a project and before you push/commit each time). It will let you see what changes have been made. Any untracked files will be in red.',
    code: 'git status',
}
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = {
    description: 'git add command will track any changes you have made to your files and will start tracking any NEW files you have added to your local repo.',
    code: 'git add .',
}
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit = {
    description: 'When you run the git commit command, any new changes you have made will be saved in your local repo and staged. Make sure to use good commit messages',
    code: 'git commit -m "message"',
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = {
    description: 'When you are ready to upload your files from your local repo to github you are going to "push" it into the cloud.',
    code: 'git push',
}