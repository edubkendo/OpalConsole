
function compileIt(){
    console.log("Compile It!")
    chrome.devtools.inspectedWindow.eval( compiled.session.getValue(), function(result, isException) {});
}

function update(){
    try {
        var compiledSource = Opal.Opal.$parse( editor.session.getValue(), {bare:true});
        compiled.session.setValue(compiledSource);
        err.className = 'is-hidden';
    } catch (error) {
        err.className = '';
        err.innerHTML = error.message;
    }
    localStorage.setItem("state" + tabId, editor.session.getValue());
}

schedule = function(fn, timeout) {
    if (fn.$timer) return;
    fn.$timer = setTimeout(function() {fn.$timer = null; fn()}, timeout || 10);
}

editor.on("change", function(e){
    schedule(update, 20);
});

var compileOptions = {
    name: "compileIt",
    exec: compileIt,
    bindKey: "Ctrl-Return|Command-Return|Shift-Return"
};

editor.commands.addCommand(compileOptions);
compiled.commands.addCommand(compileOptions);

document.getElementById('runcc').addEventListener('click', compileIt);

editor.session.setValue(localStorage.getItem("state" + tabId));
schedule(function(){ editor.focus() }, 20);
