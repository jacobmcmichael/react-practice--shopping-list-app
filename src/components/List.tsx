/* Styles */
import "@styles/list.css";

const data = [
	{
		id: 1,
		name: "Item 1",
	},
	{
		id: 2,
		name: "Item 2",
	},
	{
		id: 3,
		name: "Item 3",
	},
	{
		id: 4,
		name: "Item 4",
	},
	{
		id: 5,
		name: "Item 5",
	},
];

export default function List() {
	return (
		<section id="List">
			<div className="inner">
				<form id="ShoppingListForm">
					{data.length > 0 &&
						data.map((item) => (
							<div
								key={item.id}
								className="form__group"
							>
								<label htmlFor={item.name}>{item.name}</label>
								<input
									id={item.name}
									type="checkbox"
									name={item.name}
								/>
							</div>
						))}
				</form>
			</div>
		</section>
	);
}
