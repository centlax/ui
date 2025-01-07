import { createColumnHelper } from '@tanstack/table-core';
export function buildTable() {}

type Person = {
	firstName: string;
	lastName: string;
	age: number;
	visits: number;
	status: string;
	progress: number;
};

const columnHelper = createColumnHelper<Person>();

const defaultColumns = [
	// Display Column
	columnHelper.display({
		id: 'actions'
	})
];
