iris.path = {
    screen: {
        welcome: {html: "screen/welcome.html", js: "screen/welcome.js"}
    }
};

$(document).ready(function() {
    iris.baseUri('./');
    iris.welcome(iris.path.screen.welcome.js);
});