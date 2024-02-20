const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer.prompt([
    {
        type: 'input',
        name:'Title',
        message:'What is the title of your project?'
    },
    {
        type: 'input',
        name:'Description',
        message:'what is the description of your project?'
    },
    {
        type: 'input',
        name:'InstallationProcess',
        message:'What packages do you need to install for this project?'
    },
    {
        type: 'input',
        name:'UsageInformation',
        message:'What is the programme used for  of your project?'
    },
    {
        type:'List',
        name:'License',
        message:['MIT,GNU,Apache,MLP, None'] 
    },
    {
        type:'input',
        name:'Contributors',
        message: 'Who are the people who are contributing to the project'
    } ,
    {
        type:'input',
        name:'Tests',
        message: 'What tests are used in this readme file'
    }
    ,
    {
        type:'input',
        name:'Questions',
        message: 'What questions do you have?'
    },
         {
        type:'input',
        name:'GitHubUsername',
        message: 'Enter your GitHub username?'
    } ,
    {
        type: 'input',
        name:'EmailAddress',
        message:'What is your Email_address',
    }
    ]).then((data) => {
        const readme_md = generateMarkdown(data);
    
        fs.writeFile('README.md', readme_md, (err) => {
            err ? console.log(err) : console.log('Success!');
        });
    });

   