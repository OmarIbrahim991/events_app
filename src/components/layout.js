import styles from '../../styles/Layout.module.css'
import Footer from './footer'
import Header from './header'

const MainLayout = ({ children }) => {
	return (
		<>
			<Header />
			<main className={styles.layout}>
				{children}
			</main>
			<Footer />
		</>
	)
}

export default MainLayout
