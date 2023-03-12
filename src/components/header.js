import Link from 'next/link'

const Header = () => {
	return (
		<header>
			<img />
			<nav>
				<Link href="/">Home</Link>
				<Link href="/events">Events</Link>
				<Link href="/about-us">About Us</Link>
			</nav>
		</header>
	)
}

export default Header
