chrome.devtools.panels.create(
    "OpalConsole",
    "badge.png",
    "opal-console.html",
    function cb(panel) {
        panel.onShown.addListener(function(win){ win.focus(); });
    }
);