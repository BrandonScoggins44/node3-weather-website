const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidXppaGEiLCJhIjoiY2tjbDA0ZjFpMjB2ZDJ1bzUweTFrenF1bSJ9.EJIEirl6HjvwUxGhk7bAHA&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!') // second value in this callback is implicitly undefined
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined) // second argument does not need to be explicitly placed
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode