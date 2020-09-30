let clima = require('./clima/clima');
let {argv} = require('./config/yargs');

let encodedURL = encodeURI(argv.direccion);


const getInfo=async(direccion )=>{
    try {
        const temp = await clima.getClima(direccion);
        return `El clima de ${direccion} es de ${temp}`;
    } catch (error) {
        return ` No se pudo determinar de ${direccion}`; 
    }

}
getInfo(encodedURL).then(console.log).catch(console.log)
// console.log(argv.direccion);