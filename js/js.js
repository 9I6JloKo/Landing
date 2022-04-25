let scroll_change = 0;
let scroll_result = 0;
document.addEventListener("scroll", header_show);
function header_show() {
    scroll_change = pageYOffset
    if (scroll_change < scroll_result) {
    document.getElementById("header").style.top = 0;
    } else {
    document.getElementById("header").style.top = -23 + 'vh';
    }
    scroll_result = scroll_change
}
function message_form(){
    if(document.getElementById("height_form").hidden == true){
        document.getElementById("height_form").hidden = false;
        document.getElementById("beginning").style.overflow = "hidden";
    }else{
        document.getElementById("height_form").hidden = true;
        document.getElementById("beginning").style.overflow = "auto";
    }
    /* console.log(document.getElementById("beginning").style.overflow); */
}