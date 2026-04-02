import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.lm.registerMcpServerDefinitionProvider('bootglyDocs', {
      provideMcpServerDefinitions: async () => {
        return [
          new vscode.McpHttpServerDefinition(
            'bootgly-docs',
            vscode.Uri.parse('https://docs.bootgly.com/mcp')
          )
        ];
      }
    })
  );
}

export function deactivate() {}
