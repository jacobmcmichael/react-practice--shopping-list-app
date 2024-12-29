/* Styles */
import "@styles/components/window.css";

/* Components */
import List from "@components/List";
import Sidebar from "@components/Sidebar";

export default function Window() {
	return (
		<main id="Window">
			<List />
			<Sidebar />
		</main>
	);
}
