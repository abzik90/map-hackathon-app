import axios from 'axios'

export const postAll = async (surname, name,  parentName, iin, city, street, houseNumber, apartmentNumber, cadastral, area, additional, latitudeArr, longitudeArr, ) => {
    const response = await axios.post(`https://www.ch76146.tmweb.ru/kas/create/`, {
        surname, name,  midname: parentName, iin, city, street, houseNumber, area , cadastral, flatNum: apartmentNumber, additional
    })
    return response.data
}

