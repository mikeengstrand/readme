// Importing the inquirer package for user prompts
const inquirer = require("inquirer");

// importing the fs (file system) package for file operations
const fs = require("fs");

// comstructing the content for the readme file using  info from user
function createFile(fileName, data) {
  var fileText = "";
  fileText += `${data.name}'s README`;
  // title
  fileText += ` # ${data.title}`;
  fileText += `${setupLicense(data.license)}`;
  // Table of contents
  fileText += `## Table of Contents`;
  // sections: Description, Installation, Usage, License, Contributing, Tests, and Questions
  fileText += ` * [Description](#description) * [Installation](#installation) * [Usage](#usage) * [Contributing](#Contributing)* [Test](#test) * [License](#license) * [Questions](#questions)`;
  fileText += `## Description ${data.description}`;
  fileText += `## Installation ${data.installation}`;
  fileText += `## Usage ${data.usage} `;
  fileText += `## Contributing ${data.contribution} `;
  fileText += `## Test Instructions ${data.test} `;
  fileText += `## License for this app:  ${data.license} `;
  fileText += `## Questions - Author Info: `;
  fileText += `[Link to Github](https://github.com/${data.github})`;
  fileText += `<a href="mailto:${data.email}">${data.email}</a>`;
  fs.writeFile(fileName, fileText, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// licensing stuff
function setupLicense(license) {

  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

  } else if (license === "Apache 2.0 License") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

  } else if (license === "IBM Public License Version 1.0") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;

  } else if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;

  } else {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
}


function setup() {
  inquirer
    .prompt([
      // User input prompts for various project details
      { type: "input", message: "Please Enter Your Name?", name: "name" },
      { type: "input", message: "Tilte of Project:", name: "title" },
      { type: "input", message: "Add a desription:", name: "description" },
      { type: "input", message: "Add install instructions", name: "installation" },
      { type: "input", message: "Add the usage info:", name: "usage" },
      { type: "input", message: "Add contributing info for the project", name: "contribution" },
      { type: "input", message: "Add instructions for testing:", name: "test" },
      { type: "list", message: "Add any license type you would like:", choices: ["MIT", "Apache 2.0 License", "IBM Public License Version 1.0", "Mozilla Public License 2.0", "The Unlicense",], name: "license" },
      { type: "input", message: "Whats yout github username?", name: "github" },
      { type: "input", message: "What is your email", name: "email" },
    ])

    .then((data) => {
      createFile("sample-README.md", data);
    });
}

setup();