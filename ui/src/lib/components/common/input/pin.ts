/** Imports */
import type { CreatePinInputProps } from '@melt-ui/svelte';
import type { InputProps } from './input.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';

/** Props */
type Props = TransformKeysToKebab<CreatePinInputProps>
export interface InputPinProps extends InputProps {

}