export function getDoctor(name){
    return new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&name=${name}&user_key=1202d56e7b58243cff409a6a1360eeab`
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
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&query=${issue}&user_key=1202d56e7b58243cff409a6a1360eeab`
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