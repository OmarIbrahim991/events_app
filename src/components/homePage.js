import Link from 'next/link'
import Image from 'next/image'

const HomePage = ({ events_categories, }) => {
	return (
		<main>
			{
				events_categories.map((ev) => (
					<Link key={ev.id} href={`/events/${ev.id}`}>
						<Image width={500} height={400} src={ev.image} alt={ev.title} priority={true} />
						<h2>{ev.title}</h2>
						<p>{ev.description}</p>
					</Link>
				))
			}
		</main>
	)
}

export default HomePage
