import type { DeepStyles } from '../../../types/index.js';
import { type CreateAvatarProps } from '@melt-ui/svelte';
export declare const props: {
    class: string | DeepStyles<typeof avatar>;
    override: false;
    src: CreateAvatarProps["src"];
    alt: string;
    name: string;
    size: keyof typeof avatar.opt.size;
};
export declare const avatar: {
    root: {
        layout: string;
        border: string;
    };
    opt: {
        size: {
            xs: {
                sizing: string;
            };
            sm: {
                sizing: string;
            };
            md: {
                sizing: string;
            };
            lg: {
                sizing: string;
            };
            xl: {
                sizing: string;
            };
        };
    };
    img: {};
    fallback: {};
};
