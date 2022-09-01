const axios = require('axios')

const getCurrentWeather = async function(req, res){
    try{
        let city = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let appid = req.query.appid
        let resultArray = []
        for(i=0; i<city.length; i++){
            let objInArray = { city : city[i]}
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=${appid}`
            }
            let result = await axios(options)
            objInArray.temperature = (result.data.main.temp).toString()
            resultArray.push(objInArray)
        }

        let sorted = resultArray.sort((a, b) => a.temperature - b.temperature)
        res.status(200).send(sorted)
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

module.exports.getCurrentWeather = getCurrentWeather