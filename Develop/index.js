// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
       {
           type: 'input',
           name: 'title',
           message: "what is the title of your project?",
           validate: titleInput => {
               if(titleInput){
                   return true;
               }else{
                   console.log("please enter a title")
                    return false;
               }
           }

       }, 
       {
            type: 'input',
            name: 'description',
            message: "please enter a description of your project:",
            validate: descriptionInput => {
                if(descriptionInput){
                    return true;
                }else{
                    console.log("please enter a description")
                    return false;
                }
            }
       },
       {
        type: 'input',
        name: 'install',
        message: "please enter installation instructions:",
        validate: installInput => {
            if(installInput){
                return true;
            }else{
                console.log("please enter install instructions")
                return false;
            }
         }
       },
      
       {
        type: 'input',
        name: 'usage',
        message: "please enter usage guidelines:",
        validate: contributerInput => {
            if(contributerInput){
                return true;
            }else{
                console.log("please enter usage guidelines")
                return false;
            }
         }
       },
       {
        type: 'input',
        name: 'contributer',
        message: "please enter contributers:",
        validate: contributerInput => {
            if(contributerInput){
                return true;
            }else{
                console.log("please enter contributers")
                return false;
            }
         }
       },
     
       {
        type: 'input',
        name: 'test',
        message: "please enter test instructions:",
        validate: testInput => {
            if(testInput){
                return true;
            }else{
                console.log("please enter test instructions:")
                return false;
            }
         }
       },

       {
        type: 'list',
        name: 'license',
        message: "what kind of license does your project have?",
        choices: ['MIT', 'Apache 2.0','GPL v2', 'GPL v3', 'BSD 3-clause','Unlicense', 'No License'],
        default: ['MIT'],
        validate: usageInput => {
            if(usageInput){
                return true;
            }else{
                console.log("please select a license type")
                return false;
            }
         }
       },

       {
        type: 'input',
        name: 'github',
        message: "please enter your Github username:",
        validate: githubInput => {
            if(githubInput){
                return true;
            }else{
                console.log("please enter your Github username:")
                return false;
            }
         }
       },

       {
        type: 'input',
        name: 'email',
        message: "please enter your email:",
        validate: emailInput => {
            if(emailInput){
                return true;
            }else{
                console.log("please enter your Github username:")
                return false;
            }
         }
       },


    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
           console.log(err);
           return;
        }else{
            console.log("README created");
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(responses => {
            return generateMarkdown(responses)
        })
        .then(data => {
            return writeToFile("read-me-generated.md", data)
        })

        .catch(err => {
            console.log(err);
        })
        
}

// Function call to initialize app
init();
