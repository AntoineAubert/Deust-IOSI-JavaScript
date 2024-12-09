
    
    croissante=true;
decroissante=true;
var n=parseInt(window.prompt('Tapez le nombre de valeurs'));
var pred=parseInt(window.prompt('Tapez la 1ere valeur'));
i=1;
while (i<=n-1 && (croissante||decroissante))
        { var e=parseInt(window.prompt('Tapez une valeur'));
        if (pred<=e)
        {decroissante=false;
        }
        else { if (pred>=e)
                croissante=false;
                }
        pred=e;
        i=i+1;
        }
if (croissante) window.alert('Croissante');
else if (decroissante) window.alert ('Deroissante');
        else  window.alert('Ni croissante,ni decroissante');

 