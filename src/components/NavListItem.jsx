import './NavListItem.css';

export const NavListItem = ({ nav, navOnClick }) => {
	return (
		<li>
			<a
				href={nav.link}
				className={`${nav.active ? 'active' : ''}`}
				onClick={() => navOnClick(nav.id)}
			>
				{nav.name}
			</a>
		</li>
	);
};
