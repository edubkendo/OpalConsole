
tabId = chrome.devtools.inspectedWindow.tabId;
var err = document.getElementById('error');
editor = ace.edit("cc-editor");
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode("ace/mode/ruby");
editor.session.setUseSoftTabs(true);
editor.session.setTabSize(2);
editor.setShowPrintMargin(false);

compiled = ace.edit("cc-results");
compiled.setTheme("ace/theme/twilight");
var JavaScriptMode = ace.require("ace/mode/javascript").Mode
compiled.getSession().setMode(new JavaScriptMode);
compiled.session.setUseSoftTabs(true);
compiled.session.setTabSize(2);
compiled.setShowPrintMargin(false);


