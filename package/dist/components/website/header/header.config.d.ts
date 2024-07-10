import type { Props, DeepStyles } from '../../../types/utility.js';
import { drawer } from '../../application/drawer/drawer.config.js';
export declare const props: Props;
export declare const header: {
    drawer: DeepStyles<typeof drawer>;
    root: {
        layout: string;
        flex: string;
    };
    nav: {
        flex: string;
        west: {
            flex: string;
            typography: string;
        };
        center: {};
        east: {
            flex: string;
        };
    };
    mobile: {
        container: {
            spacing: string;
        };
        north: {
            flex: string;
        };
        center: {};
        south: {
            flex: string;
            spacing: string;
        };
    };
};
