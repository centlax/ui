/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { CamelToKebab, ToKebab } from '$lib/types/utils.js';
import type { CreateTooltipProps, TooltipElements } from '@melt-ui/svelte';
import type { TooltipContentPropsWithoutHTML, TooltipRootPropsWithoutHTML } from 'bits-ui';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'relative z-10'
	},
	trigger: {},
	arrow: {}
} satisfies Styles;
export const tooltip = styles;

/** Props */

type Props = SvelteHTMLElements['div'];
export interface TooltipContentProps extends Props {
	children?: Snippet;
}

/**
 * side
enum
See type definition
The preferred side of the anchor to render the floating element against when open. Will be reversed when collisions occur.

Default: bottom
sideOffset
number
The distance in pixels from the anchor to the floating element.

Default: 0
align
enum
See type definition
The preferred alignment of the anchor to render the floating element against when open. This may change when collisions occur.

Default: start
alignOffset
number
The distance in pixels from the anchor to the floating element.

Default: 0
arrowPadding
number
The amount in pixels of virtual padding around the viewport edges to check for overflow which will cause a collision.

Default: 0
avoidCollisions
boolean
When true, overrides the side and align options to prevent collisions with the boundary edges.

Default: true
collisionBoundary
union
See type definition
A boundary element or array of elements to check for collisions against.

Default:
 ——
undefined
collisionPadding
union
See type definition
The amount in pixels of virtual padding around the viewport edges to check for overflow which will cause a collision.

Default: 0
sticky
enum
See type definition
The sticky behavior on the align axis. 'partial' will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst 'always' will keep the content in the boundary regardless.

Default: partial
hideWhenDetached
boolean
When true, hides the content when it is detached from the DOM. This is useful for when you want to hide the content when the user scrolls away.

Default: true
updatePositionStrategy
enum
See type definition
The strategy to use when updating the position of the content. When 'optimized' the content will only be repositioned when the trigger is in the viewport. When 'always' the content will be repositioned whenever the position changes.

Default: optimized
strategy
enum
See type definition
The positioning strategy to use for the floating element. When 'fixed' the element will be positioned relative to the viewport. When 'absolute' the element will be positioned relative to the nearest positioned ancestor.

Default: fixed
preventScroll
boolean
When true, prevents the body from scrolling when the content is open. This is useful when you want to use the content as a modal.

Default: true
customAnchor
union
See type definition
Use an element other than the trigger to anchor the content to. If provided, the content will be anchored to the provided element instead of the trigger.

Default: null
onInteractOutside
function
See type definition
Callback fired when an outside interaction event occurs, which is a pointerdown event. You can call event.preventDefault() to prevent the default behavior of handling the outside interaction.

Default:
 ——
undefined
onFocusOutside
function
See type definition
Callback fired when focus leaves the dismissible layer. You can call event.preventDefault() to prevent the default behavior on focus leaving the layer.

Default:
 ——
undefined
interactOutsideBehavior
enum
See type definition
The behavior to use when an interaction occurs outside of the floating content. 'close' will close the content immediately. 'ignore' will prevent the content from closing. 'defer-otherwise-close' will defer to the parent element if it exists, otherwise it will close the content. 'defer-otherwise-ignore' will defer to the parent element if it exists, otherwise it will ignore the interaction.

Default: close
onEscapeKeydown
function
See type definition
Callback fired when an escape keydown event occurs in the floating content. You can call event.preventDefault() to prevent the default behavior of handling the escape keydown event.

Default:
 ——
undefined
escapeKeydownBehavior
enum
See type definition
The behavior to use when an escape keydown event occurs in the floating content. 'close' will close the content immediately. 'ignore' will prevent the content from closing. 'defer-otherwise-close' will defer to the parent element if it exists, otherwise it will close the content. 'defer-otherwise-ignore' will defer to the parent element if it exists, otherwise it will ignore the interaction.

Default: close
forceMount
boolean
Whether or not to forcefully mount the content. This is useful if you want to use Svelte transitions or another animation library for the content.

Default: false
dir
enum
See type definition
The reading direction of the app.

Default: ltr
ref
$bindable
HTMLDivElement
The underlying DOM element being rendered. You can bind to this to get a reference to the element.

Default:
 ——
undefined
children
Snippet
See type definition
The children content to render.

Default:
 ——
undefined
child
Snippet
See type definition
Use render delegation to render your own element. See Child Snippet docs for more information.

Default:
 ——
undefined
Data Attribute	Value	Description
data-state	
enum
See type definition
Whether the tooltip is open or closed.

data-tooltip-content
 */
