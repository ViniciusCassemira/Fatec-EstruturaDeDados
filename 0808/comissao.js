alert("Bem vindo ao: calcule sua comissão");
let qntMussarela = parseFloat(prompt("Digite a quantidade em quilos, de mussarela vendida:"));
let qntMortadela = parseFloat(prompt("Digite a quantidade em quilos, de mortadela:"));
let qntPresunto = parseFloat(prompt("Digite a quantidade em quilos, de presunto:"));
let qntPeru = parseFloat(prompt("Digite a quantidade em quilos, de peru:"));

let valorMus = qntMussarela * 22.6;
let valorMor = qntMortadela * 8.98;
let valorPre = qntPresunto * 6.76;
let valorPer = qntPeru * 12;

let comMus = valorMus * 0.05;
let comMor = valorMor * 0.10;
let comPre = valorPre * 0.09;
let comPer = valorPer * 0.12;

let comTotal = comMus + comMor + comPre + comPer;

alert("Sua comissão da venda de mussarela: " + comMus.toFixed(2));
alert("Sua comissão da venda de mortadela: " + comMor.toFixed(2));
alert("Sua comissão da venda de Presunto: " + comPre.toFixed(2));
alert("Sua comissão da venda de Peru: " + comPer.toFixed(2));

alert("Sua comissão total foi: " + comTotal.toFixed(2));