alert("Especificaciones Hadware y Software")
function comprobar(){
    let producto, produccion, anteriores, actual, Modulo, Descripcion, Objetivo, Arquitectura, Servidorhadware, 
    Servidorsoftware, SOtros, Clientehadware, Clientesoftware, COtros, RequerimientosFuncionalesGenerales, 
    RequerimientosAdicionales, ClientesDelProducto
    
    producto = document.getElementById("producto").value
    document.getElementById("respuesta1").innerHTML="<h3> nombre del producto: "+producto+"</h3>" 
    console.log("producto")

    produccion = document.getElementById("produccion").value
    document.getElementById("respuesta2").innerHTML="<h3> Linea de produccion: "+produccion+"</h3>" 
    console.log("produccion")

    anteriores = document.getElementById("anteriores").value
    document.getElementById("respuesta3").innerHTML="<h3> Versiones anteriores: "+anteriores+"</h3>" 
    console.log("anteriores")

    actual = document.getElementById("actual").value
    document.getElementById("respuesta4").innerHTML="<h3> Version actual: "+actual+"</h3>" 
    console.log("actual")

    Modulo = document.getElementById("Modulo").value
    document.getElementById("respuesta5").innerHTML="<h3> Modulo: "+Modulo+"</h3>" 
    console.log("Modulo")

    Descripcion = document.getElementById("Descripcion").value
    document.getElementById("respuesta6").innerHTML="<h3> Descripcion general del producto: "+Descripcion+"</h3>" 
    console.log("Descripcion")

    Objetivo = document.getElementById("Objetivo").value
    document.getElementById("respuesta7").innerHTML="<h3> Objetivo: "+Objetivo+"</h3>" 
    console.log("Objetivo")

    Arquitectura = document.getElementById("Arquitectura").value
    document.getElementById("respuesta8").innerHTML="<h3> Arquitectura: "+Arquitectura+"</h3>" 
    console.log("Arquitectura")

    Servidorhadware = document.getElementById("Servidorhadware").value
    document.getElementById("respuesta9").innerHTML="<h3> Requerimentos del (Servidor) Hadware: "+Servidorhadware+"</h3>" 
    console.log("Servidorhadware")

    Servidorsoftware = document.getElementById("Servidorsoftware").value
    document.getElementById("respuesta10").innerHTML="<h3> Requerimentos del (Servidor) Software: "+Servidorsoftware+"</h3>" 
    console.log("Servidorsoftware")

    SOtros = document.getElementById("SOtros").value
    document.getElementById("respuesta11").innerHTML="<h3> Requerimentos del (Servidor) Otros: "+SOtros+"</h3>" 
    console.log("SOtros")

    Clientehadware = document.getElementById("Clientehadware").value
    document.getElementById("respuesta12").innerHTML="<h3> Requerimentos del (Cliente) Hadware: "+Clientehadware+"</h3>" 
    console.log("Clientehadware")

    Clientesoftware = document.getElementById("Clientesoftware").value
    document.getElementById("respuesta13").innerHTML="<h3> Requerimentos del (Cliente) Software: "+Clientesoftware+"</h3>" 
    console.log("SClientesoftware")

    COtros = document.getElementById("COtros").value
    document.getElementById("respuesta14").innerHTML="<h3> Requerimentos del (Cliente) Otros: "+COtros+"</h3>" 
    console.log("COtros")

    RequerimientosFuncionalesGenerales = document.getElementById("RequerimientosFuncionalesGenerales").value
    document.getElementById("respuesta15").innerHTML="<h3> Requerimientos funcionales generales: "+RequerimientosFuncionalesGenerales+"</h3>" 
    console.log("RequerimientosFuncionalesGenerales")

    RequerimientosAdicionales = document.getElementById("RequerimientosAdicionales").value
    document.getElementById("respuesta16").innerHTML="<h3> Requerimientos adicionales: "+RequerimientosAdicionales+"</h3>" 
    console.log("RequerimientosAdicionales")

    ClientesDelProducto = document.getElementById("ClientesDelProducto").value
    document.getElementById("respuesta17").innerHTML="<h3> Clientes del producto: "+ClientesDelProducto+"</h3>" 
    console.log("ClientesDelProducto")

}