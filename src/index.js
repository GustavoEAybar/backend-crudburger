//const express = require('express');
import express from 'express';

const app = express();

app.set('port', process.env.PORT || 4001);

app.get('/', (req, res) => {
    res.send('Bienvenido a FullStack Jr.');
});

app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando en puerto ` + app.get('port'));
});