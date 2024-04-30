import { IoChevronForwardOutline } from 'react-icons/io5';

import './FooterNavItem.css';

export const FooterNavItem = ({ name }) => {
	return (
		<li>
			<IoChevronForwardOutline className="footerIcon" size={16} />{' '}
			<a href="#">{name}</a>
		</li>
	);
};
