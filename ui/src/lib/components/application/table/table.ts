import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Body from './elements/body.svelte';
import CGroup from './elements/c-group.svelte';
import Col from './elements/col.svelte';
import Data from './elements/data.svelte';
import Foot from './elements/foot.svelte';
import HData from './elements/h-data.svelte';
import Head from './elements/head.svelte';
import Row from './elements/row.svelte';
import Title from './elements/title.svelte';

type TableType = typeof Root & {
    Body: SubComponent<typeof Body>;
    CGroup: SubComponent<typeof CGroup>;
    Col: SubComponent<typeof Col>;
    Data: SubComponent<typeof Data>;
    Foot: SubComponent<typeof Foot>;
    HData: SubComponent<typeof HData>;
    Head: SubComponent<typeof Head>;
    Row: SubComponent<typeof Row>;
    Title: SubComponent<typeof Title>;
};

const Table = Root as TableType;
Table.Body = Body as TableType['Body'];
Table.CGroup = CGroup as TableType['CGroup'];
Table.Col = Col as TableType['Col'];
Table.Data = Data as TableType['Data'];
Table.Foot = Foot as TableType['Foot'];
Table.HData = HData as TableType['HData'];
Table.Head = Head as TableType['Head'];
Table.Row = Row as TableType['Row'];
Table.Title = Title as TableType['Title'];

export default Table;