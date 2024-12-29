/* Styles */
import "@styles/components/list.css";

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
	const handleCheckboxClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const currentTarget: HTMLDivElement = event.currentTarget;
		const checkbox: HTMLInputElement | null = currentTarget.querySelector('input[type="checkbox"]');

		if (checkbox) {
			checkbox.checked = !checkbox.checked;
		}
	};

	return (
		<section id="List">
			<div className="inner">
				<form id="ShoppingListForm">
					{data.length > 0 &&
						data.map((item) => (
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
								/>
							</div>
						))}
				</form>
			</div>
		</section>
	);
}
