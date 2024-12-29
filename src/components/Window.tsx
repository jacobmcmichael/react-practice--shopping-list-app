/* Styles */
import "@styles/window.css";

/* Components */
import List from "@app/components/List";
import Sidebar from "@app/components/Sidebar";

export default function Window() {
	return (
		<main id="Window">
			<List />
			<Sidebar />
		</main>
	);
}
