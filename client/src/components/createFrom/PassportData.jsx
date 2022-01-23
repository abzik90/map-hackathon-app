import React, {useState} from 'react';
import Header from "../../utils/Header";
import Input from "../../utils/input";

const PassportData = ({passport, setPassport}) => {
    const {name, surname, parentName, iin} = passport
    const setPassportField = field => value => {
        setPassport({
            ...passport,
            [field]: value
            })
    }

    return (
        <div className="create-form">
            <Header header={"Паспортные данные"}/>
            <div className="create-form-input">
                <Input value={name} setValue={setPassportField('name')} placeholder="Имя"/>
                <Input value={surname} setValue={setPassportField('surname')} placeholder="Фамилия"/>
                <Input value={parentName} setValue={setPassportField('parentName')} placeholder="Отчество"/>
                <Input value={iin} setValue={setPassportField('iin')} placeholder="ИИН"/>
            </div>
           </div>)
};

export default PassportData;