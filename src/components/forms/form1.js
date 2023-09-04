import {useState} from "react";
import axios from "axios";

const form1 = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [img, setImage] = useState(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [price, setPrice] = useState(null)

    const addBicycle = async (name, price, img) => {
        console.log(img)
        const data = new FormData()
        data.append('name', name)
        data.append('price', price)
        data.append('image', img)

        await axios.post('http://localhost:3001/api/v1/bicycle', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGRhNGU4MzE1ODI2YjVjYjYwZGM4NzQiLCJpYXQiOjE2OTM4MDEyOTUsImV4cCI6MTY5NjM5MzI5NX0.gpC3udI2BBa8ddolVTiwatlyqYR57Vcc9GWJ94BNzlk'
            }
        })
    }

    return (
        <>
            <label htmlFor="">form 1</label><br/>
            <input type="file" onChange={e => setImage(e.target.files[0])}/><br/>
            <input type="text" onChange={e => setName(e.target.value)} value={name}/><br/>
            <input type="numeric" onChange={e => setPrice(e.target.value)} value={price}/><br/>
            <button onClick={() => addBicycle(name, price, img)}>add</button>
        </>
    )
}

export default form1