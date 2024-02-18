const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

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
        name:'Installation process',
        message:'What packages do you need to install for this project?'
    },
    {
        type: 'input',
        name:'Usage information',
        message:'What is the programme used for  of your project?'
    },
    {
        type:'List',
        name:'License',
        message:'MIT,GNU,Apache,MLP' 
    },
    {
        type:'input',
        name:'Contrributing',
        message: 'Who are the people who are conteributing to the repository'
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
        name:'GitHub Username',
        message: 'Enter your GitHub username?'
    }
    ]).then((data) => {
    const filename  = `${data.Title.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  }); 
