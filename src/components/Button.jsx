import './Button.css';

export const Button = ({
	icon,
	name,
	bgColor = '#ff3700',
	color = '#ffffff',
}) => {
	return (
		<a
			href="#"
			className="mainBtn"
			style={{
				background: bgColor,
				color: color,
			}}
		>
			{icon}
			{name}
		</a>
	);
};
