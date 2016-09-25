console.log("Hello");
var tabs = [
            [$("#about_tab"), "about.html"],
            [$("#projects_tab"), "contact.html"],
            [$("#contact_tab"), "contact.html"],
            [$("#resume_tab"), "contact.html"]
        ];

var $content = $("#content");

$(document).ready(function(){;
    $content.load('about.html', function(){
        alert("loaded");
    });
});

for(var i = 0; i < tabs.length; i++){
    tabs[i][0].on("click", function(){
        $("#content").empty();
        $("#content").load("../pages/" + (tabs[i][1]));
    });
}
