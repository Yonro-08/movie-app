import { IoCalendarOutline } from 'react-icons/io5';

import './TrendCard.css';

export const TrendCard = ({ slide }) => {
	return (
		<div className="trend-card">
			<img src={slide.previewImg} alt="Preview Image" className="img-fluid" />
			<a href="#">
				Add to calendar <IoCalendarOutline />
			</a>
		</div>
	);
};
