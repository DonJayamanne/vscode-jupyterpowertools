# Jupyter Powertools

A [Visual Studio Code](https://code.visualstudio.com/) [extension](https://marketplace.visualstudio.com/items?itemName=donjayamanne.jupyterpowertools) that provides some useful features to enhance Jupyter Notebooks.

<img src=https://raw.githubusercontent.com/DonJayamanne/vscode-jupyterpowertools/main/images/main.gif>

# Features
* Shrink traceback to see just the error.
* Generate slideshows and preview it
* Edit cell metadata (tags, slide)
* Display errors are diagnostic errors in the editor (avoids the need to try to map line numbers in output to lines in cell)
* Automatic syntax highlighting of cell magics (e.g. using `%%html` will provide syntax highlighting and language features for `HTML` in the cell)
* Toggle cell from Markdown to Cell with toolbar icon (and vice versa)

## Settings
* Hide the status bar contributions
```json
  "jupyter.showCellAddTagsStatusBar": false,
  "jupyter.showCellSlidesStatusbar": false,
  "jupyter.showCellTagsStatusBar": false,
```

## Shrinking Traceback

# Coming Soon
* Finer grained control of errors (see first n lines of traceback, useful if the traceback is 50lines long)
* Ability to nativate to the line when clicking on the error message
* Adding/Editing cell attachments
* View cell execution times
* Install missing dependencies
* Icon to create raw cells.

### Where is the source?
* Will be published soon.

# License

MIT
