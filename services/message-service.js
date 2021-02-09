// input: el mensaje tal cual es recibido en cada satélite
// output: el mensaje tal cual lo genera el emisor del mensaje
const getMessage = async(mensajes) => {
    
    let result = [];
    let err;
    for (let i = 0; i < mensajes[0].length; i++) {
        err = true;
        for (let j = 0; j < mensajes.length; j++) {
            const mensaje = mensajes[j];
            const elementoMensaje = mensaje[i];
            if (elementoMensaje) {
                result.push(elementoMensaje);
                err = false
                break;
            }
        };
        if (err) {
            throw 'Cantidad de mensajes insuficientes para descifrar mensaje de auxilio';
        }
    };

    let response = deleteDuplicateElements(result);

    return response.join(' ').trim();
};

module.exports = { getMessage };

function deleteDuplicateElements(result) {
    let response = [];
    result.forEach(element => {
        if (!response.includes(element))
            response.push(element);
    });
    return response;
}
