export function masker(object: object, color: any): keyof typeof object {
	let _color = color as string;
	if (Object.keys(object).includes(_color)) return color as keyof typeof object;
	else return 'mask' as keyof typeof object;
}
