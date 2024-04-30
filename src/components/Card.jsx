import { IoPlayOutline, IoAddOutline } from 'react-icons/io5';

import './Card.css';

export const Card = ({ movie }) => {
	return (
		<div className="col-lg-2 col-md-4 col-sm-6">
			<div className="movie-card">
				<img src={movie.previewImg} alt="Preview Image" className="img-fluid" />
				<p>
					{movie.length} | {movie.category}
				</p>
				<div className="content">
					<h4>{movie.title}</h4>
					<div className="card-icons">
						<IoAddOutline className="ionicon" />
						<IoPlayOutline className="ionicon" />
					</div>
				</div>
			</div>
		</div>
	);
};
