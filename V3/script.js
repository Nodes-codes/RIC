/* À Â à â É È Ê ê Î Ï î ï Û u Œ Ô œ ô Ô œ Ç ç 🏗🏥💡🏢⚕🏗🏥🏢🔬🏠🩺🌟🎯🚀🌍🤝🏠👥🌱⚡✉🕒❌✅📞📍 */
let making = "btn-all";

function restart_making_buttons(){
    const buttons = document.getElementsByClassName("making-type-button");
    for(button of buttons)
        button.style.backgroundColor = "#00000001";
}
function select_making_button(btn_id){
    const button = document.getElementById(btn_id);
    button.style.backgroundColor = "#f56900";
    button.style.transition = "0.5s";
}

function restart_making_type(){
    const containers = document.getElementsByClassName("making-container");
    for(container of containers)
        container.style.display = "none";
}

function switch_making_type(button, type){
    if(making==button)
        return
    restart_making_buttons();
    select_making_button(button);
    restart_making_type();
    const containers = document.getElementsByClassName(type);
    for(container of containers)
        container.style.display = "block";
    making = type;
}

function switch_making_all(){switch_making_type("btn-all", "making-container")}
function switch_making_btp(){switch_making_type("btn-btp", "btp-making-container")}
function switch_making_med(){switch_making_type("btn-med", "med-making-container")}
