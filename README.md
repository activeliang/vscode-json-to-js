# json-to-js Enhanced with Menu

This extension is a fork of the original [json-to-js](<original_extension_link_here>) with added menu bar options for enhanced usability.

## Added Features

- Menu option

# JSON to JS converter

> Converts a JSON string into a valid JavaScript object

## Using

Select a JSON string in the editor and in press `Ctrl+Shift+J` _(`⌘+⇧+J` on Mac OS)_ or open the command pallete `Ctrl+Shift+P` _(`⌘+⇧+P` on Mac OS)_ and type `Convert JSON into JS object`.

It is especially useful when you're using a linter with strict rules on code styling. _eg.: ESLint + eslint-config-airbnb_

### Before (JSON) x After (JS object)
![image](https://user-images.githubusercontent.com/484549/46237560-a1df3400-c35b-11e8-8ccc-87555f5d5f43.png)


### Options
You can customize the options in _Settings_ / _Extensions_ / _JSON to JS converter_.
Below are the available options: _(requires VSCode restart)_

![image](https://user-images.githubusercontent.com/484549/47102922-61fdc500-d214-11e8-9923-7e092a1e2c53.png)

#### Add Trailing Commas
Adds a trailing comma in the end of every object or array keys. Makes the result object source control friendly.
_Default_: `True`

#### Identation Size
Sets the number of spaces used in indentation.
_Default_: `2`

### Keybinds
The default keybind to convert JSON strings into JS objects is `Ctrl+Shift+J` _(`⌘+⇧+J` on Mac OS)_


## Release Notes

### 0.2.0
-- Option to add trailing commas
-- Customizable indentation size
-- Default keybing

### 0.1.1
-- Stability improvements

### 0.1.0
-- Initial Release
