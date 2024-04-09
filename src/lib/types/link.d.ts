export interface Link {
	label?: string;
	href?: string;
	exact?: boolean;
	description?: string;
	class?: string;
	disabled?: boolean;
	icon?: string;
	children?: Link[];
}
