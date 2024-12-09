function vert() {
    document.getElementById("img_click").src='vert.jpg'
}
function rouge(){
    document.getElementById("img_click").src='rouge.jpg'
}
function Changer(){
    e=document.getElementById("Choix");
    if (e.value=="vert"){vert();}
    else {rouge();}
}