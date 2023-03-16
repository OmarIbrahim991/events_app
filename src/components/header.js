import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<Link href={"/"} className="logo">
				<Image width={50} height={50} src={"/logo.png"} alt="Logo" />
			</Link>
			<nav className={styles.nav}>
				<Link href="/">Home</Link>
				<Link href="/events">Events</Link>
				<Link href="/about-us">About Us</Link>
			</nav>
		</header>
	)
}

export default Header
