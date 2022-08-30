let numeroA = Number(prompt("Digite um numero"))
let numeroB = Number(prompt("Digite outro numero"))

console.log("O primeiro numero é maior que o segundo?", (numeroA > numeroB))
console.log("O primeiro é igual que o segundo?", (numeroA === numeroB))
console.log("O primeiro numero é divisível pelo segundo?", ((numeroA % numeroB) === 0))
console.log("O segundo numero é divisível pelo primeiro?", ((numeroB % numeroA) === 0))