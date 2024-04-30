import './MovieDate.css';

export const MovieDate = ({ movie }) => {
	return (
		<div className={`date ${movie.active ? 'active' : ''}`}>
			<h2>{movie.date}</h2>
		</div>
	);
};
