iris.ui(function(self) {
    self.create = function() {
        self.tmplMode(self.APPEND);
        self.tmpl(iris.path.ui.todo.html);
    }
}, iris.path.ui.todo.js);

