import CityPage from '../../../src/components/cityPage'

const City = ({ events, pageTitle, }) => {
	return (
		<CityPage events={events} pageTitle={pageTitle} />
	)
}

export const getStaticPaths = () => {
	return import("../../../data/data.json").then((data) => {
		const { all_events, } = data
		return {
			paths: all_events.map(({ city, }) => ({ params: { city, }, })),
			fallback: false,
		}
	})
}

export const getStaticProps = (context) => {
	return import("../../../data/data.json").then((data) => {
		const { all_events, events_categories, } = data
		const { city, } = context.params
		const events = all_events.filter(ev => ev.city == city)
		const cityObj = events_categories.find(ct => ct.id == city)
		const pageTitle = cityObj ? cityObj.title : ""
		return { props: { events, pageTitle, }, }
	})
}

export default City
