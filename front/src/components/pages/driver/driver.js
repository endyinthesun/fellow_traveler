import React, {Component}  from 'react';
import {GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import Sidebar from '../../sidebar'

export default class Driver extends Component {
    state = {
            response: null,
            travelMode: 'DRIVING',
            origin: '',
            destination: '',
            checkbox_state: ''
    }

    position = { lat: 33.772, lng: -117.214 }

    directionsCallback = (response) => {
        console.log(response)

        if (response !== null) {
            if (response.status === 'OK') {
                this.setState(
                    () => ({
                        response
                    })
                )
            } else {
                console.log('response: ', response)
            }
        }
    }


    onMapClick = (...args)  => {

        if (this.state.destination === '')
        {
            this.setState(() => ({destination: args[0].latLng}))
        }
        else
        {
            this.setState(() => ({origin: args[0].latLng}))
        }

    }

    getOrigin = (ref) => {
        this.origin = ref
    }

    getDestination = (ref) => {
        this.destination = ref
    }

    onClick = () => {
        if (this.origin.value !== '' && this.destination.value !== '') {
            this.setState(
                () => ({
                    origin: this.origin.value,
                    destination: this.destination.value
                })
            )
        }
    }

    render() {
        return(
            <div className='map'>
                <div className='map-settings'>
                    <hr className='mt-0 mb-3' />

                    <div className='row'>
                        <div className='col-md-6 col-lg-4'>
                            <div className='form-group'>
                                <label htmlFor='ORIGIN'>Origin</label>
                                <br />
                                <input placeholder={'From'} id='ORIGIN' className='form-control' type='text' ref={this.getOrigin} />
                            </div>
                        </div>

                        <div className='col-md-6 col-lg-4'>
                            <div className='form-group'>
                                <label htmlFor='DESTINATION'>Destination</label>
                                <br />
                                <input id='DESTINATION' placeholder={'Where'} className='form-control' type='text' ref={this.getDestination} />
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4'>
                            <div className='form-group'>
                                <label htmlFor='choose_map'>Choose on map</label>
                                <br />
                                <input id='choose_map'  className='form-control' type='checkbox'/>
                            </div>
                        </div>
                    </div>

                    <button className='btn btn-primary' type='button' onClick={this.onClick}>
                        Build Route
                    </button>
                </div>

                <div className='map-container'>
                    <LoadScript
                        googleMapsApiKey='AIzaSyBOczvH2n2uuDy6VClOiM1r4UoEKCV4F6M'
                    >
                    <GoogleMap
                        // required
                        id='direction-example'
                        // required
                        mapContainerStyle={{
                            height: '400px',
                            width: '100%'
                        }}
                        // required
                        zoom={2}
                        // required
                        center={{
                            lat: 0,
                            lng: -180
                        }}
                        // optional
                        onClick={this.onMapClick}
                        // optional
                        onLoad={map => {
                            console.log('DirectionsRenderer onLoad map: ', map)
                        }}
                        // optional
                        onUnmount={map => {
                            console.log('DirectionsRenderer onUnmount map: ', map)
                        }}
                    >
                        {
                            (
                                this.state.destination !== '' &&
                                this.state.origin !== ''
                            ) && (
                                <DirectionsService
                                    // required
                                    options={{
                                        destination: this.state.destination,
                                        origin: this.state.origin,
                                        travelMode: this.state.travelMode
                                    }}
                                    // required
                                    callback={this.directionsCallback}
                                    // optional
                                    onLoad={directionsService => {
                                        console.log('DirectionsService onLoad directionsService: ', directionsService)
                                    }}
                                    // optional
                                    onUnmount={directionsService => {
                                        console.log('DirectionsService onUnmount directionsService: ', directionsService)
                                    }}
                                />
                            )
                        }

                        {
                            this.state.response !== null && (
                                <DirectionsRenderer
                                    // required
                                    options={{
                                        directions: this.state.response
                                    }}
                                    // optional
                                    onLoad={directionsRenderer => {
                                        console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
                                    }}
                                    // optional
                                    onUnmount={directionsRenderer => {
                                        console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
                                    }}
                                />
                            )
                        }
                    </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        );
    };
}


