import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const HomePage = ({ events_categories, }) => {
	return (
		<main className={styles.home}>
			{
				events_categories.map((ev) => (
					<Link key={ev.id} href={`/events/${ev.id}`} className={styles.row}>
						<Image width={500} height={250} src={ev.image} alt={ev.title} priority={true} />
						<div className={styles.info}>
							<h2>{ev.title}</h2>
							<p>{ev.description}</p>
						</div>
					</Link>
				))
			}
		</main>
	)
}

export default HomePage
