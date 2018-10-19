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
                    <h4>${body.data[i].practices[0].visit_address.street}</h4>`);
                }
            }else{
                $("#nameResult").append("There are no doctors matching your criteria");
                }
            });
        });
    });

    // $("#issueForm").submit(function (event) {
    //     event.preventDefault();
    //     $("#nameResults").text("");
    //     $("#issueResults").text("");
    //     let issue = $("#issue").val();
    //     // let promise2 = getIssue(issue);

    //     // promise2.then(function (response) {
    //     //     let body = JSON.parse(response);
    //     //     let nameList = body;

    //     // });
    // });

// });
