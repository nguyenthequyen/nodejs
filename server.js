const express = require('express');
const bodyParser = require('body-parser');
const dbconfig = require('./config/database.config.js');
const mongooes = require('mongoose');

mongooes.Promise = global.Promise;

mongooes.connect(dbconfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log('Connect database success!');
}).catch(error => {
    console.log('Has error: ', error);
    process.exit();
})

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({ "message": "I learn MongoDB 1" });
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
    require('./app/routers/note.routers.js')(app);
})