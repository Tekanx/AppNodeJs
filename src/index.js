// Run with: npm run dev
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

// Inicializaciones
const app = express();

// Configuraciones del Servidor Express
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

// Middlewares, peticiones de usuarios
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

// Variables globales!
app.use((req, res, next) => {
    
    next();
});

// Rutas (URL)
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));


// Archivos Públicos
app.use(express.static(path.join(__dirname, 'public')));

// Server setup & startup
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto: ', app.get('port'))
});
