import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Body from './elements/body.svelte';
import Caption from './elements/caption.svelte';
import DCell from './elements/d-cell.svelte';
import Foot from './elements/foot.svelte';
import HCell from './elements/h-cell.svelte';
import Head from './elements/head.svelte';
import Row from './elements/row.svelte';

type TableType = typeof Root & {
	Body: SubComponent<typeof Body>;
	Caption: SubComponent<typeof Caption>;
	DCell: SubComponent<typeof DCell>;
	Foot: SubComponent<typeof Foot>;
	HCell: SubComponent<typeof HCell>;
	Head: SubComponent<typeof Head>;
	Row: SubComponent<typeof Row>;
};

const Table = Root as TableType;
Table.Body = Body as TableType['Body'];
Table.Caption = Caption as TableType['Caption'];
Table.DCell = DCell as TableType['DCell'];
Table.Foot = Foot as TableType['Foot'];
Table.HCell = HCell as TableType['HCell'];
Table.Head = Head as TableType['Head'];
Table.Row = Row as TableType['Row'];

export default Table;
