//testando exercício com o sort()
let numeros = [230,21,892,3,1,5,6,20,18,9]
numeros.sort((a,b)=>a-b)
console.log(numeros)

let nomes = ["ziraldo","luis","brena","marcio","ana"]
nomes.sort()
console.log(nomes)
console.log(`O maior número é ${numeros[numeros.length -1]}`)
console.log(`O menor número é ${numeros[0]}`)

let soma = numeros.reduce((acumulador, valorAtual) => {return acumulador + valorAtual}, 0)
console.log(`A soma dos números é ${soma}`)