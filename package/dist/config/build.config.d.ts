export default function myPlugin(): {
    name: string;
    resolveId(id: string): string | undefined;
    load(id: string): "export const msg = \"from virtual module\"" | undefined;
};
