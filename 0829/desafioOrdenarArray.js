//ordene os 10 números de um array de maneira crescente
//mostre o maior número, o menor e a soma do array
let numeros = [230,21,892,3,1,5,6,20,18,9]
tamArray = numeros.length
let somaArray = 0
for(h = 0; h < tamArray; h++){
    somaArray += numeros[h]
}

for(let i = 0; i < tamArray-1; i++){
    for(let j = 0; j < tamArray - i -1; j++){
        if(numeros[j] > numeros[j+1]){
            let varTemp = numeros[j]
            numeros[j] = numeros[j+1]
            numeros[j+1] = varTemp
        }
    }
}

console.log(numeros)
console.log(`O maior número é ${numeros[tamArray-1]}`)
console.log(`O menor número é ${numeros[0]}`)
console.log(`A soma dos números é ${somaArray}`)