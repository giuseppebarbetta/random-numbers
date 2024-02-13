function generateNumber () {
    const inputMin = Math.ceil(document.getElementById("input-min").value)
    const inputMax = Math.floor(document.getElementById("input-max").value)

    if(inputMax <= inputMin) {
        alert(`O segundo número precisa ser maior que o primeiro!`)
    } else {
        const result = Math.floor(Math.random() * (inputMax - inputMin) + inputMin)
        const titleResult = document.querySelector(".titleResult")
        const valueResult = document.querySelector(".valueResult")

        titleResult.classList.remove("opacity")
        valueResult.classList.remove("opacity")
        valueResult.innerText = result

        console.log(`O número sorteado é: ${result}`)
    }
}