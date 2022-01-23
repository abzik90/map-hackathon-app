import React, {useState} from 'react';
import Header from "../../utils/Header";
import Input from "../../utils/input";

const MapAddressData = ({address, setAddress}) => {
    const {city, street, houseNumber, apartmentNumber} = address
    const setAddressField = field => value => {
        setAddress({
            ...address,
            [field]: value
        })
    }

    return (
        <div className="create-form">
            <Header header={"Адрес"}/>
            <div className="create-form-input">
            <Input value={city} setValue={setAddressField('city')} placeholder="Город"/>
            <Input value={street} setValue={setAddressField('street')} placeholder="Улица"/>
            <Input value={houseNumber} setValue={setAddressField('houseNumber')} placeholder="Номер дома"/>
            <Input value={apartmentNumber} setValue={setAddressField('apartmentNumber')} placeholder="Номер квартиры"/>
            </div>
        </div>)
};

export default MapAddressData;