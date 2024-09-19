let cores = ['vermelho','verde','cinza']
console.log(cores)
console.table(cores)

cores.push('azul') //adiciona elemento no fim do array
console.log(cores)
console.table(cores)

cores.pop() //elimina o ultimo elemento do array
console.log(cores)
console.table(cores)

cores.shift() //elimina o primeiro elemento do array
console.log(cores)
console.table(cores)


cores.unshift(123) //adiciona o primeiro elemento do array
console.log(cores)
console.table(cores)

cores.push({"name": "edu"}) //adiciona objeto
console.log(cores)
console.table(cores)

cores.push([89,63,11,30])
console.log(cores[4])
console.table(cores)


//cores.forEach(cor => funcao())
cores.forEach(cor =>{
    console.log(cor);
})

//
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matriz[0][1]) //saída: 2 

//pilha -> LIFO(last in first out)

//pop() remove o último item
let teste = cores.pop();
console.log(teste)