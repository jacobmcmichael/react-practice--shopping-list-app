/* Dependencies */
import { useEffect, useState } from "react";

/* Types */
import { ListItemType } from "types/components";

/* Styles */
import "@styles/components/app.css";

/* Components */
import Header from "@components/Header";
import Window from "@components/Window";

/* Constants */
import { initialListData } from "@constants/components";

export default function App() {
	const [listItems, setListItems] = useState<ListItemType[]>(initialListData);

	useEffect(() => {
		setListItems((prevItems: ListItemType[]) => {
			const updatedItems = prevItems.map((prevItem, index) => {
				return { ...prevItem, id: index + 1 };
			});

			return updatedItems;
		});
	}, [setListItems]);

	return (
		<div id="App">
			<Header listItems={listItems} />
			<Window
				listItems={listItems}
				setListItems={setListItems}
			/>
		</div>
	);
}
