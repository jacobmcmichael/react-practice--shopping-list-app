/* Styles */
import "@styles/components/header.css";

export default function Header() {
	return (
		<header id="Header">
			<div className="inner">
				<div className="header__decoration">
					<span className="decoration"></span>
					<span className="decoration"></span>
					<span className="decoration"></span>
				</div>

				<div className="header__status">
					<span>Completed: 1 / 10</span>
				</div>
			</div>
		</header>
	);
}
