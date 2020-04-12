const { argv } = require('./config/yargs');
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');



let comando = argv._[0];


switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: `, colors.bgBlue(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log("comando no reconocido");
}

// let base = 3232;


// console.log(process.argv);

// let argv2 = process.argv;

// console.log('limite', argv.limite);


// let parametro = argv[2];
// let base = parametro.split('=')[1];