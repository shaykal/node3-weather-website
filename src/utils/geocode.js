const request = require('request')

const geocode = (address, callback) => {
    const mpaUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2hheWthbCIsImEiOiJjbDEyNTFseHQwM215M2NzMHhvOWdlNGxwIn0.rNCmMW3RAfDhECX8gAQZkA&limit=1'

    request({ url: mpaUrl, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location, try again with different search term', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitutde: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode