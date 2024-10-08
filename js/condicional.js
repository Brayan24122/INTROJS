function mayor_10_par()
{
    let miNumero = document.getElementById("valor").value;
    if((miNumero > 10) && ((miNumero % 2) == 0))
    {
        alert("El valor ingresado (" + miNumero + ") es mayor que 10 y ademas es PAR");
        document.getElementById("mensaje").innerHTML = "El valor ingresado (" + miNumero + ") es mayor que 10 y es PAR"
    }
    else if((miNumero > 10) && ((miNumero % 2 ) != 0))
    {
        alert("El valor ingresado(" + miNumero + ") es mayor que 10 y es IMPAR")
        document.getElementById("mensaje").innerHTML = "El valor ingresado(" + miNumero + ") es mayor que 10 y es IMPAR"
    }
    else
    {
        alert("El valor ingresado (" + miNumero + ") es menor o igual que 10");
        document.getElementById("mensaje").innerHTML = "El valor ingresado (" + miNumero + ") es menor o igual que 10"
    }
}
