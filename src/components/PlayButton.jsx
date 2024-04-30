import { useState } from 'react';
import { IoPlayOutline } from 'react-icons/io5';

import { Modal } from './Modal';

import './PlayButton.css';

export const PlayButton = ({ movie }) => {
	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
	};

	return (
		<>
			<div
				className={`trailer d-flex align-items-center justify-content-center ${
					movie.active ? 'active' : ''
				}`}
			>
				<a href="#" className="playBtn" onClick={toggleModal}>
					<IoPlayOutline className="playIcon" />
				</a>
				<p>Watch Trailer</p>
			</div>
			{movie.active && (
				<Modal movie={movie} status={modal} toggleModal={toggleModal} />
			)}
		</>
	);
};
