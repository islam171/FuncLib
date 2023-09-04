import {useForm} from "react-hook-form";
import axios from "axios";

const form2 = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
        defaultValues: {
            name: '', price: 0
        }, mode: 'onChange'
    })

    const onSubmit = (values) => {
        console.log(values)
        axios.post('http://localhost:3001/api/v1/bicycle', values, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGRhNGU4MzE1ODI2YjVjYjYwZGM4NzQiLCJpYXQiOjE2OTIwMjg1NDcsImV4cCI6MTY5NDYyMDU0N30.ps60IaHYICc5rqVORf6eNXfFIW23L9Kog_jpiBro59Y'
            }
        })
    }

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">form 2</label><br/>
            <input type={"text"} name={"name"} {...register('name', {required: "Укажите имя продукта"})} /><br/>
            <input type={"number"} name={"price"} {...register('price', {required: "Укажите цену"})}/><br/>
            <input type={"file"} name={"image"} {...register('image', {required: "Добавте фото"})}/><br/>
            <button type="submit"> Add</button>
            <br/>
        </form>
    )
}

export default form2