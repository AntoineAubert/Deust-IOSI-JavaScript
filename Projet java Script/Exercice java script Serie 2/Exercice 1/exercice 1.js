var puissance=parseInt(window.prompt('Puissance?',''));
var vt=0;
var vr=0;
//vignette th?orique

var turbo=window.confirm('Turbo?');
if (turbo)
        {puissance=puissance+1;
        }



if (puissance<=7)
        { vt=puissance*50;
        }
        else        {vt=puissance*70;
                }

//vignette r?elle

var age=parseInt(window.prompt('Age?',''));
        if(age<=5)
                { vr=vt;
                }
        else if (age<10)
                {vr=vt/2;
                }

document.write('<b> Co vignette :   </b>' +vr);