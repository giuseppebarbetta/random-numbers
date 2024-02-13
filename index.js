function generateNumber () {
    const inputMin = Math.ceil(document.getElementById("input-min").value)
    const inputMax = Math.floor(document.getElementById("input-max").value)
    const result = Math.floor(Math.random() * (inputMax - inputMin) + inputMin)

    console.log(`O número sorteado é: ${result}`)
    alert(`O número sorteado é: ${result}`)
}