//Escreva uma função que recebe um array de números
//inteiros e retorne a soma dos númers pares do array

function somarPares(array){
    let soma = 0
    array.forEach(numero => {
        if(numero % 2 === 0){
            soma += numero
        }
    })
    return soma
}

lista = [1,2,3,4,5,6,10];
console.log(somarPares(lista));

//jeito diferente de fazer
[1,2,3,4,5,6,7,8].forEach(num => {
    // console.log(num)
    let soma = 0
    if(num % 2 === 0){
        soma += num
    }
    return suma
})