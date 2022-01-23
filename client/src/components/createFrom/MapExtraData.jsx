import React from 'react';
import Header from "../../utils/Header";
import Input from "../../utils/input";

const MapExtraData = ({extra, setExtra}) => {
    const {cadastral, area, additional} = extra
    const setExtraField = field => value => {
        setExtra({
            ...extra,
            [field]: value
        })
    }

    return (
        <div className="create-form">
            <Header header={"Дополнительно"}/>
            <div className="create-form-input">
            <Input value={cadastral} setValue={setExtraField('cadastral')} placeholder="Кадастровый номер"/>
            <Input value={area} setValue={setExtraField('area')} placeholder="Площадь"/>
            <Input value={additional} setValue={setExtraField('additional')} placeholder="Дополнительно"/>
            </div>
            </div>)
};

export default MapExtraData;