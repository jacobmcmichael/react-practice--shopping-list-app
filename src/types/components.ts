import { ButtonHTMLAttributes } from "react";

export type ListItemType = {
	id: number;
	name: string;
	checked: boolean;
};

export interface ListItemProps {
	item: ListItemType;
	setListItems: React.Dispatch<React.SetStateAction<ListItemType[]>>;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: "primary" | "secondary";
}
