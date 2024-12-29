/* Styles */
import "@styles/components/sidebar.css";

/* Components */
import Button from "@components/shared/Button";
import { useRef } from "react";

const footerButtons = [
	{
		text: "Mark All Complete",
	},
	{
		text: "Mark All Incomplete",
	},
	{
		text: "Clear All",
	},
];

export default function Sidebar() {
	const newItemRef = useRef<HTMLInputElement>(null);

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (newItemRef.current) console.log(newItemRef.current.value);
	};

	return (
		<aside id="Sidebar">
			<div className="inner">
				<div className="header">
					<h2>Add an Item</h2>
				</div>

				<form
					id="AddItemForm"
					action="POST"
					onSubmit={handleFormSubmit}
				>
					<div className="form__group">
						<label htmlFor="NewItem"></label>
						<input
							ref={newItemRef}
							id="NewItem"
							type="text"
							name="item"
							placeholder="Milk"
							defaultValue="hello"
						/>
					</div>

					<Button
						type="submit"
						variant="primary"
					>
						Add to list
					</Button>
				</form>

				<div className="footer">
					{footerButtons.map((button, index) => (
						<Button
							key={index}
							variant="secondary"
						>
							{button.text}
						</Button>
					))}
				</div>
			</div>
		</aside>
	);
}
