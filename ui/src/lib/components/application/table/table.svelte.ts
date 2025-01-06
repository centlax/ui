import { uify, type ToStrClass } from '$lib/utils/ui.js';
import { tableBody, type TableBodyProps } from './elements/body.js';
import { tableCaption, type TableCaptionProps } from './elements/title.js';
import { tableCol, type TableColProps } from './elements/col.js';
import { tableDCell, type TableDCellProps } from './elements/item.js';
import { tableFoot, type TableFootProps } from './elements/foot.js';
import { tableGCol, type TableGColProps } from './elements/c-group.js';
import { tableHCell, type TableHCellProps } from './elements/h-item.js';
import { tableHead, type TableHeadProps } from './elements/head.js';
import { tableRoot, type TableRootProps } from './elements/root.js';
import { tableRow, type TableRowProps } from './elements/row.js';

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

	function col(props: TableColProps): ToStrClass<TableColProps> {
		return { ...props, class: uify(tableCol, props.class, props.override) };
	}

	function gCol(props: TableGColProps): ToStrClass<TableGColProps> {
		return { ...props, class: uify(tableGCol, props.class, props.override) };
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
			dCell,
			col,
			gCol
		},
		states: {},
		options: {},
		helpers: {}
	};
}

export function useTable(
	opts: {
		body?: TableBodyProps;
		colGroup?: TableColProps;
		title?: TableCaptionProps;
	},
	ctx: boolean = false
) {}
