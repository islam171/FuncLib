import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import styles from './form1.module.css'

const Form1 = () => {
	const [img, setImage] = useState({})
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	const addBicycle = async (name, password, img) => {
		const data = new FormData()
		data.append('name', name)
		data.append('price', password)
		data.append('image', img)
		console.log(data)
	}

	return (
		<div className={styles.ring}>
			<i style={{ '--clr': '#00ff0a' }}></i>
			<i style={{ '--clr': '#ff0057' }}></i>
			<i style={{ '--clr': '#fffd44' }}></i>
			<form className={styles.form}>
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
					<input
						type='submit'
						onClick={() => addBicycle(name, password, img)}
					/>
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
