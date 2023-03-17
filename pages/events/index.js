import Head from 'next/head'
import EventsPage from '../../src/components/eventsPage'

const Events = ({ events_categories, }) => {
	return (
		<>
			<Head>
				<title>Events</title>
			</Head>
			<EventsPage events_categories={events_categories} />
		</>
	)
}

export const getStaticProps = () => {
	return import("../../data/data.json").then((data) => {
		const { events_categories, } = data
		return { props: { events_categories, }, }
	})
}

export default Events