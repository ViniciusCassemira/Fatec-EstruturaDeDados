//array

$teste10k = new MeuArray();

// for(let z = 0; z < 10000; z++){
//     $teste10k.adicionar(z);
// }

// console.log($teste10k.remover());

// console.log($teste10k.obterElemento(9999));

const start = Date.now();
const end = Date.now();
console.log(`Execution time: ${end - start} ms`);

//--------------------------------------------------

//fila

let teste10k = new Fila();

for(let z = 0; z < 10000; z++){
    teste10k.enqueue(z);
}

console.log(teste10k.size());

const start = performance.now(); 
const end = performance.now(); 
console.log(`Execution time: ${end - start} ms`);

//--------------------------------------------------
//Pilha
let teste10k = new MinhaPilha();

for(let z = 0; z < 10000; z++){
    teste10k.adicionar(z);
}

const start = performance.now(); 
console.log(teste10k.remover());
const end = performance.now(); 
console.log(`Execution time: ${end - start} ms`);

//----------------------------------------------
//linked list
let teste10k = new LinkedList();


for(let z = 0; z < 10000; z++){
    teste10k.insertAtEnd(z);
}
const start = performance.now(); 
// teste10k.find(9999);
console.log('d')
const end = performance.now(); 
console.log(`Execution time: ${end - start} ms`);

-----------------------------------
//linked list dupla
let teste10k = new DoublyLinkedList();


for(let z = 0; z < 10000; z++){
    teste10k.append(z);
}

// teste10k.find(9999);
const start = performance.now();
teste10k.removeAt(9999) 
const end = performance.now(); 
console.log(`Execution time: ${end - start} ms`);

//inserindo 10000 dados: 5.658ms
//buscando ultimo item: 28.046ms
//excluindo ultimo item: 27.714ms

//----------------------
//binary tree