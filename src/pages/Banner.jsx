import { useEffect, useState } from 'react';

import { MovieContent } from '../components/MovieContent';
import { MovieDate } from '../components/MovieDate';
import { PlayButton } from '../components/PlayButton';
import { MovieSwiper } from '../components/MovieSwiper';

import './Banner.css';

export const Banner = () => {
	const [movies, setMovies] = useState([]);

	const fetchData = () => {
		fetch('http://localhost:3000/api/movieData.json')
			.then((response) => response.json())
			.then((data) => setMovies(data))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleSlideChange = (id) => {
		console.log(id);
		const newMovies = movies.map((movie) => {
			movie.active = false;
			if (movie._id === id) {
				movie.active = true;
			}
			return movie;
		});

		setMovies(newMovies);
	};

	return (
		<div className="banner">
			{movies &&
				movies.length > 0 &&
				movies.map((movie) => (
					<div key={movie._id} className="movie">
						<img
							src={movie.bgImg}
							alt="Background Image"
							className={`bgImg ${movie.active ? 'active' : ''}`}
						/>
						<div className="container-fluid">
							<div className="row">
								<div className="col-lg-6 col-md-12">
									<MovieContent movie={movie} />
								</div>
								<div className="col-lg-6 col-md-12">
									<MovieDate movie={movie} />
									<PlayButton movie={movie} />
								</div>
							</div>
						</div>
					</div>
				))}

			{movies && movies.length > 0 && (
				<MovieSwiper slides={movies} slideChange={handleSlideChange} />
			)}
		</div>
	);
};
