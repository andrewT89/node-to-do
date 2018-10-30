// const argv = require('yargs').argv;
const { argv } = require('./config/yargs');
const color = require('colors');

let command = argv._[0];

const { create, getListado, updateTak, deleteTask } = require('./to-do/to-do')

switch (command) {
    case 'create':
        let task = create(argv.description);
        console.log(task);
        break;

    case 'list':
        let listado = getListado();

        for (let taskList of listado) {
            console.log('========== Por Hacer ============='.green)
            console.log(taskList.description)
            console.log(`Estado: ${taskList.complete}`.yellow)
            console.log('=================================='.green)
        }
        break;

    case 'update':
        let update = updateTak(argv.description, argv.complete);
        console.log(update);
        break;

    case 'delete':
        let dlte = deleteTask(argv.description);
        console.log(dlte);
        break;

    default:
        console.log('Comando no reconocido');

}