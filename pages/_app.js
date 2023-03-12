import MainLayout from '../src/components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
	<>
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	</>
  )
}

export default MyApp
