import { useState } from 'react'
import axios from 'axios'
import styles from './form1.module.css'

const Form1 = () => {
	const [img, setImage] = useState(null)
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	const addOrder = async () => {
		const data = new FormData()

		data.append('name', 'islam')
		data.append('phone', '87779402149')
		data.append('postCode', '140000')
		data.append('country', 'Kazakhstan')
		data.append('city', 'Pavlodar')
		data.append('street', 'Varushina 10')
		data.append(
			'orderItems',
			JSON.stringify([
				{
					sneakers: '65d4edca5352f79bd834de8f',
					quantity: 10,
					size: 42
				},
				{
					sneakers: '65d4edca5352f79bd834de8f',
					quantity: 3,
					size: 41
				},
				{
					sneakers: '65d4ef06aed4e33efd33d263',
					quantity: 5,
					size: 42
				}
			])
		)
		await axios.post('http://localhost:3002/orders', data, {
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZmJkNjMxM2QyZWQ3MDcxMmQxYTciLCJpYXQiOjE3MDg0NTc2NTAsImV4cCI6MTcwODcxNjg1MH0.kxOAjKZNcajnzzEdOUO1GwFEUzFTj7Rcke-sR7cR6vA'
			}
		})
	}

	const addBicycle = async (name, password, img) => {
		const data = new FormData()
		// data.append('name', name)
		// data.append('price', password)
		// data.append('image', img)
		// console.log(data)
		data.append('name', 'islam')
		data.append('name', 40)
		data.append('color', 'iddsf454354353221')
		data.append('orderItems', [
			{
				sneakers: 'id',
				quantity: 10,
				size: 42
			},
			{
				sneakers: 'id',
				quantity: 3,
				size: 41
			},
			{
				sneakers: 'id',
				quantity: 5,
				size: 42
			}
		])
		await axios.post('http://localhost:3002/sneakers', data, {
			headers: { 'Content-Type': 'application/json' }
		})
	}

	return (
		<div className={styles.ring}>
			<i style={{ '--clr': '#00ff0a' }}></i>
			<i style={{ '--clr': '#ff0057' }}></i>
			<i style={{ '--clr': '#fffd44' }}></i>
			<form className={styles.form} onSubmit={e => e.preventDefault()}>
				<h2>Авторизация</h2>
				<div className={styles.inputBx}>
					<input
						type='text'
						onChange={e => setName(e.target.value)}
						value={name}
						name={'name'}
						autoComplete={'off'}
					/>
					<label htmlFor='name'>
						<span>Имя пользователя</span>
					</label>
				</div>
				<div className={styles.inputBx}>
					<input
						type='password'
						onChange={e => setPassword(e.target.value)}
						value={password}
						name={'password'}
					/>
					<label htmlFor='password'>
						<span>Пароль</span>
					</label>
				</div>
				<div className={styles.inputBx}>
					<input type='file' onChange={e => setImage(e.target.files[0])} />
				</div>
				<div className={styles.inputBx}>
					<input type='submit' onClick={() => addOrder()} />
				</div>
				<div className={styles.links}>
					<a href='#'>Забыли пароль?</a>
					<a href='#'>Регистрация</a>
				</div>
			</form>
		</div>
	)
}

export default Form1
