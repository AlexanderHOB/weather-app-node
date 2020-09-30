let axios = require('axios');
const key = '61c0bf0769423ce146ba6fa9ee64614b';


const getClima =async (ciudad) =>{
    const rpt = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric`)
    return rpt.data.main.temp;
}


module.exports = {
    getClima
}