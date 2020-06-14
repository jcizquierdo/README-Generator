// function to generate markdown for README
function writeReadme(userInput) {
    return `
<h1 align="center">${userInput.projectTitle}</h1>
  
![badge](https://img.shields.io/badge/license-${userInput.license}-brightgreen)<br />

## Description
${userInput.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${userInput.installation}

## Usage
${userInput.usage}

## License
![badge](https://img.shields.io/badge/license-${userInput.license}-brightgreen)
<br />
Project has the ${userInput.license} license. 

## Contributors
${userInput.contributors}

## Tests
${userInput.tests}

## Questions
${userInput.questions}<br />
<br />
GitHub: [${userInput.username}](https://github.com/${userInput.username})<br />
<br />
Email: ${userInput.email}<br /><br />`}


module.exports = writeReadme;