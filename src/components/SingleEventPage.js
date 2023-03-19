import { useState, } from 'react'
import { useRouter, } from 'next/router'
import Image from 'next/image'
import styles from '../../styles/SingleEvent.module.css'

const SingleEventPage = ({ title, image, description, }) => {
	const [message, setMessage] = useState()
	const router = useRouter()

	const handleSubmit = (event) => {
		event.preventDefault()
		const { value } = event.target.querySelector("input[type='email']")
		if (!value) {
			setMessage("Enter email first before submitting.")
			return
		}
		fetch("/api/register", {
			method: "POST",
			headers: { 'Content-Type': "application/json" },
			body: JSON.stringify({ email: value, event: router.query.event_id, }),
		}).then(response => response.json()).then((res) => {
			if (res && res.success) {
				setMessage(`You have registered succssfully to the event '${res.event}' with this email '${res.email}'.`)
			} else {
				setMessage("Failed to Register.")
			}
		}).catch(() => {
			setMessage("Failed to Register.")
		}).finally(() => {
			event.target.querySelector("input[type='email']").value = ""
		})
	}

	return (
		<div className={styles.container}>
			<h1>{title}</h1>
			<Image width={1000} height={650} src={image} alt={title} />
			<p>{description}</p>
			<form onSubmit={handleSubmit} className={styles.form}>
				<h3>Get Registered for this event!</h3>
				<input type="email" placeholder="Enter your email here to register" />
				<button type="submit">Register</button>
			</form>
			<p className={styles.message}>{message}</p>
		</div>
	)
}

export default SingleEventPage
