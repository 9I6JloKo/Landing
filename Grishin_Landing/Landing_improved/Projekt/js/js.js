let scroll_change = 0;
let scroll_result = 0;
document.addEventListener("scroll", header_show);
function header_show() {
    let headerheight = document.getElementById("header").offsetHeight
    scroll_change = pageYOffset
    if (scroll_change < scroll_result) {
    document.getElementById("header").style.top = 0;
    } else {
    document.getElementById("header").style.top = "-" + (headerheight+1) + 'px';
    }
    scroll_result = scroll_change
}
function message_form(){
    if(document.getElementById("height_form").hidden == true){
        document.getElementById("height_form").hidden = false;
        document.getElementById("beginning").style.overflow = "hidden";
        document.getElementById("nav_arrow").style.display = "none";
    }else{
        document.getElementById("height_form").hidden = true;
        document.getElementById("beginning").style.overflow = "auto";
        document.getElementById("nav_arrow").style.display = "block";
    }
    /* console.log(document.getElementById("beginning").style.overflow); */
}
function nav_change_img_to(elem) {
    elem.style.opacity = 0;
}
function nav_change_img_from(elem) {
    elem.style.opacity = 1;
}