

const Agregar_Elemento = function (){
    const lista = document.getElementById("lista")
    const texto = document.getElementById("texto")
    const nuevoElemento = document.createElement("li")
    nuevoElemento.setAttribute("class", "nuevoElemento")
    nuevoElemento.innerText = texto.value

    lista.appendChild(nuevoElemento)

}

const mostrar_lista = function (){
    const lista = document.getElementById("lista")
    if(lista.style.display == "block"){
        lista.style.display = "none"
    }else{
        lista.style.display = "block"
    }
    
}

const limpiar_caja = function (){
    const texto = document.getElementById("texto")
    texto.value = ""
}


const main = function (){
    const but = document.getElementById("but")
    but.addEventListener("click", Agregar_Elemento )
    but.addEventListener("click", limpiar_caja )


    const menu = document.getElementById("menu")
    menu.addEventListener("click", mostrar_lista )
}

main()