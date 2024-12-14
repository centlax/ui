/* Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
/* style: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    pointerEvents: 'none',
    width: 'auto',
    height: `${props.height}px`,
    opacity: isLoading.value ? 1 : 0,
    background: error.value ? props.errorColor : props.color || undefined,
    backgroundSize: `${(100 / progress.value) * 100}% auto`,
    transform: `scaleX(${progress.value}%)`,
    transformOrigin: 'left',
    transition: 'transform 0.1s, height 0.4s, opacity 0.4s',
    zIndex: 999999,
  }, 
  
  <div 
  class="fixed top-0 left-0 right-0 pointer-events-none z-[999999] transition-transform duration-100 ease-linear opacity-0"
  style="
    --loading-height: var(--height, 4px); 
    --loading-color: var(--color, #0d6efd); 
    --loading-error-color: var(--error-color, #dc3545); 
    --loading-progress: var(--progress, 0);
    height: var(--loading-height); 
    opacity: var(--loading-opacity, 1); 
    background: var(--loading-background, var(--loading-color)); 
    background-size: calc(100% / var(--loading-progress, 1)) auto; 
    transform: scaleX(var(--loading-progress)); 
</div>
  */
const styles = {
	root: {
		layout: 'fixed top-0 right-0 left-0 z-[999]',
		interactive: 'pointer-events-none',
		sizing: 'w-auto h-[--ui-height]',
		transition: 'transition-transform duration-100 ease-linear',
		transform: 'origin-left',
		effect: 'opacity-0'
	}
} satisfies Styles;
export const loadbar = styles;

/* Props */
type Props = Omit<HTMLAttributes<HTMLSpanElement>, 'class'>;
export interface LoadbarProps extends BaseProps<typeof loadbar>, Props {
	color?: string;
	height?: number;
	duration?: number;
}
