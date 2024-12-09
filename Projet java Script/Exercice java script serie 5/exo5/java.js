function vert(){
    document.getElementById("img_click").src='vert.jpg';
            }

function rouge(){
    document.getElementById("img_click").src='rouge.jpg';
            }
function changer(){
            var e=document.getElementById("fichier");
            if (e.value=="vert") {vert();}
            else {rouge();}
            }