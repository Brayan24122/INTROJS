function miFecha()
{
    document.getElementById("fecha").innerHTML = new Date
    ().toLocaleDateString('pt-pr', {weekday:"long",
    year:"numeric", month:"short", day:"numeric"})
}

function miFecha()
{
    document.getElementById("fecha").innerHTML = new Date
    ().toLocaleDateString('es-co', {weekday:"long",
    year:"numeric", month:"short", day:"numeric"})
}

function conversor_us()
{
    let dolar = 4041.84;
    //let cantidadCOP = prompt("ingresar un valor COP");
    let cantidadCOP = document.getElementById("valorcop").value;
    //alert("ingreso: " + cantidadCOP);
    let confirmar = confirm(" desea realizar la conversion ??")
    //alert("confirmation -->" + confirmar);
    let resultado = cantidadCOP/dolar;
    if(confirmar)
    {
    document.getElementById("dolares").innerHTML = 
    cantidadCOP + " COP son " + resultado +  "dolares";
    document.getElementById("resultado").value = resultado;
    }
}

function conversor_mex()
{
    let mex = 230;
    let cantidadCOP = 10000;
    let confirmar = confirm(" desea realizar la conversion ??")
    if(confirmar){ 
    document.getElementById("mex").innerHTML = 
    cantidadCOP + " COP son " + cantidadCOP/mex + "Pesos MEX";
    }
}

function clear_01()
{
    document.getElementById("dolares").innerHTML="";
    document.getElementById("valorcop").value="";
    document.getElementById("resultado").value="";
}