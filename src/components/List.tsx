/* Dependencies */
import { useEffect, useState } from "react";

/* Types */
import { ListItemType, ListItemProps } from "@app/types/components";

/* Styles */
import "@styles/components/list.css";

const data = [
	{
		id: 1,
		name: "Item 1",
		checked: false,
	},
	{
		id: 2,
		name: "Item 2",
		checked: false,
	},
	{
		id: 3,
		name: "Item 3",
		checked: false,
	},
	{
		id: 4,
		name: "Item 4",
		checked: false,
	},
	{
		id: 5,
		name: "Item 5",
		checked: false,
	},
];

function ListItem(props: ListItemProps) {
	const { item, setListItems } = props;

	const handleCheckboxClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const currentTarget: HTMLDivElement = event.currentTarget;
		const checkbox: HTMLInputElement | null = currentTarget.querySelector('input[type="checkbox"]');

		if (checkbox) {
			checkbox.checked = !checkbox.checked;
		}
	};

	const handleDeleteItem = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const currentTarget: HTMLButtonElement = event.currentTarget;
		const listItem: HTMLElement | null = currentTarget.parentElement;

		if (listItem) {
			setListItems((prevItems: ListItemType[]) => prevItems.filter((prevItem) => prevItem.id !== item.id));
		}
	};

	return (
		<div
			className="form__group"
			onClick={(event) => handleCheckboxClick(event)}
		>
			<button
				className="form__action"
				onClick={(event) => handleDeleteItem(event)}
			>
				❌
			</button>

			<label htmlFor={item.name}>{item.name}</label>
			<input
				id={item.name}
				type="checkbox"
				name={item.name}
				defaultChecked={item.checked}
			/>
		</div>
	);
}

export default function List() {
	const [listItems, setListItems] = useState<ListItemType[]>(data);

	useEffect(() => {
		console.log(listItems);
	}, [listItems]);

	return (
		<section id="List">
			<div className="inner">
				<form id="ShoppingListForm">
					{listItems.length > 0 &&
						listItems.map((item) => (
							<ListItem
								key={item.id}
								item={item}
								setListItems={setListItems}
							/>
						))}
				</form>
			</div>
		</section>
	);
}
