const { satellites } = require("../database/satellites");

module.exports = {
    getMessage: () => {

        let messages = [];
        satellites.forEach(satellite => {
            messages.push(satellite.message);
        });

        let result = [];
        let err;
        for (let i = 0; i < messages[0].length; i++) {
            err = true;
            for (let j = 0; j < messages.length; j++) {
                const mensaje = messages[j];
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
    }
};

function deleteDuplicateElements(result) {
    let response = [];
    result.forEach(element => {
        if (!response.includes(element))
            response.push(element);
    });
    return response;
}
