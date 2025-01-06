import type { TransitionParams } from '$lib/types/transition.js';

interface UseTransitionOptions<T> {
	in?: Partial<T>;
	out?: Partial<T>;
}

function set<T>(
	params?: TransitionParams<T>,
	options: UseTransitionOptions<T> | Partial<T> = {}
): {
	in: Partial<T>;
	out: Partial<T>;
} {
	// Type guard to check if options is structured with `in` and `out`
	const isStructuredOptions = (opt: unknown): opt is UseTransitionOptions<T> => {
		return typeof opt === 'object' && opt !== null && ('in' in opt || 'out' in opt);
	};

	// Initialize baseDefaults for flat objects
	const baseDefaults: Partial<T> = isStructuredOptions(options) ? {} : (options as Partial<T>);

	// Initialize `in` and `out` with spreaded values
	const inValues: Partial<T> = {
		...baseDefaults,
		...(isStructuredOptions(options) ? options.in : {})
	};
	const outValues: Partial<T> = {
		...baseDefaults,
		...(isStructuredOptions(options) ? options.out : {})
	};

	for (const key in params) {
		const value = params[key];

		if (
			value &&
			typeof value === 'object' &&
			'in' in (value as object) &&
			'out' in (value as object)
		) {
			// If value has `in` and `out` keys, distribute accordingly
			inValues[key] = (value as { in: T[typeof key] }).in;
			outValues[key] = (value as { out: T[typeof key] }).out;
		} else {
			// Otherwise, set the value for both `in` and `out`
			inValues[key] = value as T[typeof key];
			outValues[key] = value as T[typeof key];
		}
	}

	return {
		in: inValues,
		out: outValues
	};
}

export function useTransition() {
	return {
		set
	};
}
