# Jupyter Powertools

A [Visual Studio Code](https://code.visualstudio.com/) [extension](https://marketplace.visualstudio.com/items?itemName=donjayamanne.jupyterpowertools) that provides some useful features to enhance Jupyter Notebooks.

# Features
* Shrink traceback to see just the error.
* Cell magics (& code completion for cell magics)
* Generate slideshows and preview it
* Edit cell metadata (tags, slide)
* Display errors are diagnostic errors in the editor (avoids the need to try to map line numbers in output to lines in cell)
* Automatic syntax highlighting of cell magics (e.g. using `%%html` will provide syntax highlighting and language features for `HTML` in the cell)
* Toggle cell from Markdown to Cell with toolbar icon (and vice versa)

# Getting Started
* Please install VS Code Insiders (stable is not yet supported)
* Install this extension
* Launch VS Code with the following command line `code-insiders --enable-proposed-api=donjayamanne.jupyterpowertools`
* Open a Jupyter Notebook

## Settings
* Hide the status bar contributions
```json
  "jupyter.showCellAddTagsStatusBar": false,
  "jupyter.showCellSlidesStatusbar": false,
  "jupyter.showCellTagsStatusBar": false,
```
* Command used to convert Jupyter Notebooks into HTML slides
```json
"jupyter.nbConvertToSlidesCommand": "<path_to_ python_executable> -m jupyter nbconvert --to slides",
// or
"jupyter.nbConvertToSlidesCommand": "jupyter nbconvert --to slides",
```

## Shrinking Traceback
<img src=https://raw.githubusercontent.com/DonJayamanne/vscode-jupyterpowertools/master/images/errors.gif>

## Editing tags
<img src=https://raw.githubusercontent.com/DonJayamanne/vscode-jupyterpowertools/master/images/tags.gif>

## Converting cells
<img src=https://raw.githubusercontent.com/DonJayamanne/vscode-jupyterpowertools/master/images/convertCell.gif>

## Cell Magics
<img src=https://raw.githubusercontent.com/DonJayamanne/vscode-jupyterpowertools/master/images/cellMagics.gif>

## Convert notebook Slide Shows (reveal.js)
<img src=https://raw.githubusercontent.com/DonJayamanne/vscode-jupyterpowertools/master/images/slides.gif>

# Coming Soon
* Finer grained control of errors (see first n lines of traceback, useful if the traceback is 50lines long)
* Ability to nativate to the line when clicking on the error message
* Adding/Editing cell attachments
* View cell execution times
* Install missing dependencies
* Icon to create raw cells.
* Initialization cells
* Notifications when executions complete
* Managing Jupyter Hub

### Where is the source?
* Will be published soon.

# License

MIT
