import type { DeepStyles } from '../../../types/utility.js';
import type { CreateSelectProps } from '@melt-ui/svelte';
export declare const props: {
    class: string | DeepStyles<typeof selectMenu>;
    override: false;
    options: {
        [key: string]: any[];
    };
    placeholder: string;
    multiple: boolean;
    visible: boolean;
    selected: CreateSelectProps["selected"];
    float: CreateSelectProps["positioning"];
    required: boolean;
    disabled: boolean;
    arrow: number;
    scroll: boolean; /** Whether or not to prevent scrolling of the document when the select is open. */
    loop: boolean;
    outside: boolean; /** Whether or not to close the select when the user clicks outside of it. */
    overflow: boolean; /** Whether to prevent text selection overflowing the select when it is the top layer. */
    portal: CreateSelectProps["portal"];
    hover: boolean; /** When true, hovering an option will update the highlightedItem store, and when the cursor leaves an option the store will be set to null */
    open: boolean;
};
export declare const selectMenu: {
    root: {
        flex: string;
    };
    trigger: {
        layout: string;
        flex: string;
        sizing: string;
        spacing: string;
        interactive: string;
        border: string;
        background: string;
        typography: string;
        effect: string;
        chevron: {
            svg: string;
            sizing: string;
            motion: string;
        };
    };
    menu: {
        layout: string;
        flex: string;
        background: string;
        sizing: string;
        spacing: string;
        border: string;
        effect: string;
        group: {
            typography: string;
        };
        option: {
            layout: string;
            interactive: string;
            border: string;
            spacing: string;
            typography: string;
            background: string;
            effect: string;
            selected: {
                layout: string;
                typography: string;
                checkmark: {
                    flex: string;
                };
            };
        };
    };
};
