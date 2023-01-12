
function show(ul) {
    var a = ul.getElementsByTagName("li")[0];
    var b = ul.getElementsByTagName("li")[1];
    var c = ul.getElementsByTagName("li")[2];
    a.style.display = "block";
    b.style.display = "block";
    c.style.display = "block";
    
};
function hide(ul) {
    var a = ul.getElementsByTagName("li")[0];
    var b= ul.getElementsByTagName("li")[1];
    var c= ul.getElementsByTagName("li")[2];
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
}
