import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = ({ events_categories, }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Events App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<img />
				<nav>
					<a href="/">Home</a>
					<a href="/events">Events</a>
					<a href="/about-us">About Us</a>
				</nav>
			</header>

			<main className={styles.main}>
				{
					events_categories.map((ev) => (
						<a key={ev.id} href={`/events/${ev.id}`}>
							<img src={ev.image} alt={ev.title} />
							<h2>{ev.title}</h2>
							<p>{ev.description}</p>
						</a>
					))
				}
			</main>

			<footer className={styles.footer}>
				<p>&copy; {new Date().getFullYear()} All rights reserved</p>
			</footer>
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
