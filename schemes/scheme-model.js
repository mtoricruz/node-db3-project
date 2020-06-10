const db = require("../data/db-config.js");

function find() {
    return db('schemes')
        .select()
}

function findById(id) {
    return db('schemes') // FROM schemes
        .where({ id }) 
        .select() 
}

function findSteps(id) {
    return db('schemes')
        .join('steps', 'schemes.id', 'steps.scheme_id')
        .where('schemes.id', id)
        .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .orderBy('steps.step_number', 'asc')
}

function add(schemes) {
    return db('schemes')
        .insert(schemes)
        .then(([ids]) => {
            return findById(ids)
        })
}

function update(changes, id) {
    return db('schemes')
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db('schemes')
        .where('id', id)
        .del()
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}