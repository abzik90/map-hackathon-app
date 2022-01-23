import React, {useEffect, useState} from 'react';
import Button from "../../utils/Button";
import {PencilSquare} from "react-bootstrap-icons";
import {getAll} from "../../utils/apiSend";
import axios from "axios";
import BestEl from "../../utils/bestEl";
const Menu = () => {
    //после загрузки с сервера данные изменятся, моковые данные если сервер не работает
const [data, setData] = useState([
    {
        "surname": "Testov",
        "name": "Test",
        "midname": "Testovich",
        "iin": "001020500200",
        "city": "Astana",
        "street": "Kabanbay",
        "homeNum": "53/24",
        "flatNum": "1225",
        "cadastral": "787878787878",
        "area": "20",
        "datePublished": "1642901165",
        "additional": "",
        "aid": "4"
    },
    {
        "surname": "Testov",
        "name": "Test",
        "midname": "Testovich",
        "iin": "001020500200",
        "city": "Astana",
        "street": "Kabanbay",
        "homeNum": "53/24",
        "flatNum": "1225",
        "cadastral": "787878787878",
        "area": "20",
        "datePublished": "1642907678",
        "additional": "",
        "aid": "5"
    },
    {
        "surname": "Testov",
        "name": "Test",
        "midname": "Testovich",
        "iin": "001020500200",
        "city": "Astana",
        "street": "Kabanbay",
        "homeNum": "53/24",
        "flatNum": "1225",
        "cadastral": "787878787878",
        "area": "20",
        "datePublished": "1642909710",
        "additional": "",
        "aid": "6"
    },
    {
        "surname": "Testov",
        "name": "Test",
        "midname": "Testovich",
        "iin": "001020500200",
        "city": "Astana",
        "street": "Kabanbay",
        "homeNum": "53/24",
        "flatNum": "1225",
        "cadastral": "787878787878",
        "area": "20",
        "datePublished": "1642909748",
        "additional": "",
        "aid": "7"
    }
])
    let a = []
    useEffect(
         () => {
             axios.get('https://www.ch76146.tmweb.ru/kas/select/').then(res => {
                 setData(res.data)
             }). catch(e => {
                 console.log(e)
             })
            console.log('Received')
    }, [])


    return (
        <div className="menu">
            <Button onClick={()=> window.location.href='/create'} text={"Создать"} icon={PencilSquare} backgroundColor={"green"} color={"white"}/>
            <table id="customers">
                <tr>
                    <th>Name surname</th>
                    <th>Area</th>
                    <th>cadastral number</th>
                </tr>
                {data.map(el => <BestEl name={el.name} surname={el.surname}
                    area={el.area} num={el.cadastral}
                />)}
            </table>

        </div>
    );
};

export default Menu;