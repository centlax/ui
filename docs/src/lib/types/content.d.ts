/**
 * This is types for content
 */

// @interface Meta
interface Meta {
	/** The title of the content */
	title: string;
	/** The description of the content */
	description: string;
	/** The date when the content was created */
	date: Date;
	/** An array of authors for the content */
	authors: string[];
}

// @interface Content
export interface Content {
	/** The metadata for the content */
	meta: Meta;
}
