import React, {useCallback, useEffect, useState} from 'react';
import {Map, Placemark, Polygon} from 'react-yandex-maps';
import getAddress from '../../utils/getAddress'


const MapComponent = ({setMapsParams, setCoordinates, coordinates, poligons, setPoligons}) => {



    const [address, setAddress ] = useState({
        city: '',
        street: '',
        houseNum: '',
        area: ''
    })
    useEffect(() => { setMapsParams(address.city, address.street, address.houseNum, address.area)
        console.log(address)
    }, [address])

    useEffect(() => {
        if(coordinates.f.length ) {
            console.log('poligons:', poligons, coordinates)
        }
    }, [coordinates])
let [al, showAl] = useState(false)

    const instanceRef = (ref) => {
        if (ref) {
            ref.editor.startDrawing();
            ref.geometry.events.add('change', (e) => {
                let a = e.get('newCoordinates')
                if(a[0] && a[0].length === 5) {

                    let x = 0, y = 0

                    let x_coordinates = [...a[0]].map(el => el[0])
                    let y_coordinates = [...a[0]].map(el => el[1])

                    if((Math.max(...x_coordinates)-Math.min(...x_coordinates)) > 1/50 || (Math.max(...y_coordinates)-Math.min(...y_coordinates) )> 1/50 )  {
                        alert('Выберите территорию поменьше')
                        return
                    }

                    for (let i = 0 ; i < 4; i++) {
                        x += a[0][i][0]
                        y += a[0][i][1]
                    }
                    x /= 4
                    y /= 4
                    getAddress(x, y ).then(res => {
                        let kind = res.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.kind
                        let addressLine = res.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.Components
                        let lowercorener = res.response.GeoObjectCollection.featureMember[0].GeoObject.boundedBy.Envelope.lowerCorner
                         let uppercorner = res.response.GeoObjectCollection.featureMember[0].GeoObject.boundedBy.Envelope.upperCorner
                        let city = addressLine[2]?.kind === 'locality' ? addressLine[2]?.name : undefined
                        let street = addressLine[3]?.kind === 'street' ? addressLine[3]?.name : undefined
                        let houseNum = addressLine[4]?.kind === 'house' ? addressLine[4]?.name : undefined
                        let [x1, y1] = lowercorener.split(' ')
                        let [x2, y2] = uppercorner.split(' ')
                        x1 = Number(x1)
                        x2 = Number(x2)
                        y1 = Number(y1)
                        y2 = Number(y2)
                        let xdif =  (1850 * x1 -1850 * x2)
                        let ydif = (1850*y1 -1850* y2)
                        let area = Math.abs(xdif * ydif / 100).toString().substring(0, 6) + ' соток'
                        // console.log('Lowercornen ', x1 , 'Uppercorender',x2, 'coordinate ', lowercorener , 'Area ', area)

                        if(kind === 'house' ) {
                            // console.log(`city : ${city} street: ${street} house: ${houseNum}`)
                            // console.log(addressLine)
                            setAddress({ city, street, houseNum, area})

                        } else{
                            // console.log(addressLine)
                            // console.log(`city : ${city} street: ${street} house: ${houseNum}`)
                        }
                        setPoligons( [...poligons, {t: a[0][2],fr:a[0][3], f: a[0][0], s: a[0][1]}])
                        setCoordinates({...coordinates,t: a[0][2],fr:a[0][3], f: a[0][0], s: a[0][1]})
                    }).catch(e => console.log('Error', e))
                }
            })
        }
    }

    return (
        <div className="map-component">
            <Map width={"80vw"} height={"100vh"} defaultState={{ center: [50.994937, 71.430420], zoom: 9, controls: ['zoomControl']}}
                 modules={['control.ZoomControl']}
            >
                {poligons.map(poligon =>
                       <Polygon
                           key={poligon.f+ poligon.s/ poligon.t* poligon.fr}
                           geometry={[[poligon.f, poligon.s, poligon.t, poligon.fr]]}
                           options={{
                               fillColor: '#0000FF',
                               strokeColor: '#0000FF',
                               opacity: 0.5,
                               strokeWidth: 5,
                               editorMaxPoints: 5
                           }}
                       />
                )}
                <Polygon
                    instanceRef={instanceRef}
                    geometry={
                        [
                            coordinates.f,
                            coordinates.s,
                            coordinates.t,
                            coordinates.fr
                        ]
                    }
                    options={{
                        fillColor: '#00FF00',
                        strokeColor: '#0000FF',
                        opacity: 0.5,
                        strokeWidth: 5,
                        strokeStyle: 'shortdash',
                        editorMaxPoints: 5
                    }}
                />

                <Placemark defaultGeometry={[50.994937, 71.430420]} />
            </Map>
        </div>
    );
};

export default MapComponent;