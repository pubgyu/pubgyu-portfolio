import { Link } from 'react-router-dom';
import '@/Styles/Header.scss';

export default function Header() {
	return (
		<header className="header">
			<Link to="/" className="logo">Pubgyu.</Link>
			<strong className="logo">Portfolio.</strong>
        </header>
	);
}
