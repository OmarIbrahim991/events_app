import Image from 'next/image'

const SingleEventPage = ({ title, image, description, }) => {
	return (
		<div>
			<h1>{title}</h1>
			<Image width={1000} height={750} src={image} alt={title} />
			<p>{description}</p>
		</div>
	)
}

export default SingleEventPage
