/* Styles */
import "@styles/button.css";

export default function Button(props: any) {
	const { children } = props;

	return <button>{children}</button>;
}
