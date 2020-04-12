//requireds

const fs = require('fs');
const colors = require('colors');



let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';
        console.log('================================'.green);
        console.log('======tabla de multiplicar======'.green);
        console.log('================================'.green);
        for (let i = 1; i <= limite; i++) {

            let multi = base * i;

            console.log(`${base} * ${ i } = ${ multi }`);

        }

    });

};


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            let multi = base * i;

            data += (`${base} * ${ i } = ${ multi } \n`);

        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);

        });


    });

};



module.exports = {
    crearArchivo,
    listarTabla
}