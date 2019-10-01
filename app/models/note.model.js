const mongooes = require('mongoose');
const NoteSchema = mongooes.Schema({
    title: String,
    content: String
}, {
        timestemps: true
    })

module.exports = mongooes.model('Note', NoteSchema)