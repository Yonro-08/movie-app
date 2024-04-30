import { IoBookmarksOutline, IoAddOutline } from 'react-icons/io5';

import { Button } from './Button';

import './MovieContent.css';

export const MovieContent = ({ movie }) => {
	return (
		<div className={`content ${movie.active ? 'active' : ''}`}>
			<img src={movie.titleImg} alt="Movie Title" className="movie-title" />
			<h4>
				<span>{movie.year}</span>
				<span>
					<i>{movie.ageLimit}</i>
				</span>
				<span>{movie.length}</span>
				<span>{movie.category}</span>
			</h4>
			<p>{movie.description}</p>
			<div className="button">
				<Button
					icon={<IoBookmarksOutline />}
					name="Book"
					color="#ff3700"
					bgColor="#ffffff"
				/>
				<Button icon={<IoAddOutline />} name="My List" />
			</div>
		</div>
	);
};
