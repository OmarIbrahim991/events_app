import styles from '../../styles/Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>&copy; {new Date().getFullYear()} All rights reserved</p>
		</footer>
	)
}

export default Footer
