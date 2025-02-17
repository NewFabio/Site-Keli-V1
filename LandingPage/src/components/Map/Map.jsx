import React from 'react';
import  {  GoogleMap ,  useJsApiLoader, Marker  }  from  '@react-google-maps/api';


import './Map.css';

const Map = () => {

    const  { isLoaded }  =  useJsApiLoader ( { 
        id : 'google-map-script' , 
        googleMapsApiKey : 'AIzaSyApC1k8fYSP8To999NnhOmzq_VjvhoiaO0' , 
      } )

      const  Delicata  =  { 
        lat : -22.906701, 
        lng : -43.086583, 
      }


    return (
        <div className='my-3'>
            { isLoaded && (
                <GoogleMap
                    mapContainerStyle = {{
                        height : '500px',
                        width : '100%',
                    }}
                    zoom={15}
                    center={Delicata}
                >
                    <div>
                        <Marker position={Delicata} options={{
                            label: {
                                text: 'Estúdio Delicata',
                                className: 'map-marker text-danger',
                            }
                        }}/>
                    </div>
                </GoogleMap>
            )}
        </div>
    )
}

export default Map;