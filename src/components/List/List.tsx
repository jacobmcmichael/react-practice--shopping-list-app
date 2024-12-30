/* Types */
import { ListProps } from "@app/types/components";

/* Styles */
import "@styles/components/list.css";

/* Components */
import ListItem from "@components/List/ListItem";
import EmptyList from "@components/List/EmptyList";

export default function List(props: ListProps) {
	const { listItems, setListItems } = props;

	return (
		<section id="List">
			<div className="inner">
				{listItems.length > 0 ? (
					<form id="ShoppingListForm">
						{listItems.map((item) => (
							<ListItem
								key={item.id}
								item={item}
								setListItems={setListItems}
							/>
						))}
					</form>
				) : (
					<EmptyList />
				)}
			</div>
		</section>
	);
}
