import Image from 'next/image'
import styles from '../../styles/SingleEvent.module.css'

const SingleEventPage = ({ title, image, description, }) => {
	return (
		<div className={styles.container}>
			<h1>{title}</h1>
			<Image width={1000} height={650} src={image} alt={title} />
			<p>{description}</p>
		</div>
	)
}

export default SingleEventPage
