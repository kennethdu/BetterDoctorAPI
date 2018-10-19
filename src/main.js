import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getIssue, getDoctor } from './doctor.js';
// const Promise = require('es6-promise').Promise;

$(document).ready(function() {
    $("#nameForm").submit(function(event){
        event.preventDefault();
        $("nameResults").text("");
        $("issueResults").text("");
        let name = $("#name").val();
        // let promise1 = getDoctor(name);

        // promise1.then(function(response){
        //     let body = JSON.parse(response);
        //     let nameList = body;

        });
    });

    $("#issueForm").submit(function (event) {
        event.preventDefault();
        $("nameResults").text("");
        $("issueResults").text("");
        let issue = $("#issue").val();
        // let promise2 = getIssue(issue);

        // promise2.then(function (response) {
        //     let body = JSON.parse(response);
        //     let nameList = body;

        // });
    });

});
