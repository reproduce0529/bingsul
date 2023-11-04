

function menu_list_open(){
    document.getElementById("header_navi_button_bar").style.display ="none"
    document.getElementById("header_navi_button_x").style.display ="block"
    document.querySelector(".header_modile_bg").style.display = "block"
}

function menu_list_close(){
    document.getElementById("header_navi_button_bar").style.display ="block"
    document.getElementById("header_navi_button_x").style.display ="none"
    document.querySelector(".header_modile_bg").style.display = "none"
}
