//const express = require('express');
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import './database'
import router from './routes/products.routes';

const app = express();

app.set('port', process.env.PORT || 4001);

//middlewares
app.use(morgan('dev'));//nos da info de la consulta: tipo, status, el tiempo de ejecucion
app.use(cors());//nos permite recibir peticiones remotas a nuestra api
app.use(express.json());
app.use(express.urlencoded({ extended: true }));//estos dos ultimos nos permiten recibir e interpretar el json de la req

//app.use(express.static('public'));

app.use(express.static(path.join(__dirname, '../public')));

//rutas de prueba
// app.get('/', (req, res) => {
//     res.send('Bienvenido a FullStack Jr.');
// });

//rutas
app.use('/api-v1', router)

app.post('/', (req, res) => {
    res.send('Got a POST request');
});

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user');
});

app.delete('/user', (req, res) => {
    res.send('Got a DELETE reques at /user');
});

app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando en puerto ` + app.get('port'));
});