import Link from 'next/Link'
import Image from 'next/image'

const EventsPage = ({ events_categories, }) => {
	return (
		<div>
			{
				events_categories.map((ev) => (
					<Link key={ev.id} href={`/events/${ev.id}`}>
						<Image width={500} height={400} src={ev.image} alt={ev.title} />
						<h2>{ev.title}</h2>
						<p>{ev.description}</p>
					</Link>
				))
			}
		</div>
	)
}

export default EventsPage
