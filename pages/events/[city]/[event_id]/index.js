import Head from 'next/head'
import SingleEventPage from '../../../../src/components/SingleEventPage'

const Event = (props) => {
	return (
		<>
			<Head>
				<title>{props.title}</title>
			</Head>
			<SingleEventPage {...props} />
		</>
	)
}

export const getStaticPaths = () => {
	return import("../../../../data/data.json").then((data) => {
		const { all_events, } = data
		return {
			paths: all_events.map(({ id, city, }) => ({ params: { event_id: id, city, } })),
			fallback: false,
		}
	})
}

export const getStaticProps = (context) => {
	return import("../../../../data/data.json").then((data) => {
		const { event_id, } = context.params
		const { all_events, } = data
		return {
			props: { ...all_events.find(({ id, }) => id == event_id), },
		}
	})
}

export default Event
