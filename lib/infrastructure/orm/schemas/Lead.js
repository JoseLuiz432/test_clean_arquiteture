
const mongoose = require('../mongoose');

const subSchema = new mongoose.Schema({
    latitude: {
        type: Number,
        min: -90,
        max: 90,
        required: true
    },
    longitude: {
        type: Number,
        min: -180,
        max: 180,
        required: true
    }
});

const leadSchema = new mongoose.Schema({
    cnpj_cpf: {
        type: Number,
        required: true
    },
    nome_contato: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    localizacao: {
        type: subSchema,
        required: true
    },
    status_telefone: {
        type: Number,
        required: true
    }, 
});



module.exports = mongoose.model('Lead', leadSchema);