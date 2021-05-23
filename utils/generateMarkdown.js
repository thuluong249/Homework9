const mit =
  "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)";
const mitText =
  "The MIT license gives users express permission to reuse code for any purpose, sometimes even if code is part of proprietary software. As long as users include the original copy of the MIT license in their distribution, they can make any changes or modifications to the code to suit their own needs.";
const mozilla =
  "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
const mozillaText =
  "Most Mozilla software projects use the MPL, but some have different terms. Detailed information on the licensing of existing code can be found by inspecting its license headers, or by visiting the license information page in the relevant Mozilla software.";
const apache =
  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const apacheText =
  "Apache License 2.0 allows users of the software to distribute, modify, or otherwise use software for any purpose, as long as the user complies with the license terms. The terms state that users can’t remove existing copyright, patent, trademarks and attribution notices.";

let licenseLink = "";
let licenseText = "";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT License":
      licenseLink = mit;
      break;
    case "Mozilla Public License 2.0":
      licenseLink = mozilla;
      break;
    case "Apache-2.0":
      licenseLink = apache;
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      licenseLink = mitText;
      break;
    case "Mozilla Public License 2.0":
      licenseLink = mozillaText;
      break;
    case "Apache-2.0":
      licenseLink = apacheText;
      break;
    default:
      licenseLink = "";
  }
  return licenseLink;

  // return `(https://lbesson.mit-license.org/${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT License":
      licenseText = mitText;
      break;
    case "Mozilla Public License 2.0":
      licenseText = mozillaText;
      break;
    case "Apache-2.0":
      licenseText = apacheText;
      break;
    default:
      licenseText = "";
  }
  return licenseText;
}
// TODO: Create a function to generate markdown for README
// function generateMarkdown(answers) {
const generateMarkdown = (data) =>
  `📘 ${data.Title}
![header](./Images/background.png)

${renderLicenseLink(data.license)}

Description
📜📜
* ${data.Description}
📜📜

## 📋 Table of Contents
1️⃣. [Installation](#📑-installation)
2️⃣. [Usage](#-usage-infomation)
3️⃣. [Contributing](#📝-contributing-information)
4️⃣. [Tests](#💯-tests)
5️⃣.  [License](#💠-license)
6️⃣. [Question](#❓-questions)

## 📑 Installation
${data.Installation}

## Usage infomation
${data.Usage}

## 📝 Contributing
${data.Contributing}

## 💯 Tests
${data.Test}
[video](https://drive.google.com/drive/folders/1cNENryIo9B6HE685KIzq9l0pml6ryolw)

## 💠 License 
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}

## ❓ Questions
![Askme](./Images/askme.jpeg)

For more informations about this project please contact me at:

* [Github](https://github.com/${data.Github})

* [Email](mailto: ${data.email}) ✉️
`;

module.exports = generateMarkdown;
