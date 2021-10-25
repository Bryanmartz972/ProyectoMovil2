const express = require('express');
const morgan = require('morgan');
const app = express();
app.set('port',3001);
//app.set('port',process.env.port || 3001 );
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set('json space' , 2);

app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto 3001');
});

//HOLA MUNDO