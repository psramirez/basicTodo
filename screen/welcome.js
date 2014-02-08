iris.screen(function (self) {  
  self.create = function() {    
    self.tmpl(iris.path.screen.welcome.html);
    
    self.get("add").click(function(){
        self.ui("todoList",iris.path.ui.todo.js,{text:self.get("todoText").val()});
    })
  };

},iris.path.screen.welcome.js);

