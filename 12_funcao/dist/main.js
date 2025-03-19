"use strict";
// Run: deno run src/main.ts
function alerta() {
    console.log('Programa em execução');
}
alerta();
function somar() {
    return 10 + 20;
}
let resultado = somar();
console.log(resultado);
function subtrair(a, b) {
    return a - b;
}
let resultado2 = subtrair(20, 10);
console.log(resultado2);
// Criando um array de objetos do tipo Pessoa
const pessoas = [
    { id: 1, nome: 'João', idade: 25 },
    { id: 2, nome: 'Maria', idade: 30 },
    { id: 3, nome: 'Pedro', idade: 22 },
];
// Função para buscar uma pessoa pelo id
function buscarPessoa(id) {
    return pessoas.find(pessoa => pessoa.id === id);
}
// Exemplo de uso
const pessoaBuscada = buscarPessoa(2);
if (pessoaBuscada) {
    console.log(`Pessoa encontrada: ${pessoaBuscada.nome}, ${pessoaBuscada.idade} anos.`);
}
else {
    console.log('Pessoa não encontrada.');
}
