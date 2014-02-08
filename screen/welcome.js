iris.screen(function (self) {  
  self.create = function() {    
    self.tmpl(iris.path.screen.welcome.html);
    
    self.get("add").click(function(){
        var todo = {
            text:self.get("todoText").val(),
            status:'incomplete'
        };
        self.ui("todoList",iris.path.ui.todo.js,{todo:todo});
    })
  };

},iris.path.screen.welcome.js);

