import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Close from './elements/close.svelte';
import Content from './elements/content.svelte';
import Trigger from './elements/trigger.svelte';

type ModalType = typeof Root & {
	Close: SubComponent<typeof Close>;
	Content: SubComponent<typeof Content>;
	Trigger: SubComponent<typeof Trigger>;
};

const Modal = Root as ModalType;
Modal.Close = Close as ModalType['Close'];
Modal.Content = Content as ModalType['Content'];
Modal.Trigger = Trigger as ModalType['Trigger'];

export default Modal;
