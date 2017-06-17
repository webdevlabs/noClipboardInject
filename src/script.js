(function() {
    const excludes = ['www.facebook.com', 'github.com'];
    const disableSelections = function() {
        document.getSelection = window.getSelection = function() {
            return;
        };
    };
    if (!excludes.indexOf(location.host)) {
        let script = document.createElement("script");
        script.appendChild(document.createTextNode("(" + disableSelections + ")();"));
        (document.body || document.head || document.documentElement).appendChild(script);
    }
})();
