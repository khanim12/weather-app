import React, { useEffect, useState } from 'react'

function useNavigators() {
    const [location, setLocation] = useState({ latitude: null, longitude: null })
    const [error, setError] = useState(null)
    useEffect(() => {
        if (!navigator.geolocation) {
            setError('yeriniz duzgun tapilmadi')
            return
        }
        const getSuccess = (position) => {
            setLocation({
               latitude:position.coords.latitude,
                longitude:position.coords.longitude
    })
        }
        const getError =(error)=> {
            setError(error.message)
        }
       navigator.geolocation.getCurrentPosition(getSuccess,getError)
    },[])
  return {location,error}
}

export default useNavigators
