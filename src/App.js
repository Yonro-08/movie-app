import { useEffect, useState } from 'react';

import { Banner } from './pages/Banner';
import { Header } from './pages/Header';
import { Main } from './pages/Main';
import { Footer } from './pages/Footer';
import { BackToTopBtn } from './components/BackToTopBtn';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', () => setScroll(window.scrollY));

		return () => {
			window.removeEventListener('scroll', () => setScroll(window.scrollY));
		};
	}, [scroll]);

	return (
		<>
			<Header scroll={scroll} />
			<Banner />
			<Main />
			<Footer />
			<BackToTopBtn scroll={scroll} />
		</>
	);
}

export default App;
