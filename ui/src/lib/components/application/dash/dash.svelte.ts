import { getContext, hasContext, setContext } from 'svelte';

export interface DashProps {
	height?: number;
	width?: number;
}

const key = Symbol('dash');
export function ctxDash() {
	function set(props: DashProps) {
		setContext<DashProps>(key, props);
	}
	function get(): DashProps {
		return getContext<DashProps>(key);
	}
	function has(): boolean {
		return hasContext(key);
	}

	return {
		set,
		get,
		has
	};
}
