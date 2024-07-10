import { useConfig } from './config.js';
/**
 * Defines options for a given component.
 * @param options Options for defining component properties and styles.
 *
 */
const config = useConfig();
export function useProps(component) {
    return config.components[component];
}
