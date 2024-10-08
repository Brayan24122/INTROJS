function agregartxt()
{
   let miNombre = document.getElementById("nombre").value; 
   let miApellido = document.getElementById("apellido").value;
   document.getElementById("miareatxt").innerHTML += miNombre + " - " +
    miApellido + "\n";
}

function leerTextArea()
{
    lineas = new String (document.getElementById("miareatxt").value).split
    ("\n");
    for (nCiclos=0; nCiclos < lineas.length; nCiclos++)
    {
        alert(nCiclos + " - " + lineas[nCiclos]);
    }
}