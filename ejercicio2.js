
const validar = function(){

    const nombre = document.getElementById("input_nombre")
    const edad = document.getElementById("input_edad")
    const alerta = document.getElementById("texto_mensaje")
    const alerta_buena = document.getElementById("texto_mensaje_bueno")


    if(edad.value == "" || nombre.value == ""){
        alerta.setAttribute("class", "alert alert-danger")
        alerta.innerText = "Error, debe llenar los campos"
        return
    }else{
        alerta_buena.innerText = "Se guardó con éxito"
        alerta_buena.setAttribute("class", "alert alert-success")
        return
    }

}


const main = function (){
    const but = document.getElementById("but")
    but.addEventListener("click", validar)


}

main()