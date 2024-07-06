export default function myPlugin() {
	const virtualModuleId = 'virtual:config';
	const resolvedVirtualModuleId = '\0' + virtualModuleId;

	return {
		name: 'config', // required, will show up in warnings and errors
		resolveId(id: string) {
			if (id === virtualModuleId) {
				return resolvedVirtualModuleId;
			}
		},
		load(id: string) {
			if (id === resolvedVirtualModuleId) {
				return `export const msg = "from virtual module"`;
			}
		}
	};
}
