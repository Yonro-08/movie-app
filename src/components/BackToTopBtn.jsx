import { IoArrowUpOutline } from 'react-icons/io5';

import './BackToTopBtn.css';

export const BackToTopBtn = ({ scroll }) => {
	const backToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<a
			className={`back-to-top ${scroll > 100 ? 'active' : ''}`}
			onClick={backToTop}
		>
			<IoArrowUpOutline className="arrowUpIcon" />
		</a>
	);
};
