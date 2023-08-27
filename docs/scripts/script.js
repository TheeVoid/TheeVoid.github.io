

function loadHTML(){
    fetch('../browse/')
    .then(response=> response.text())
    .then(text=> document.getElementById('content-load').innerHTML = text);
  }

