import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/City.module.css'

const CityPage = ({ events, pageTitle, }) => {
	return (
		<div>
			<h1>{pageTitle}</h1>
			<div className={styles.container}>
				{
					events.map(({ id, title, city, description, image, }) => (
						<Link key={id} href={`/events/${city}/${id}`}>
							<div className={styles.imageContainer}>
								<Image src={image} alt={title} fill />
							</div>
							<h2>{title}</h2>
							<p>{description}</p>
						</Link>
					))
				}
			</div>
		</div>
	)
}

export default CityPage
