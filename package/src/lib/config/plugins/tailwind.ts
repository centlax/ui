import { hexToRgb } from '../../utils/helpers.js';

// Define the type for the color object
interface ColorObject {
	[key: string]: string | ColorObject;
}

// Tailwind CSS plugin
export default function ({
	addBase,
	theme
}: {
	addBase: (baseStyles: Record<string, any>) => void;
	theme: (path: string) => any;
}) {
	function extractColorVars(colorObj: ColorObject, colorGroup = ''): Record<string, string> {
		return Object.keys(colorObj).reduce((vars, colorKey) => {
			const value = colorObj[colorKey];
			const cssVariable =
				colorKey === 'DEFAULT' ? `--color${colorGroup}` : `--color${colorGroup}-${colorKey}`;

			const newVars =
				typeof value === 'string'
					? { [cssVariable]: hexToRgb(value) }
					: extractColorVars(value, `-${colorKey}`);

			return { ...vars, ...newVars };
		}, {});
	}

	addBase({
		':root': extractColorVars(theme('colors'))
	});
}
