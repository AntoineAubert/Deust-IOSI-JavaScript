var n=parseInt(window.prompt('Entrer le nombre de nombres à entrer',''));
var valeur=parseInt(window.prompt('Valeur',''));
var min=valeur;
var max=valeur;
for(var i=1;i<n;i=i+1)
        {valeur=parseInt(window.prompt('Valeur?',''));
        if valeur<min)
                {min=valeur;
                }
        else if(variable>max)
                {max=valeur;
                }
        }
alert("Valeur max de votre serie = " +max)
alert("Valeur min de votre série = " +min)