import React from 'react';
import  {  GoogleMap ,  useJsApiLoader, Marker  }  from  '@react-google-maps/api';


import './Map.css';

const Map = () => {

    const  { isLoaded }  =  useJsApiLoader ( { 
        id : 'google-map-script' , 
        googleMapsApiKey : 'AIzaSyApC1k8fYSP8To999NnhOmzq_VjvhoiaO0' , 
      } )

      const  Delicata  =  { 
        lat : -22.906225638185305, 
        lng : -43.086624600726054, 
      }

      const openGoogleMaps = () => {
        const url = `https://www.google.com/maps/place/Keli+Delicata+pmu/@-22.9061339,-43.0862984,19.5z/data=!4m6!3m5!1s0x99836c9357fecd:0xcbcd840d55085fe8!8m2!3d-22.9062584!4d-43.0866235!16s%2Fg%2F11fl9m_h1n?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D`;
        window.open(url, '_blank');
    };

    return (
        <div className='d-flex justify-content-center align-items-center'>
        <div className='my-3 d-flex flex-column align-items-center text-center'>
            <h1 className='text-center text-light'>Nossa Localização</h1>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={{
                        height: '400px',
                        width: '100%',
                    }}
                    zoom={15}
                    center={Delicata}
                >
                    <Marker onClick={openGoogleMaps} position={Delicata} options={{
                        label: {
                            text: 'Estúdio Delicata',
                            className: 'map-marker text-danger',
                        }
                    }}/>
                </GoogleMap>
            )}
            <p className='text-center text-light'>R. Dr. Mario Vianna, 734 - Santa Rosa, Niterói - RJ, 24241-002</p>
        </div>
    </div>
    
    )
}

export default Map;