/* Types */
import { ButtonProps } from "@app/types/components";

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
