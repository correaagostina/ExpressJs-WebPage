const express = require('express');
const app = express();

//Definir ruta basica
app.get('/',(req, res) =>{
    //res.writeHead(200,{'Contect-type':'text/html'});
    res.send('<h1>Bienvenidas a nuestra web!</h1>');
});

app.get('/cursos',(req, res) => {
    //res.writeHead(200,{'Contect-type':'text/html'});
    res.send('<h1>Bienvenidas a nuestra seccion cursos!</h1>');
})

app.get('/contacto',(req, res) => {
    //res.writeHead(200,{'Contect-type':'text/html'});
    res.send('<h1>Aqui puede ver nuestros datos de contacto...</h1>');
})

app.get('*',(req, res) => { //Duda: como responder con json <<------------------------------------
    //res.status(404).send('No se encuentra la ruta o recurso solicitado');
    res.json({error:'404', message:'No se encuentra la ruta o recurso solicitado'});
})

//Inicia el servidor
app.listen(3000, ()=>{
    console.log('Servidor iniciando en el puerto 3000...');
})