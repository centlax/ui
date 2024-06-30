export type FrontMatter = {
	title: string;
	description: string;
	component: boolean;
	source: string;
};

export type DocFile = {
	default: import('svelte').ComponentType;
	metadata: FrontMatter;
};

export type DocResolver = () => Promise<DocFile>;
