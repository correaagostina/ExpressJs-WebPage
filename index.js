//acá se levantan los servidores
const app = require('./app');

async function main (){
    //await app.listen(app.get('port'));
    await app.listen(5000);
    console.log('Server on port', app.get('port'));
}

main();