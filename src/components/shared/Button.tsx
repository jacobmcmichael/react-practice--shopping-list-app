/* Types */
import { ButtonProps } from "types/components";

/* Styles */
import "@styles/components/shared/button.css";

export default function Button(props: ButtonProps) {
	const { variant, children, ...rest } = props;

	return (
		<button
			{...rest}
			className={`button button--${variant}`}
		>
			{children}
		</button>
	);
}
