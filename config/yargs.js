const opts = {
    description: {
        demand: true,
        alias: 'd'
    },
    complete: {
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
    .command('create', 'Crear tarea por hacer', opts)
    .command('update', 'Actualiza una tarea por hacer', opts)
    .command('delete', 'Elimina una tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
}