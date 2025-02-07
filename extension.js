const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { exec } = require('child_process');

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.html2htpy', function () {
        const editor = vscode.window.activeTextEditor;

        if (!editor) {
            vscode.window.showErrorMessage('No active text editor found!');
            return;
        }

        const selection = editor.selection;
        const selectedText = editor.document.getText(selection);
        if (!selectedText) {
            vscode.window.showErrorMessage('No text selected!');
            return;
        }

        const config = vscode.workspace.getConfiguration();
        const html2htpyPath = config.get('html2htpy.path', 'html2htpy');

        const tempDir = os.tmpdir();
        const tempFilePath = path.join(tempDir, 'htmlContent.html');

        fs.writeFile(tempFilePath, selectedText, (err) => {
            if (err) {
                vscode.window.showErrorMessage(`Error writing to temp file: ${err.message}`);
                return;
            }

            exec(`${html2htpyPath} ${tempFilePath}`, (error, stdout, stderr) => {
                if (error) {
                    vscode.window.showErrorMessage(`Error executing html2htpy: ${error.message}`);
                    return;
                }

                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                    vscode.window.showErrorMessage(`Error in html2htpy: ${stderr}`);
                    return;
                }

                console.log(`html2htpy Output: ${stdout}`);

                editor.edit(editBuilder => {
                    editBuilder.replace(selection, stdout);
                }).then(() => {
                    vscode.window.showInformationMessage('Content replaced with htpy format.');
                }).catch(err => {
                    vscode.window.showErrorMessage(`Error replacing text: ${err.message}`);
                });
            });
        });
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
