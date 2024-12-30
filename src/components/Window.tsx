/* Dependencies */
import { useEffect, useRef, useState } from "react";

/* Types */
import { ListItemType } from "@app/types/components";

/* Styles */
import "@styles/components/window.css";

/* Components */
import List from "@components/List";
import Sidebar from "@components/Sidebar";

/* Constants */
import { initialListData } from "@constants/components";

export default function Window() {
	const [listItems, setListItems] = useState<ListItemType[]>(initialListData);

	useEffect(() => {
		setListItems((prevItems: ListItemType[]) => {
			const updatedItems = prevItems.map((prevItem, index) => {
				return { ...prevItem, id: index + 1 };
			});

			return updatedItems;
		});
	}, [setListItems]);

	useEffect(() => {
		console.log(listItems);
	}, [listItems]);

	const handleAddItem = (item: ListItemType) => {
		setListItems((prevItems: ListItemType[]) => [...prevItems, { ...item, id: prevItems.length + 1 }]);
	};

	return (
		<main id="Window">
			<List
				listItems={listItems}
				setListItems={setListItems}
			/>
			<Sidebar handleAddItem={handleAddItem} />
		</main>
	);
}
