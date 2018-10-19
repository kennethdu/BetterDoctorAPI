const Promise = require('es6-promise').Promise;


export function getDoctor(firstName, lastName){
    return new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=wa-seattle&skip=0&limit=10&first_name=${firstName}&last_name=${lastName}&user_key=${process.env.API_KEY}`
        console.log(url);
        request.onload = function() {
            if(this.status === 200){
                resolve(request.response);
            }else{
                reject(Error(request.statusText));
            }
        };
        request.open("GET", url, true);
        request.send();
    });
}

export function getIssue(issue){
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=wa-seattle&skip=0&limit=10&query=${issue}&user_key=${process.env.API_KEY}`
        request.onload = function () {
            if (this.status === 200) {
                resolve(request.response);
            } else {
                reject(Error(request.statusText));
            }
        };
        request.open("GET", url, true);
        request.send();
    });
}

