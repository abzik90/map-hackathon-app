import axios from 'axios'

export default async (y, x) => {
    const response = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=e0db320b-6e57-4e1d-b4f3-1270dd4675d7&geocode=${x},${y}&lang=en-US&format=json`)
    return response.data
}




