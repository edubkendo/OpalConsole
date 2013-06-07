jQuery.ajax({
  url: "opal/opal.js",
  success: function( data ) {
    chrome.devtools.inspectedWindow.reload({ injectedScript: data });
  }
});