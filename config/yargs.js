const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        default: 10,
        alias: 'l'
    }
};
const argv = require('yargs')
    .command('list', 'Imprime en consola la tabla de multiplicar', {
        opt
    })
    .command('create', 'crea el archivo de la tabla de multiplicar', {
        opt
    })
    .argv;
module.exports = {
    argv
};