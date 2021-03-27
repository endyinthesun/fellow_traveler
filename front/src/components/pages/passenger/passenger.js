import React, {Component}  from 'react';
import {GoogleMap, LoadScript} from '@react-google-maps/api';
import Sidebar from '../../sidebar'
import './passenger.scss';

export default class Passenger extends Component {
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
                brandAuto: 'Lincoln',
                imgName: 'avatar.png',
                id: '1',
                active: false
            },
            {
                name: 'Freyder',
                brandAuto: 'Ford',
                imgName: 'avatar.png',
                id: '2',
                active: false
            },
            {
                name: 'Freyder',
                brandAuto: 'Ford',
                imgName: 'avatar.png',
                id: '3',
                active: false
            },
            {
                name: 'Freyder',
                brandAuto: 'Ford',
                imgName: 'avatar.png',
                id: '4',
                active: false
            },


        ];

        const listItems = driverList.map(({name, brandAuto, imgName, id, active}) => {
            const src = require(`./img/${imgName}`).default;
             return(
                <div 
                    className='item'
                    key={id}
                >
                    <img src={src} alt="name" className="item_img"/>
                    <div className="item_info">
                        <span className="item_info_name">{name}
                        </span>
                        <span className="item_info_brand">{brandAuto}</span>
                    </div>
                </div>
             );
         });
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
                            listItems={listItems}
                        />

                    </GoogleMap>
                </LoadScript>
            </>
        );
    };
}