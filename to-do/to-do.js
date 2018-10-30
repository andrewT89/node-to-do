const fs = require('fs');

let listToDO = [];

const loadDB = () => {

    try {

        listToDO = require('../DB/data.json');

    } catch (error) {
        listToDO = [];
    }
}

const create = (description) => {

    loadDB();

    let toDo = {
        description,
        complete: false
    }

    listToDO.push(toDo);
    saveTaskDB();
    return toDo;
}

const saveTaskDB = () => {
    let data = JSON.stringify(listToDO);

    fs.writeFile(`./DB/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo guardar el archivo', err);
    });
}

const getListado = () => {
    loadDB();
    return listToDO;
}

const updateTak = (description, complete = true) => {
    loadDB();
    let index = listToDO.findIndex(tarea => tarea.description === description);

    if (index >= 0) {
        listToDO[index].complete = complete;
        saveTaskDB();
        return true;
    } else {
        return false;
    }
}

const deleteTask = (description) => {
    loadDB();
    let newList = listToDO.filter(el => el.description !== description);

    if (listToDO.length === newList.length) {
        return false;
    } else {
        listToDO = newList;
        saveTaskDB();
        return true;
    }
}

module.exports = {
    create,
    getListado,
    updateTak,
    deleteTask
}