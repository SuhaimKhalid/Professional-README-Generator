
// Function to write markdown on readme
function generateMarkdown(data,lic) {

      return `
  # ${lic}
  
  # ${data.title_project}
  
  ## Description
  ${data.Description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.Installation}
  
  ## Usage
  ${data.Usage}
  
  ## License
  ${lic}
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  ${data.Contributing}
  
  ## Tests
  ${data.Tests}
  
  ## Questions
  For additional questions, you can reach me through:
  - GitHub: [${data.GitHub_name}](https://github.com/${data.GitHub_name})
  - Email: ${data.email}
  `;
  }

module.exports = generateMarkdown;
