/* Dependencies */
import { useRef } from "react";

/* Types */
import { SidebarProps } from "types/components";

/* Styles */
import "@styles/components/sidebar.css";

/* Components */
import Button from "@components/shared/Button";

export default function Sidebar(props: SidebarProps) {
	const { setListItems } = props;

	const inputRef = useRef<HTMLInputElement>(null);

	const handleMarkAllCompleted = () => {
		setListItems((prevItems) => {
			return prevItems.map((prevItem) => {
				return { ...prevItem, checked: true };
			});
		});
	};

	const handleDeleteSelected = () => {
		setListItems((prevItems) => {
			return prevItems.filter((prevItem) => !prevItem.checked);
		});
	};

	const handleClearList = () => {
		setListItems([]);
	};

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (inputRef.current) {
			const newItem = inputRef.current.value;

			if (newItem) {
				setListItems((prevItems) => [
					...prevItems,
					{
						id: prevItems.length + 1,
						name: newItem,
						checked: false,
					},
				]);

				inputRef.current.value = "";
			}
		}
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
						<label
							className="sr-only"
							htmlFor="NewItem"
						>
							Add Item
						</label>
						<input
							ref={inputRef}
							id="NewItem"
							type="text"
							name="item"
							placeholder="Peanut butter..."
							required
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
					<Button
						variant="secondary"
						onClick={handleMarkAllCompleted}
					>
						Mark All Completed
					</Button>

					<Button
						variant="secondary"
						onClick={handleDeleteSelected}
					>
						Delete Selected
					</Button>

					<Button
						variant="danger"
						onClick={handleClearList}
					>
						Clear List
					</Button>
				</div>
			</div>
		</aside>
	);
}
