(function() {
    var disableSelections = function() {
        document.getSelection = window.getSelection = function() {
            return { isCollapsed: true };
        };
    };
    var script = document.createElement("script");
    script.appendChild(document.createTextNode("(" + disableSelections + ")();"));
    (document.body || document.head || document.documentElement).appendChild(script);
})();