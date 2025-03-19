"use strict";
let num = 40.9;
let estado = true;
let nome = "Mente Maker";
let nomes = ["Junior", "Manu", "Rapha"];
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var Cores;
(function (Cores) {
    Cores["Vermelho"] = "#ff0000";
    Cores["Azul"] = "#0000ff";
    Cores["Amarelo"] = "ffff00";
})(Cores || (Cores = {}));
let vermelho = Cores.Vermelho;
let carros = { rodas: 4, ano: "1990", dono: "Junior" };
//console.log(carros);
let n1 = null;
let n2 = undefined;
let n3 = null;
let dados;
dados = 20;
//console.log(dados);
dados = "Junior";
//console.log(dados);
dados = false;
//console.log(dados);
let pessoa = ["Junior", 19];
//console.log(pessoa);
let value = 27;
//console.log(value);
value = "Mente Maker";
//console.log(value);
value = true;
//console.log(value);
function msg3(params) {
    // console.log(params);
}
//msg3("Mente Maker");
let v = 10;
v = "Junior";
// console.log(typeof v);
function Er(params) {
    throw new Error(params);
}
let p = { mapa: "Brasil", x: 10, y: 24 };
let car = { rodas: 4, ano: "1988", ligado: true };
let comb = { a: "Junior", b: 123 };
console.log(comb);
