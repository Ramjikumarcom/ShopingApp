import React, { useState } from 'react'
// import Location from './Location.css'
function LocationLive() {

    const [Lattitude, setlattitude] = useState(null);
    const [Longitude, setlongitude] = useState(null);
    const [userAddress, setUserAddress] = useState();
    const geo = navigator.geolocation;
    geo.getCurrentPosition(userCoords)
    function userCoords(position) {
        let userLatitude = position.coords.latitude;
        let userLongitude = position.coords.longitude
        setlattitude(userLatitude)
        setlongitude(userLongitude)

    }
    const getAddress = async () => {
        const url = `https://api.opencagedata.com/geocode/v1/json?key=e520461b7930431b99db33b4f4d82599&q=${Lattitude}%2C+${Longitude}&pretty=1&no_annotations=1`
        const loc = await fetch(url)
        const data = await loc.json();
        setUserAddress(data.results[0].formatted)
        // console.log(data)

    }
    return (

        <div style={{
            height: '400px',
            marginLeft: '130px'
        }}>

            <h1>Current Location</h1>
            <h1>{Lattitude}</h1>
            <h1>{Longitude}</h1>
            <h1>{userAddress}</h1>
            <button onClick={() => {
                getAddress();
            }}>get Address</button>
        </div>
    )
}

export default LocationLive