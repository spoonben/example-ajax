(function() {
    window.formToJSON = function formToJSON(form) {
        var obj = {},
            elements = form.querySelectorAll('input', 'select', 'textarea');
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                if (element.name) {
                    obj[element.name] = element.value;
                }
            }
        return obj;
    }
})();