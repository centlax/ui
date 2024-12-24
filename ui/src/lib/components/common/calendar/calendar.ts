import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Footer from './elements/footer.svelte';
import Header from './elements/header.svelte';
import Main from './elements/main.svelte';

type CalendarType = typeof Root & {
	Footer: SubComponent<typeof Footer>;
	Header: SubComponent<typeof Header>;
	Main: SubComponent<typeof Main>;
};

const Calendar = Root as CalendarType;
Calendar.Footer = Footer as CalendarType['Footer'];
Calendar.Header = Header as CalendarType['Header'];
Calendar.Main = Main as CalendarType['Main'];

export default Calendar;
