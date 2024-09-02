import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Álvaro's Portfolio</title>
				<meta name="description" content="Álvaro Martínez García's Portfolio. This webpage shows the work and progress of computer engineering student and software and game developer Alvaro Martinez Garcia from Spain." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.jpeg" />
			</Head>
			<div>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</div>
		</>
	);
};

export default Home;
