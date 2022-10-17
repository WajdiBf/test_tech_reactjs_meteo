import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_Base_URl } from './config'
import { ResponseAPIWeather, UseFetcher } from './models'

export default (props: UseFetcher) => {
       const { Location } = props
       const [Data, setData] = useState<ResponseAPIWeather | null>()
       const [LocationError, setLocationError] = useState<boolean>(false)
       useEffect(() => {
              setLocationError(false)
              setData(null)
       }, [Location])

       const searchLocationWeather = () => {
              if (Location?.trim()?.length > 0)
                     axios.get(API_Base_URl(Location))
                            .then(({ data }) => setData(data))
                            .catch((e) => setLocationError(true))
       }
       return { data: Data, searchLocationWeather, LocationError }
}
