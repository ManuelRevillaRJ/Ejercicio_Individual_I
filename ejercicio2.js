

const funcionSuma = function(){
    const n1 = document.getElementById("n1")
    const n2 = document.getElementById("n2")
    const resultado = document.getElementById("resultado")

    let resul = n1 + n2
    let cadena_resul = resul.toString()

    resultado.innerText = cadena_resul
    

}
const funcionResta = function(){
    const n1 = document.getElementById("n1")
    const n2 = document.getElementById("n2")
    const resultado = document.getElementById("resultado")

    let resul = n1 - n2
    let cadena_resul = resul.toString()

    resultado.innerText = cadena_resul
    

}
const funcionDiv = function(){
    const n1 = document.getElementById("n1")
    const n2 = document.getElementById("n2")
    const resultado = document.getElementById("resultado")

    let resul = n1 / n2
    let cadena_resul = resul.toString()

    resultado.innerText = cadena_resul
    

}
const funcionMulti = function(){
    const n1 = document.getElementById("n1")
    const n2 = document.getElementById("n2")
    const resultado = document.getElementById("resultado")

    let resul = n1 * n2
    let cadena_resul = resul.toString()

    resultado.innerText = cadena_resul
    

}


const main = function (){
    const but_suma = document.getElementById("suma")
    const but_resta = document.getElementById("resta")
    const but_multi = document.getElementById("multi")
    const but_div = document.getElementById("div")
    
    but_suma.addEventListener("click", funcionSuma)


}

main()