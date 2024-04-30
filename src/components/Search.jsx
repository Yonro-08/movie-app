import { IoSearchOutline } from 'react-icons/io5';

import './Search.css';

export const Search = () => {
	return (
		<div className="search">
			<input type="text" placeholder="Search" />
			<IoSearchOutline size={28} className="search-icon" />
		</div>
	);
};
