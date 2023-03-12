import Link from 'next/Link'
import Image from 'next/image'

const CityPage = ({ events, pageTitle, }) => {
	return (
		<div>
			<h1>{pageTitle}</h1>
			<div>
				{
					events.map(({ id, title, city, description, image, }) => (
						<Link key={id} href={`/events/${city}/${id}`}>
							<Image width={500} height={400} src={image} alt={title} />
							<h2>{title}</h2>
							<p>{description}</p>
						</Link>
					))
				}
			</div>
		</div>
	)
}

export default CityPage
