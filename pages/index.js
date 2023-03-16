import Head from 'next/head'
import HomePage from '../src/components/homePage'

const Home = ({ events_categories, }) => {
	return (
		<div>
			<Head>
				<title>Events App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomePage events_categories={events_categories} />
		</div>
	)
}

export const getStaticProps = () => {
	return import("../data/data.json").then((data) => {
		const { events_categories, } = data
		return { props: { events_categories, }, }
	})
}

export default Home
