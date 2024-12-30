/* Types */
import { HeaderProps } from "types/components";

/* Styles */
import "@styles/components/header.css";

export default function Header(props: HeaderProps) {
	const { listItems } = props;

	return (
		<header id="Header">
			<div className="inner">
				<div className="header__decoration">
					<span className="decoration"></span>
					<span className="decoration"></span>
					<span className="decoration"></span>
				</div>

				<div className="header__status">
					<span>{`Completed: ${listItems.filter((item) => item.checked).length} / ${listItems.length}`}</span>
				</div>
			</div>
		</header>
	);
}
