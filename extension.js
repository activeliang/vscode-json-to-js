const vscode = require('vscode');
const javascriptStringify = require("javascript-stringify")

const { window, Position, Range, Selection } = vscode;

function processSelection(editor, doc, sel, formatCB, argsCB) {
    const replaceRanges = [];
    editor.edit(function (edit) {
        // itterate through the selections
        for (var x = 0; x < sel.length; x++) {
            var txt = JSON.parse(doc.getText(new Range(sel[x].start, sel[x].end)));
            if (argsCB.length > 0) {
                // in the case of figlet the params are test to change and font so this is hard coded
                // the idea of the array of parameters is to allow for a more general approach in the future
                txt = formatCB.apply(this, [txt, ...argsCB]);
            }
            else {
                txt = formatCB(txt, ...argsCB);
            }

            //replace the txt in the current select and work out any range adjustments
            edit.replace(sel[x], txt);
            var startPos = new Position(sel[x].start.line, sel[x].start.character);
            var endPos = new Position(sel[x].start.line + txt.split(/\r\n|\r|\n/).length - 1, sel[x].start.character + txt.length);
            replaceRanges.push(new Selection(startPos, endPos));
        }
    });
    editor.selections = replaceRanges;
}

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.jsonToJs', () => {
        if (!vscode.window.activeTextEditor) {
            vscode.window.showInformationMessage('Open a file first to manipulate text selections');
            return;
        }

        var editor = window.activeTextEditor;
        var document = editor.document;
        var sel = editor.selections;

        processSelection(editor, document, sel, javascriptStringify, [null, 2]);
    });

    context.subscriptions.push(disposable);
}

function deactivate() { }

exports.activate = activate;
exports.deactivate = deactivate;
