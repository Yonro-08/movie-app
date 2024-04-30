import { IoCloseOutline } from 'react-icons/io5';

import './Modal.css';

export const Modal = ({ movie, status, toggleModal }) => {
	return (
		<div className={`movieModal ${status ? 'active' : ''}`}>
			<a href="#" className="modalClose" onClick={toggleModal}>
				<IoCloseOutline />
			</a>
			<iframe
				width="1280"
				height="720"
				src={movie.video}
				title={`${movie.title} | Official Trailer`}
				frameBorder="0"
				allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
};
