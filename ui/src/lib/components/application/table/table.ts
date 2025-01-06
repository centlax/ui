import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Body from './elements/body.svelte';
import CGroup from './elements/c-group.svelte';
import Col from './elements/col.svelte';
import Foot from './elements/foot.svelte';
import HItem from './elements/h-item.svelte';
import Head from './elements/head.svelte';
import Item from './elements/item.svelte';
import Row from './elements/row.svelte';
import Title from './elements/title.svelte';

type TableType = typeof Root & {
    Body: SubComponent<typeof Body>;
    CGroup: SubComponent<typeof CGroup>;
    Col: SubComponent<typeof Col>;
    Foot: SubComponent<typeof Foot>;
    HItem: SubComponent<typeof HItem>;
    Head: SubComponent<typeof Head>;
    Item: SubComponent<typeof Item>;
    Row: SubComponent<typeof Row>;
    Title: SubComponent<typeof Title>;
};

const Table = Root as TableType;
Table.Body = Body as TableType['Body'];
Table.CGroup = CGroup as TableType['CGroup'];
Table.Col = Col as TableType['Col'];
Table.Foot = Foot as TableType['Foot'];
Table.HItem = HItem as TableType['HItem'];
Table.Head = Head as TableType['Head'];
Table.Item = Item as TableType['Item'];
Table.Row = Row as TableType['Row'];
Table.Title = Title as TableType['Title'];

export default Table;