/* Types */
import { ListItemType } from "@app/types/components";

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

function ListItem(item: ListItemType) {
	const handleCheckboxClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const currentTarget: HTMLDivElement = event.currentTarget;
		const checkbox: HTMLInputElement | null = currentTarget.querySelector('input[type="checkbox"]');

		if (checkbox) {
			checkbox.checked = !checkbox.checked;
		}
	};

	return (
		<div
			key={item.id}
			className="form__group"
			onClick={(event) => handleCheckboxClick(event)}
		>
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
	return (
		<section id="List">
			<div className="inner">
				<form id="ShoppingListForm">{data.length > 0 && data.map((item) => <ListItem {...item} />)}</form>
			</div>
		</section>
	);
}
