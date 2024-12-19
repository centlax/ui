import { useUI } from '$lib/composables/ui.js';
import type { DeepStyles } from '$lib/types/ui.js';
import { cn, st } from '$lib/utils/wind.js';
import { tableBody, type TableBodyProps } from './elements/body.js';
import { tableCaption, type TableCaptionProps } from './elements/caption.js';
import { tableDCell, type TableDCellProps } from './elements/d-cell.js';
import { tableFoot, type TableFootProps } from './elements/foot.js';
import { tableHCell, type TableHCellProps } from './elements/h-cell.js';
import { tableHead, type TableHeadProps } from './elements/head.js';
import { tableRoot, type TableRootProps } from './elements/root.js';
import { tableRow, type TableRowProps } from './elements/row.js';

function uify<T extends Record<string, unknown>>(
	styles: T,
	oclass: string | undefined | DeepStyles<T>,
	override?: boolean
): string {
	const ui = useUI(styles, oclass, override);
	return cn(st(ui.root), ui.class) as string;
}
type ToStrClass<T> = Omit<T, 'class'> & { class: string };

export function createTable() {
	function root(props: TableRootProps): ToStrClass<TableRootProps> {
		return { ...props, class: uify(tableRoot, props.class, props.override) };
	}

	function caption(props: TableCaptionProps): ToStrClass<TableCaptionProps> {
		return { ...props, class: uify(tableCaption, props.class, props.override) };
	}

	function head(props: TableHeadProps): ToStrClass<TableHeadProps> {
		return { ...props, class: uify(tableHead, props.class, props.override) };
	}

	function body(props: TableBodyProps): ToStrClass<TableBodyProps> {
		return { ...props, class: uify(tableBody, props.class, props.override) };
	}

	function foot(props: TableFootProps): ToStrClass<TableFootProps> {
		return { ...props, class: uify(tableFoot, props.class, props.override) };
	}

	function row(props: TableRowProps): ToStrClass<TableRowProps> {
		return { ...props, class: uify(tableRow, props.class, props.override) };
	}

	function hCell(props: TableHCellProps): ToStrClass<TableHCellProps> {
		return { ...props, class: uify(tableHCell, props.class, props.override) };
	}

	function dCell(props: TableDCellProps): ToStrClass<TableDCellProps> {
		return { ...props, class: uify(tableDCell, props.class, props.override) };
	}
	return {
		elements: {
			root,
			caption,
			head,
			body,
			foot,
			row,
			hCell,
			dCell
		},
		states: {},
		options: {},
		helpers: {}
	};
}
