import React, {Component} from 'react'
import GoogleMaps from "simple-react-google-maps"
import '../../style.css';
import '../../colors/blue.css';

const style = {
    height: "500px"
}

class MapLocation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="map" style={style}>
                <GoogleMaps
                    apiKey={"AIzaSyDcXcvBUVR7Xe_dOMrBAUsgRfx_GmAr5h4"}
                    style={{height: "400px", width: "100%"}}
                    zoom={13}
                    center={{lat: 47.487810, lng: -52.830163}}
                    markers={{lat: 47.487810, lng: -52.830163}} //optional
                />
            </div>
        )
    }
}
export default MapLocation
