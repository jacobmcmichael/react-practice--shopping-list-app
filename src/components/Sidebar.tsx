/* Dependencies */
import { useRef } from "react";

/* Types */
import { SidebarProps } from "types/components";

/* Styles */
import "@styles/components/sidebar.css";

/* Components */
import Button from "@components/shared/Button";

/* Constants */
import { sidebarFooterButtons } from "@constants/components";

export default function Sidebar(props: SidebarProps) {
	const { handleAddItem } = props;

	const inputRef = useRef<HTMLInputElement>(null);

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (inputRef.current) handleAddItem({ id: 0, name: inputRef.current.value, checked: false });
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
							ref={inputRef}
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
					{sidebarFooterButtons.map((button, index) => (
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
