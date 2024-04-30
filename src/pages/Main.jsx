import { Schedule } from './Schedule';
import { Trend } from './Trend';
import { Blog } from './Blog';

import './Main.css';

export const Main = () => {
	return (
		<main>
			<Schedule />
			<Trend />
			<Blog />
		</main>
	);
};
