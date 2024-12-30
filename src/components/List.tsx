/* Types */
import { ListItemType, ListItemProps, ListProps } from "@app/types/components";

/* Styles */
import "@styles/components/list.css";

function ListItem(props: ListItemProps) {
	const { item, setListItems } = props;

	const handleCheckboxChange = () => {
		setListItems((prevItems: ListItemType[]) =>
			prevItems.map((prevItem) => {
				if (prevItem.id === item.id) {
					return { ...prevItem, checked: !prevItem.checked };
				}

				return prevItem;
			}),
		);
	};

	const handleDeleteItem = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const button: HTMLButtonElement = event.currentTarget;
		const listItem: HTMLElement | null = button.parentElement;

		if (listItem) {
			setListItems((prevItems: ListItemType[]) => prevItems.filter((prevItem) => prevItem.id !== item.id));
		}
	};

	return (
		<div className="form__group">
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
				checked={item.checked}
				onChange={handleCheckboxChange}
			/>
		</div>
	);
}

export default function List(props: ListProps) {
	const { listItems, setListItems } = props;

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
