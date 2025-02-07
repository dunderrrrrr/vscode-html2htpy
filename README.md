# 🪄 html2htpy vscode extension

This VSCode extension allows you to convert selected HTML text into [htpy](https://htpy.dev/) format using the [html2htpy](https://htpy.dev/html2htpy/) command-line tool. Simply select the HTML code in the editor, run the command, and the extension will replace the selected text with the generated htpy code.

# Usage

Install extension from [vscode marketplace](https://marketplace.visualstudio.com/items?itemName=dunderrrrrr.html2htpy).

Select the HTML code in the editor, open vscode command palette and search for html2htpy and the extension will replace the selected text with the generated htpy code.

![demo](https://i.imgur.com/AOx63sx.gif)

# Settings

This extention expects `html2htpy` to be in your `$PATH` environment variable. If not, you can specify the full path to the executable in the `html2htpy.path` vscode setting.

Add this to your `settings.json`:

```json
{
  "html2htpy.path": "/path/to/html2htpy"
}
```

# Links

- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=dunderrrrrr.html2htpy)
- [htpy](https://htpy.dev/)
