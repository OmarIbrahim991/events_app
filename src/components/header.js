import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
	return (
		<header>
			<Link href={"/"}>
				<Image width={50} height={50} src={"/logo.png"} alt="Logo" />
			</Link>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/events">Events</Link>
				<Link href="/about-us">About Us</Link>
			</nav>
		</header>
	)
}

export default Header
