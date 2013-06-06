Run an Opal Console from the Chrome DevTools. View the compiled Javascript (and if the page contains a copy of "opal.js", execute it).

Due to opal's need to have a copy of "opal.js" on the page, and because the code is eval'd in the context of the page currently being inspected, I haven't been able to figure out how to make this execute on any random page. However, there is a simple workaround. Before using the OpalConsole, simply copypaste a copy of opal.js into the regular console, then everything will work. Or use it to debug and tinker with your web app's already using Opal. For a quick copy of opal.js, minified, grab it from [CDNJS](http://cdnjs.cloudflare.com/ajax/libs/opal/0.3.43/opal.min.js).

To install, simply open chrome://extensions and drag and drop the .crx file onto the page.

This tool was directly inspired by, and much of the code lifted from: [The CoffeeConsole](https://chrome.google.com/webstore/detail/coffeeconsole/ladbkfdlnaibelfidknofapbbdlhadfp).