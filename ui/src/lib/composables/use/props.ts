import { useConfig } from '../use/config.js';

/**
 * Defines options for a given component.
 * @param options Options for defining component properties and styles.
 *
 */
const config = useConfig();
type Prop = keyof typeof config.props;
export function useProps<T extends Prop>(component: T) {
	return config.props[component];
}
