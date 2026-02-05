document.getElementById("Boton").addEventListener("click", function() {
    
    let texto = document.getElementById("Texto").value;
    let telefono = document.getElementById("Telefono").value;
    let correo = document.getElementById("Correo").value;
    let contraseña = document.getElementById("Contraseña").value;
    let color = document.getElementById("Color").value;

    alert(texto + " " + telefono + " " + correo + " " + contraseña);

    console.log("Boton presionado. Texto ingresado: " + texto);
    console.log("Boton presionado. Telefono ingresado: " + telefono);
    console.log("Boton presionado. Correo ingresado: " + correo);
    console.log("Boton presionado. Contraseña ingresada: " + contraseña);
    

    document.getElementsByTagName("p")[0].innerText = "Has ingresado: " + texto;
    document.getElementsByTagName("p")[2].innerText = "El telefono ingresado es: " + telefono;
    document.getElementsByTagName("p")[3].innerText = "El correo ingresado es: " + correo;
    document.getElementsByTagName("p")[4].innerText = "La contraseña ingresada es: " + contraseña;
    document.getElementsByTagName("body")[0].style.backgroundColor = color;


});
