const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/f15b1b57024611d2103c880e1e829fac/'+latitude+','+ longitude+'?units=si'

    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to forecast services!',undefined)
        }else if(body.error){
            callback('Unable to find location!',undefined)
        }else{
            callback(undefined,{
                summary:body.daily.data[0].summary,
                temperature:body.currently.temperature,
                precipitation:body.currently.precipProbability,
                temperatureHigh: body.daily.data[0].temperatureHigh,
                temperatureLow: body.daily.data[0].temperatureLow

            })
        }
    })
}
module.exports = forecast