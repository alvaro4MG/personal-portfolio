import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Skills from '@/components/home/Skills';
import Projects from '@/components/home/Projects';
import Contact from '@/components/home/Contact';

import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Álvaro's Portfolio</title>
				<meta name="description" content="Álvaro Martínez García's Portfolio. This webpage shows the work and progress of computer engineering student and software and game developer Alvaro Martinez Garcia from Spain." />
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
