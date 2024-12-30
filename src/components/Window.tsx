/* Types */
import { WindowProps } from "types/components";

/* Styles */
import "@styles/components/window.css";

/* Components */
import List from "@components/List/List";
import Sidebar from "@components/Sidebar";

/* TODO: Add context to avoid prop drilling */
export default function Window(props: WindowProps) {
	const { listItems, setListItems } = props;
	return (
		<main id="Window">
			<List
				listItems={listItems}
				setListItems={setListItems}
			/>
			<Sidebar setListItems={setListItems} />
		</main>
	);
}
