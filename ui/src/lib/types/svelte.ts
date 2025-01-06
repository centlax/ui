export type SubComponent<T> = T & {
	new (options: { props: any }): any;
};
