const Events = ({ events, pageTitle, }) => {
	return (
		<div>
			<h1>{pageTitle}</h1>
			<div>
				{
					events.map(({ id, title, city, description, image, }) => (
						<a key={id} href={`/events/${city}/${id}`}>
							<img src={image} alt={title} />
							<h2>{title}</h2>
							<p>{description}</p>
						</a>
					))
				}

			</div>
		</div>
	)
}

export const getStaticPaths = () => {
	return import("../../../data/data.json").then((data) => {
		const { allEvents, } = data
		return {
			paths: allEvents.map(({ city, }) => ({ params: { city, }, })),
			fallback: false,
		}
	})
}

export const getStaticProps = (context) => {
	return import("../../../data/data.json").then((data) => {
		const { allEvents, events_categories, } = data
		const { city, } = context.params
		const events = allEvents.filter(ev => ev.city == city)
		const cityObj = events_categories.find(ct => ct.id == city)
		const pageTitle = cityObj ? cityObj.title : ""
		console.log("pageTitle", pageTitle)
		return { props: { events, pageTitle, }, }
	})
}

export default Events
