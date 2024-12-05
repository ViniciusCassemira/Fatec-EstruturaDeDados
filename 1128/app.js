/*Dicionários*/
const apiResponse = {
    status: "success",
    data: {
        id: 1,
        nome: "Produto A",
        preco: 100
    }
};
console.log(apiResponse.data.nome); //Saída: Produto A

// Criando um dicionário com um objeto

const dicionario1 = {
    nome:"João",
    idade:25,
    profissao: "Engenheiro"
};

console.log(dicionario1.nome); //Saída: João
console.log(dicionario1["idade"]); //Saída: 25

const dicionario2 = {};

// Adicionando chaves e valores
dicionario2["cor"] = "Azul";
dicionario2.tamanho = "Grande";

console.log(dicionario2); // Saída:{ cor: 'Azul', tamanho: 'Grande' }

//Removendo uma chave
delete dicionario2.cor;
console.log(dicionario2); // Saída:{ tamanho: 'Grande' }

const dicionario3 = {
    fruta: "maçã",
    cor: "vermelho",
    preco: 5
};

//Usando o 'for...in'
for (const chave in dicionario3){
    console.log(`${chave}: ${dicionario3[chave]}`);
}

const dicionario4 = {
    nome: "João",
    idade: 25,
    cidade: "Rio de Janeiro"
};

//Obter todas as chaves
console.log(Object.keys(dicionario4)); //Saída: ["nome", "idade", "cidade"]

//Obter todos os valores
console.log(Object.values(dicionario4)); //Saída: ["João", "25", "Rio de Janeiro"]

//Obter pares chave-valor
Object.entries(dicionario4).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})

const dicionario5 = { fruta: "maçã" };

if ("fruta" in dicionario5) {
    console.log("Chave encontrada!");
} else {
    console.log("Chave não encontrada!");
}

const dados = { nome: "Carlos" };

if (!("idade" in dados)){
    dados["idade"] = 28;
}

console.log(dados); //Saída: { nome: "Carlos", idade: 28 }


/* MAP */

const mapa = new Map();

//Adicionando pares chave-valor
mapa.set("nome","Ana");
mapa.set("idade",30);

// Obtendo valores
console.log(mapa.get("nome")); // Sáida: ana

//Verificando se uma chave existe
console.log(mapa.has("idade")); // Saída: true

//Removendo uma chave
mapa.delete("idade");
console.log(mapa.has("idade")); // Saída: false

const mapa2 = new Map([
    ["chave1","valor1"],
    ["chave2","valor2"]
]);

// Iterando com for...of
for (const [chave, valor] of mapa) {
    console.log(`${chave}: ${valor}`);
}

/* Comparando object e map */

const object = {};
object["nome"] = "Carlos";
object[42] = "Número";  

//Acesso
console.log(object["nome"]); //Saída: Carlos
console.log(object["42"]); //Saída: Número (chaves numéricas convertidas para string)

//Iteração
for (const chave in object) {
    console.log(`${chave}: ${object[chave]}`)
}

/* ------------------------ */

const map = new Map();
map.set("nome", "Carlos");
map.set(42, "Número");


//Acesso
console.log(map.get("nome")); //Saída: Carlos
console.log(map.get(42)); //Saída: Número

//Iteração
for (const [chave, valor] of mapa){
    console.log(`${chave}: ${valor}`);
}

//Exercícios

//01
const ex01 = {};
ex01[100] = "João";
ex01[200] = "Pedro"; 
ex01[300] = "Luzia"; 

for(const chave in ex01){
    console.log(`${chave}: ${ex01[chave]}`);
}

// 02
function ex02(palavra){
    const resultado = {};

    for (let caractere of palavra){
        caractere = caractere.toLowerCase();
        if(caractere !== ' '){
            if(resultado[caractere]){
                resultado[caractere] ++;
            }else{
                resultado[caractere] = 1;
            }
        }
    }
    return resultado;
}

const ex02Palavra = "Vinícius o rei de Itaju";
console.log(ex02(ex02Palavra));

//03
const ex03 = {
    "001": { nome: "Mesa", preco: 200 },
    "002": { nome: "Colher", preco: 10 },
    "003": { nome: "Prato", preco: 30 },
    "004": { nome: "Tapete", preco: 55 }
  };
  
  for (const codigo in ex03) {
    const produto = ex03[codigo];
    if (produto.preco > 50) {
      console.log(`${produto.nome} - R$ ${produto.preco}`);
    }
}

//04
function ex04(dicionario){
    for (const chave in dicionario){
        if(dicionario[chave] === null || dicionario[chave] === undefined){
            delete dicionario[chave];
        }
    }
    return dicionario;
}

const obj04 = {
    a: "vinicius",
    b: null,
    c: 2001, 
    d: undefined 
};

console.log(ex04(obj04));

//05

function ex05(frase){
    const resultado = new Map();
    let palavras = frase.split(/\s+/);
    palavras.forEach(palavra => {
        palavra = palavra.toLowerCase();
        
        if (resultado.has(palavra)){
            resultado.set(palavra,resultado.get(palavra)+1);
        }else{
            resultado.set(palavra,1);
        }
    });

    return resultado;
}

const ex05frase = "eu sou o que eu quero que eu seja";
console.log(ex05(ex05frase));

//06
function ex06(palavra) {
    let maiusculas = 0;
    let minusculas = 0;
    for (let i = 0; i < palavra.length; i++) {
        let letra = palavra[i];

        if (/[a-zA-Z]/.test(letra)) {
            // Contabilizar maiúsculas e minúsculas
            if (letra === letra.toUpperCase()) {
                maiusculas++;
            } else {
                minusculas++;
            }
        }
    }

    return { maiusculas, minusculas };
}

const ex06palavra = "VINIcius";
console.log(ex06(ex06palavra));

//07

function ex07om(obj){
    const resultado = new Map();
    for(const chave in obj){
        resultado.set(chave, obj[chave]);
    }
    return resultado;
}

ex07obj = {
    nome: "Jonas",
    sobrenome: "Santos"
};

console.log(ex07om(ex07obj));


function ex07mo(map){
    const resultado = {};
    
    for (const [chave,valor] of map){
        resultado[chave] = valor;
    }
    
    return resultado;
}

ex07map = new Map();
ex07map.set("nome","Jonas");
ex07map.set("sobrenome","Santos");

console.log(ex07mo(ex07map))