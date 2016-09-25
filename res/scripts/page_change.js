var tabs = [
            [$("#about_tab"), "about.html"],
            [$("#projects_tab"), "contact.html"],
            [$("#contact_tab"), "contact.html"],
            [$("#resume_tab"), "contact.html"]
        ];

var $content = $("#content");

$.get("about.html", function(data){
    alert(data);
});

$(document).ready(function(){
    $(".profile_pic").on("click", function(e){
        e.preventDefault();
        $content.load('about.html', function(){
            alert("loaded");
        });
    });
});

for(var i = 0; i < tabs.length; i++){
    tabs[i][0].on("click", function(){
        $("#content").empty();
        $("#content").load("../pages/" + (tabs[i][1]));
    });
}
