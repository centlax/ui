import { hexToRgb } from '../../utils/helpers.js';
// Tailwind CSS plugin
export default function ({ addBase, theme }) {
    function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
            const value = colorObj[colorKey];
            const cssVariable = colorKey === 'DEFAULT' ? `--color${colorGroup}` : `--color${colorGroup}-${colorKey}`;
            const newVars = typeof value === 'string'
                ? { [cssVariable]: hexToRgb(value) }
                : extractColorVars(value, `-${colorKey}`);
            return { ...vars, ...newVars };
        }, {});
    }
    addBase({
        ':root': extractColorVars(theme('colors'))
    });
}
