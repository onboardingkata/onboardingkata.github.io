function holaMundo(){
    alert("hola mundo");
}

function enviarFeedback(recurso, movimiento) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3002/estadisticos/EnviarEstadistica", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Kata', 'b7751e6a166017b5758fc8001ea381d35d7c0c82');
    xhr.setRequestHeader('Tenant', 'a4051635-1de0-4be3-b308-331daae451df');
    xhr.send(JSON.stringify({
        "idRecurso": recurso,
        "tipoMovimiento" : movimiento
    }));

    $('#successModal').modal({show: true})
}