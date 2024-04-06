import type { ColorPallet, Size } from '$lib/types/index.js';

export interface FieldSetContext {
	size: Size;
	color: keyof ColorPallet;
}
