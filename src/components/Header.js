import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className="header">
			<Link to="/" className="logo">Pubgyu.</Link>
			<strong className="logo">Portfolio.</strong>
        </header>
	);
}
