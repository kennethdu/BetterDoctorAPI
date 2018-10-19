/* eslint-disable no-unused-vars */

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getIssue, getDoctor } from './doctor.js';
const Promise = require('es6-promise').Promise;

$(document).ready(function() {
    $("#nameForm").submit(function(event){
        event.preventDefault();
        $("#nameResults").text("");
        $("#issueResults").text("");
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let promise1 = getDoctor(firstName, lastName);

        promise1.then(function(response){
            let body = JSON.parse(response);
            if(body.data.length > 0){
                for(let i =0; i < body.data.length; i++){
                    $("#nameResults").append(`<h1>${firstName} ${lastName}</h1>
                    <h3>Address:</h3>
                    <h5>${body.data[i].practices[0].visit_address.street}, ${body.data[i].practices[0].visit_address.zip}</h5>
                    <h5>${body.data[i].practices[0].visit_address.city}, ${body.data[i].practices[0].visit_address.state}</h5>
                    <h3>Phone Number:</h3> 
                    <h5>${body.data[i].practices[0].phones[0].number}</h5>
                    <h3>Website:</h3>
                    <h5>${body.data[i].practices[0].website}</h5>
                    <h3>Is the doctor accepting new patients(true/false)?</h3>
                    <h5>${body.data[i].practices[0].accepts_new_patients}</h5>`);
                }
            }else{
                $("#nameResult").append("There are no doctors matching your criteria");
                }
            });
        });
    
    
    $("#issueForm").submit(function (event) {
        event.preventDefault();
        $("#nameResults").text("");
        $("#issueResults").text("");
        let issue = $("#issue").val();
        let promise2 = getIssue(issue);

        promise2.then(function (response) {
            let body = JSON.parse(response);
            if (body.data.length > 0) {
                for (let i = 0; i < body.data.length; i++) {
                    $("#issueResults").append(`<h1>${body.data[i].practices[0].name}</h1>`);
                }
            } else {
                $("#issueResults").append("There are no doctors matching your criteria, try again!");
            }
        });
    });
});



