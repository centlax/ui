import { config } from '../../config/default.js';
export function useConfig() {
    const merged = config;
    return merged;
}
