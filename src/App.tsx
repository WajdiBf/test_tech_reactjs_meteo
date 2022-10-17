import { useState } from 'react'
import useFetcher from './useFetcher'

function App() {
       const [Location, setLocation] = useState<string>('')
       const { data, searchLocationWeather, LocationError } = useFetcher({ Location })

       return (
              <div className='App'>
                     <div className='location'>
                            <input
                                   type='text'
                                   onChange={(e) => setLocation(e?.target?.value)}
                                   className='location_input'
                                   placeholder='Chose your location'
                            />
                            <button className='btn' onClick={searchLocationWeather}>
                                   Search For it
                            </button>
                     </div>

                     {LocationError ? (
                            <div>" {Location}" Is not a valid location , please try again </div>
                     ) : Location?.length == 0 ? (
                            <div>No location selected Yet </div>
                     ) : !data ? (
                            <div>Loading...</div>
                     ) : (
                            <div className='weather_result'>
                                   <div className='top'>
                                          <div className='name'>
                                                 <p>{data.name}</p>
                                          </div>
                                          <div className='res'>
                                                 <div className='temp'>{data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}</div>
                                                 <div className='main'>{data.weather ? <p>{data.weather[0].main}</p> : null}</div>
                                                 <div className='description'>{data.weather ? <p>{data.weather[0].description}</p> : null}</div>
                                          </div>
                                   </div>
                                   <div className='middle'>
                                          <h1>Wind Speed</h1>
                                          <h3> speed {data.wind?.speed}</h3>
                                          <h3>deg {data.wind?.deg} </h3>
                                          <h3>gust {data.wind?.gust}</h3>
                                   </div>

                                   <div className='bottom'>
                                          <div className='feels'>
                                                 {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
                                                 <p>Feels Like</p>
                                          </div>
                                          <div className='humidity'>
                                                 {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                                                 <p>Humidity</p>
                                          </div>
                                          <div className='wind'>
                                                 {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                                                 <p>Wind Speed</p>
                                          </div>
                                   </div>
                            </div>
                     )}
              </div>
       )
}

export default App
