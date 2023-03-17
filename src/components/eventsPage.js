import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Events.module.css'

const EventsPage = ({ events_categories, }) => {
	return (
		<div className={styles.container}>
			{
				events_categories.map((ev) => (
					<Link key={ev.id} href={`/events/${ev.id}`} className={styles.card}>
						<div className={styles.imageContainer}>
							<Image src={ev.image} alt={ev.title} fill />
						</div>
						<h2>{ev.title}</h2>
						<p>{ev.description}</p>
					</Link>
				))
			}
		</div>
	)
}

export default EventsPage
