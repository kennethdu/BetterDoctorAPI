# _Doctor Lookup_

#### _Epicodus Friday Independent Project: Asynchrony and APIs_

#### By _**Kenneth Du**_

#### Date _**10.19.2018**_

## Description

_Doctor Lookup._

Achoo! As we all know, everybody needs to see a doctor sometimes. But finding a doctor that provides the services you need nearby can be time consuming. To facilitate this, you have been asked to create a website where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in your city (Portland or Seattle depending on where you are) who can treat their medical issue. Cool!

To provide the data you need for this application, Epicodus has partnered with one of the leading providers of medical data - the BetterDoctor API. You'll use the BetterDoctor API to retrieve this information. This is a live API by a Series A funded startup currently under active development, and used by industry heavy-hitters such as HealthNet to provide accurate medical data.

Here are the following things your application must do. Read through the list carefully to make sure you add all needed functionality!

    A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
    A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
    If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
    If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
    If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)


## Setup/Installation Requirements

* Open a web browser and navigate to https://developer.betterdoctor.com/ 
* Create an account and follow the instructions given to gain an API key
* Open a terminal application(I suggest gitbash)
* Create a new file called .env and enter:
```
API_KEY=[API_KEY GOES HERE]
```
* In a terminal application type: $ git clone https://github.com/kennethdu/DoctorLookup
* Navigate to the root directoy /package.json file
* In a terminal application type: '$ npm install' in a terminal application to install necessary packages 
* In a terminal application type: '$ npm start' to start a test server 
* User may follow along the website and input forms according to how they would like 

## Specifications

### Specs: Doctor Lookup
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **The program will identify user's inputted doctor name and return the applicable doctor's first name, last name, address, phone number, website, and whether or not they are accpeting new patients** | Input: "John Smith" | Output: Kenneth { 'Kenneth', 1997, 'United States', 'Moderate', 'Earth' } |
| **The program will identify user's inputted medical issue and return the applicable doctor's first name, last name, address, phone number, website, and whether or not they are accpeting new patients** | Input: "John Smith" | Output: Kenneth { 'Kenneth', 1997, 'United States', 'Moderate', 'Earth' } |
| **The program will identify if the API call was empty** | Input: "[]" | Output: "There were no doctors that met this criteria" |
| **The program will identify if the API call was an error** | Input: "Status 400" | Output: "Error Message" |


## Known Bugs

_No known bugs._

## Support and contact details

_kennethdu3@gmail.com_

## Technologies Used

_Vs Code_
_Git_
_Github_
_HTML_
_TDD_
_Javascript_
_ES6_
_Node_
### License

This software is licensed under the MIT license.

Copyright (c) 2018 **_Kenneth_Du_**