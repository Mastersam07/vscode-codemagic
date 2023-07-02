import * as vscode from 'vscode';
import {
	registerYamlSchemaSupport,
	getSchemaContent,
	onRequestSchemaURI,
	CODEMAGIC_YAML_SCHEMA
} from './magic/schema';

export async function activate(context: vscode.ExtensionContext) {

	// Get the current configuration
	const config = vscode.workspace.getConfiguration();

	// Set the value for all configuration targets
	const targets = [
	  vscode.ConfigurationTarget.Global,
	  vscode.ConfigurationTarget.Workspace,
	  vscode.ConfigurationTarget.WorkspaceFolder
	];
  
	for (const target of targets) {
	  config.update('yaml.schemaStore.enable', false, target);
	}

	const yamlApi = await registerYamlSchemaSupport();
	if (yamlApi) {
		const resolveSchemaContent = await getSchemaContent();
		yamlApi.registerContributor(
			CODEMAGIC_YAML_SCHEMA,
			onRequestSchemaURI,
			() => resolveSchemaContent
		);
	}
}

// This method is called when your extension is deactivated
export function deactivate() { 
	// Get the current configuration
	const config = vscode.workspace.getConfiguration();

	// Set the value for all configuration targets
	const targets = [
	  vscode.ConfigurationTarget.Global,
	  vscode.ConfigurationTarget.Workspace,
	  vscode.ConfigurationTarget.WorkspaceFolder
	];
  
	for (const target of targets) {
	  config.update('yaml.schemaStore.enable', true, target);
	}
}
