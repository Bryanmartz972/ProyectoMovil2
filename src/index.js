
const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const app = express();
app.set('port', process.env.port || 3001);
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.listen(app.get('port'), () => {
    console.log(`Servidor iniciado en el puerto ${app.get('port')}`);
});
app.set('json spaces', 2);
app.use(passport.initialize());
//rutas
app.use('/api/',require('./routes/index'));
app.use('/api/usuario/',require('./routes/usuario'));
app.use('/api/productos/',require('./routes/productos'));
app.use('/api/tarjeta/',require('./routes/tarjetas'));
app.use('/api/pago/',require('./routes/pagos'));
app.use('/api/categorias/',require('./routes/Categorias'));
app.use('/api/tallas/',require('./routes/Tallas'));
app.use('/api/factura/',require('./routes/facturas'));
app.use('/api/detalles_factura/',require('./routes/detalles_factura'));

