import React, {Component}  from 'react';
import {GoogleMap, LoadScript} from '@react-google-maps/api';
import Sidebar from '../../sidebar'
import './driver.scss';

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
        const options = {
            zoom: 16,
            minZoom: 13,
            maxZoom: 18,
            disableDefaultUI: true,
            center: {
                lat: 50.74112835606719, 
                lng: 25.32148048596876
            }
        }
        let driverList = [
            {
                name: 'Endy',
                brandAuto: 'Lincoln'
            },
            {
                name: 'Freyder',
                brandAuto: 'Ford'
            }
        ]
        return(
            <>
                <LoadScript
                 googleMapsApiKey='AIzaSyBOczvH2n2uuDy6VClOiM1r4UoEKCV4F6M'
                >
                    <GoogleMap
                        mapContainerClassName='containerMap'
                        options={options}
                    >
                        <Sidebar 
                            typeList='driver list'
                            listData={driverList}
                        />

                    </GoogleMap>
                </LoadScript>
            </>
        );
    };
}