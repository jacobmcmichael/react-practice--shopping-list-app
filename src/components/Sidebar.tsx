/* Styles */
import "@styles/sidebar.css";

/* Components */
import Button from "@app/components/shared/Button";
import { useRef } from "react";

export default function Sidebar() {
	const newItemRef = useRef<HTMLInputElement>(null);

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (newItemRef.current) console.log(newItemRef.current.value);
	};

	return (
		<aside id="Sidebar">
			<div className="inner">
				<h2>Add an Item</h2>

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
			</div>
		</aside>
	);
}
