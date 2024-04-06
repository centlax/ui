type Fore =
	| 'rose'
	| 'pink'
	| 'red'
	| 'fuchsia'
	| 'purple'
	| 'violet'
	| 'indigo'
	| 'blue'
	| 'sky'
	| 'cyan'
	| 'teal'
	| 'emerald'
	| 'green'
	| 'lime'
	| 'yellow'
	| 'amber'
	| 'orange'
	| 'magnum';
type Back = 'cool' | 'slate' | 'zinc' | 'neutral' | 'stone' | 'ashed';

export interface Colors {
	fore: Fore;
	back: Back;
}
export interface ColorShade {
	0: string;
	50: string;
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
	800: string;
	900: string;
	950: string;
}

export interface ColorMode {
	light: string;
	dark: string;
}

export interface ColorPallet {
	rose: ColorShades;
	pink: ColorShades;
	fuchsia: ColorShades;
	purple: ColorShades;
	violet: ColorShades;
	indigo: ColorShades;
	blue: ColorShades;
	sky: ColorShades;
	cyan: ColorShades;
	teal: ColorShades;
	emerald: ColorShades;
	green: ColorShades;
	lime: ColorShades;
	yellow: ColorShades;
	amber: ColorShades;
	orange: ColorShades;
	red: ColorShades;
	slate: ColorShades;
	zinc: ColorShades;
	neutral: ColorShades;
	stone: ColorShades;
	cool: ColorShades;
	ashed: ColorShades;
	magnum: ColorShade;
	primary: ColorShade;
	gray: ColorShade;
	success: ColorShade;
	warning: ColorShade;
	danger: ColorShade;
}
