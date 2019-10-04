const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
//controla quem pode consumir minha api
const cors = require('cors');
const path = require('path');

const app = express();
mongoose.connect('mongodb+srv://cursoreact:cursoreact@cluster0-92lrh.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
// req.query = Acessar query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

//como não passei parametro qualquer um pode acessar
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);