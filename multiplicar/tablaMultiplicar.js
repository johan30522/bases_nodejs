const fs = require('fs');


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let datastr = '';
        let strReturn = '';
        if (!Number(base) || !Number(limite)) {
            reject('base o limite no son numericos');
            return;
        }
        for (let index = 0; index <= limite; index++) {
            datastr += (`${base} x ${index} = ` + base * index + `\n`);
        }
        strReturn += '==============================================\n';
        strReturn += `===============Tabla de ${base} ==================\n`;
        strReturn += datastr;
        strReturn += '==============================================\n';
        resolve(strReturn);
    })
}

let getMultiplicar = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let datastr = '';
        if (!Number(base) || !Number(limite)) {
            reject('no es un numero');
            return;
        }
        for (let index = 0; index <= limite; index++) {
            datastr += (`${base} x ${index} = ` + base * index + `\n`);
        }

        const data = new Uint8Array(Buffer.from(datastr));
        fs.writeFile(`message-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve('The file has been saved!');
        });
    })
}

module.exports = {
    getMultiplicar,
    listarTabla
};