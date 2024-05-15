class Generator {
	classes: string[];

	constructor() {
		this.classes = [''];
	}

	safer(classes: string, color: string): string {
		// Split the input string by spaces to get individual classes
		const classList = classes.split(' ');
		// Iterate through each class
		for (const cls of classList) {
			// Check if the class contains the {color} placeholder
			if (cls.includes('{color}')) {
				// Replace the {color} placeholder with the provided color value
				const modifiedClass = cls.replace(/\{color\}/g, color);
				this.classes.push(modifiedClass);
			}
		}
		// Return the array of modified classes joined back into a string
		return this.classes.join(' ');
	}

	getClassArray() {
		return this.classes;
	}
}

const generator = new Generator();
export { generator };
