import type { GroupedEvents, MeltComponentEvents } from '@melt-ui/svelte/internal/types';

export const popoverEvents = {
	trigger: ['click', 'keydown'] as const,
	close: ['click', 'keydown'] as const
} as const;

export type PopoverEvents = GroupedEvents<typeof popoverEvents>;
export type PopoverComponentEvents = MeltComponentEvents<PopoverEvents>;
