import { useState } from 'react';
import { IoLogInOutline } from 'react-icons/io5';

import { Button } from '../components/Button';
import { NavListItem } from '../components/NavListItem';
import { Search } from '../components/Search';
import { navListData } from '../data/navListData';

import './Header.css';

export const Header = ({ scroll }) => {
	const [navList, setNavList] = useState(navListData);

	const handleNavOnClick = (id) => {
		const newNavList = navList.map((nav) => {
			nav.active = false;
			if (nav.id === id) nav.active = true;
			return nav;
		});

		setNavList(newNavList);
	};

	return (
		<header className={`${scroll > 100 ? 'scrolled' : ''}`}>
			<a href="/" className="logo">
				Cinema
			</a>
			<ul className="nav">
				{navListData.map((nav) => (
					<NavListItem key={nav.id} nav={nav} navOnClick={handleNavOnClick} />
				))}
			</ul>
			<Search />
			<Button icon={<IoLogInOutline />} name="Sign in" />
		</header>
	);
};
