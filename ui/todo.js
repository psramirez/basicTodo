iris.ui(function(self) {
    self.create = function() {
        self.tmplMode(self.APPEND);
        self.tmpl(iris.path.ui.todo.html);
        var todo = self.setting("todo");
        self.inflate(todo)
    }
}, iris.path.ui.todo.js);

