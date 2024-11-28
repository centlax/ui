import type { PluginCreator } from 'tailwindcss/types/config.js';
import { hexToRgb } from '../../../utils/hex.js';

// Define the type for the color object
type ColorObject = {
	[key: string]: string | ColorObject;
};

// Tailwind CSS plugin
const colorize: PluginCreator = ({ addBase, theme }) => {
	function extractColorVars(colorObj: ColorObject, colorGroup = ''): Record<string, string> {
		return Object.keys(colorObj).reduce((vars, colorKey) => {
			const value = colorObj[colorKey];
			const cssVariable =
				colorKey === 'DEFAULT' ? `--color${colorGroup}` : `--color${colorGroup}-${colorKey}`;

			const newVars =
				typeof value === 'string'
					? { [cssVariable]: hexToRgb(value) }
					: extractColorVars(value as ColorObject, `-${colorKey}`);

			return { ...vars, ...newVars };
		}, {});
	}

	addBase({
		':root': extractColorVars(theme('colors') as ColorObject)
	});
};

export default colorize;
