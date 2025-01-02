import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Back from './elements/back.svelte';
import Item from './elements/item.svelte';
import Next from './elements/next.svelte';

type CarouselType = typeof Root & {
    Back: SubComponent<typeof Back>;
    Item: SubComponent<typeof Item>;
    Next: SubComponent<typeof Next>;
};

const Carousel = Root as CarouselType;
Carousel.Back = Back as CarouselType['Back'];
Carousel.Item = Item as CarouselType['Item'];
Carousel.Next = Next as CarouselType['Next'];

export default Carousel;