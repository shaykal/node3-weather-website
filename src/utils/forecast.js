const request = require('request')

const forecast = (latitude, longitutde, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=92e20ffa1e524af07c24598d5a19efc4&query=' + latitude + ',' + longitutde + '&units=m'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degress out, and the humidity is: ' + body.current.humidity)
        }
    })
}

module.exports = forecast