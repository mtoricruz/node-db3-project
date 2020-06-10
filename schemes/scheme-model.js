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

module.exports = {
    find,
    findById,
    findSteps,
}