import '@/styles/globals.css';
import '@/styles/courses.css';		//must be on _app.js

import Layout from '../components/common/layout';

import Head from 'next/head';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				 <meta name="description" content="Álvaro Martínez García's Portfolio, game developer, programmer and Unity developer. Alvaro Martinez Garcia will showcase his projects in this portfolio." />
				<link rel="icon" href="/icon.png" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
