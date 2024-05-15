export function hexToRgb(hex: string) {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function (_, r, g, b) {
		return r + r + g + g + b + b;
	});

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
		: null;
}

export function stringfy(obj: Object): string {
	if (typeof obj === 'string') {
		return obj as string;
	}
	return Object.values(obj)
		.filter((value) => typeof value !== 'object') // Filter out nested objects
		.join(' ');
}
