import React, {Component}  from 'react';
import {GoogleMap, LoadScript} from '@react-google-maps/api';
import Sidebar from '../../sidebar'

export default class Driver extends Component {
    state = {
        start: '',
        end: ''
    }

    render() {
        const center = {
            lat: 50.74112835606719, 
            lng: 25.32148048596876
        };
        const containerStyle = {
            width: '400px',
            height: '400px'
          };
        return(
            <>
            <Sidebar />
                <LoadScript
                 googleMapsApiKey='AIzaSyBOczvH2n2uuDy6VClOiM1r4UoEKCV4F6M'
                >
                    <GoogleMap
                    mapContainerClassName='containerMap'
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                    >
                            
                    </GoogleMap>
                </LoadScript>
            </>
        );
    };
}