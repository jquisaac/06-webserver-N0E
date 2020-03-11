const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');


/**
 * Obtener puerto de heroku
 */
const port = process.env.PORT || 3000;

/**
 * Instruccion que se ejecuta siempre no imorta q url la persona pida
 */
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

/**
 * Express HBS engine (Permite modularizar componentes del html)
 */
app.set('view engine', 'hbs');

/**
 * Configuramos una peticion get en el path '/'
 */
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Isaac'
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});