# 🪄 html2htpy vscode extension

This VSCode extension allows you to convert selected HTML text into [htpy](https://htpy.dev/) format using the [html2htpy](https://htpy.dev/html2htpy/) command-line tool. Simply select the HTML code in the editor, run the command, and the extension will replace the selected text with the generated htpy code.

# Usage

Install extension from vscode marketplace.

Select the HTML code in the editor, open vscode command palette and search for html2htpy and the extension will replace the selected text with the generated htpy code.

# Settings

This extention expects `html2htpy` to be in your `$PATH` environment variable. If not, you can specify the full path to the executable in the `html2htpy.path` vscode setting.

Add this to your `settings.json`:

```json
{
  "html2htpy.path": "/path/to/html2htpy"
}
```
