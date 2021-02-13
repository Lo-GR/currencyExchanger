# **Currency Exchange Calculator**
### This is a web application that calculates USD conversions to 160 other currencies through [ExchangeRate-API](https://www.exchangerate-api.com/docs/standard-requests).

 ### _Contributor(s) and Contact Info_
> Logan Roth diamondintheroth@gmail.com - [GitHub(Lo-GR)](https://github.com/Lo-GR)

<br/>

## _Technologies Used_

* **HTML5/CSS3**
* **Bootstrap 4.6.0**
* **JavaScript ES6**
* **jQuery 3.5.1**
* **Node Package Manager 6.14.9**
* **webpack 4.39.3**
* **Babel 7.6.4**
* **eslint 6.3.0**
* **ExchangeRate-API**

## _Description_

This application will pull in API data from ExchangeRate. Using this data, this application will convert USD to any of the supported currencies of the API.

This is a practice project for practicing API, Promises, and JSON Parsing for a class at Epicodus.

## _Setup/Installation_

> Repository: https://github.com/Lo-GR/currencyExchanger.git
1. Clone the above repository from Github using your terminal.
2. In your terminal, navigate to the root directory of the cloned project.
3. Open the project in your text editor to view the code.
4. In order for this project to function, you will need to retrieve a unique ExchangeRate-API. Please follow the steps outlined below to integrate this.
* Visit the [ExchangeRate-API website](https://www.exchangerate-api.com/). Input your email address and click "Get Free Key".
* Create an account by entering the details it requests. 
* Upon submitting your account details, the dashboard should appear with your unique API. Save this for later use.
* In the root of your directory, through your terminal, create a ".env" file and then open said file in your text editor.
* Enter the following on the first line of .env. Be sure to replace the bracketed text with your API.

>API_KEY=[PASTE YOUR API KEY HERE]

5. Navigate to the root directory of the project in your terminal and type "npm install" to install development environment needed.
6. In your terminal, type "npm run start" to view the project in your default browser on a live server.
7. In your terminal, type "npm run build" to bundle the project with applicable webpacks implemented.

## _Known Bugs_
* No known bugs at this time. Please contact a contributor to report any bugs found during use.

## _Future Updates_
* The ability to convert all currencies with each other.

## _License_

[_MIT_](https://opensource.org/licenses/MIT)

Copyright (c) 2021, Logan Roth.

Please contact Contributor for further use information or if you would like to make a contribution.