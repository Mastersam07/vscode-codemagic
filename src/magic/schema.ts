import * as vscode from 'vscode';

export const CODEMAGIC_YAML_SCHEMA = 'codemagicschema';

export const registerYamlSchemaSupport = async () => {
    const ext = vscode.extensions.getExtension('redhat.vscode-yaml');

    if (!ext) {
        vscode.window.showWarningMessage(
            "Install 'YAML Support by Red Hat' via the Extensions pane in order to use this extension."
        );
        return undefined;
    }

    const yamlPlugin = await ext.activate();
    if (!yamlPlugin || !yamlPlugin.registerContributor) {
        vscode.window.showWarningMessage(
            "Please upgrade 'YAML Support by Red Hat' via the Extensions pane."
        );
        return undefined;
    }
    return yamlPlugin;
};

export function onRequestSchemaURI(resource: string): string | undefined {
    if (new RegExp(/codemagic.ya?ml/).test(resource)) {
        return `${CODEMAGIC_YAML_SCHEMA}://schema/codemagic`;
    }
    return undefined;
}


export async function getSchemaContent() {
    const response = JSON.stringify(require('../../schema/codemagic.json'));
    return response;
}