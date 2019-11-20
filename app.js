const { getMultiplicar, listarTabla } = require('./multiplicar/tablaMultiplicar');
const colors = require('colors');

//let base = 'aaa';
const { argv } = require('./config/yargs')


let comando = argv._[0];

switch (comando) {
    case 'list':
        //console.log('list');
        listarTabla(argv.base, argv.limit)
            .then(resp => {
                console.log(resp.red);
            })
            .catch(err => { console.log(err); })
        break;
    case 'create':
        //console.log('create');
        getMultiplicar(argv.base, argv.limit)
            .then(resp => {
                console.log(resp.green);
            })
            .catch(err => { console.log(err); })
        break;
    default:
        console.log('comando no reconocido');
}

//console.log(process);


// let param = argv[2];
// let base = param.split('=')[1];
console.log(argv);