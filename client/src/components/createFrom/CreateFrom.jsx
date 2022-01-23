import React, {useEffect, useState} from 'react';
import {Trash, ClipboardCheck, Arrow90degRight} from 'react-bootstrap-icons'
import PassportData from "./PassportData";
import MapComponent, {removeLast} from "./MapComponent";
import MapAddressData from "./MapAddressData";
import MapExtraData from "./MapExtraData";
import Button from "../../utils/Button";



const CreateFrom = () => {
    const [passport, setPassport] = useState( {
                surname: '',
                name: '',
                parentName: '',
                iin: ''
            })
    const [address, setAddress] = useState({
        city: '',
        street: '',
        houseNumber: '',
        apartmentNumber: ''
    })
      const [extra, setExtra] = useState({
              cadastral: '',
              area: '',
              additional: ''
          }
      )

    const [coordinates, setCoordinates] = useState({
        f: [], s: [], t: [], fr: []
    })

    const [poligons, setPoligons] = useState([
    //     {
    //     f:  [51.305874582859076, 71.35325821105957],
    //     fr:  [51.252474305308176, 71.73777969543455],
    //     s:  [51.00533553102401, 71.15275772277829],
    //     t:  [50.958523688798984, 71.73777969543455]
    // }

    ])
    const [len, setLen] = useState(poligons.length)
    useEffect(() => {
        setLen(poligons.length)
    }, [poligons])


    const setMapsParams = (city, street, houseNumber, area) => {
        setAddress({...address, city, street, houseNumber})
        setExtra({...extra, area})
    }

    const removeLast = () => setPoligons( [...poligons].slice(0, len-1))

    const clearButton = () => {
        console.log('poligons', poligons.length)
        console.log('polions', poligons.length)
        setPassport({
            surname: '',
            name: '',
            parentName: '',
            iin: ''
        }  )
        setAddress({
            city: '',
            street: '',
            houseNumber: '',
            apartmentNumber: ''
        })
        setExtra({
            cadastral: '',
            area: '',
            additional: ''
        })
        setCoordinates({
            f: [], s: [], t: [], fr: []
        })
        removeLast()
    }



    return(
        <div className="create-form-page">
            <div className="create-form-panel">
                <PassportData passport={passport} setPassport={setPassport}/>
                <MapAddressData address={address} setAddress={setAddress}/>
                <MapExtraData extra={extra} setExtra={setExtra}/>
                <div className="buttons-panel">
                    <Button color="blueviolet" text={"сохранить"} icon={ClipboardCheck} onClick={()=>console.log('Save click')}/>
                    <Button backgroundColor="grey" color="white" text={"очистить"} icon={Trash} onClick={()=>{
                        clearButton()
                    }}/>
                    <Button backgroundColor="white" text={"В меню"} icon={Arrow90degRight} color={"black"} onClick={()=>window.location.href='/menu'}/>
                </div>
                </div>
            <MapComponent poligons={poligons} setPoligons={setPoligons} coordinates={coordinates} setCoordinates={setCoordinates}  setMapsParams={setMapsParams}/>
        </div>

    );
};

export default CreateFrom;