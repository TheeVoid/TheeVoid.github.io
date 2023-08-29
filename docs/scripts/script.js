function loadHTML(){

    return fetch("../data/navigation.json", {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Content-Type': 'application/json'
        },

    })
    .then(console.log(Response.json()))    




}
/*
        .then(data => console.log(data))
        .then(response => document.getElementById('content-load').innerHTML = response)
        .catch(error => console.log(error));
*/

/*
    fetch('../browse/')
    .then(response=> response.text())
    .then(text=> document.getElementById('content-load').innerHTML = text);
*/




