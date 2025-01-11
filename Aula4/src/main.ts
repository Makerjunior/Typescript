// Laço `for` - Somando os números de um array
const numeros = [1, 2, 3, 4, 5];
let soma = 0;

// O laço `for` é ideal quando temos controle explícito sobre os índices 
// e o número de iterações.
// Aqui, estamos percorrendo o array e somando seus elementos.
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];  // Adiciona cada valor do array à variável soma
}

console.log("Soma usando 'for':", soma);  // Saída: 15


// Laço `for...in` - Iterando sobre as propriedades de um objeto
const pessoa = {
    nome: "Maria",
    idade: 25,
    cidade: "Rio de Janeiro"
};

// O `for...in` é ideal para iterar sobre as propriedades de um objeto.
// Aqui, estamos percorrendo as propriedades do objeto `pessoa` e imprimindo cada chave e seu valor.
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

// Saída:
// nome: Maria
// idade: 25
// cidade: Rio de Janeiro


// Laço `for...of` - Iterando sobre os valores de um array
// O `for...of` é o tipo mais indicado para percorrer diretamente os valores de um array.
for (let fruta of frutas) {
    console.log(fruta);  // Saída: maçã, banana, laranja
}

// Comparando os diferentes tipos de laços
const array = [10, 20, 30];

// Laço `for` - Quando precisamos de controle total sobre os índices.
console.log("Laço 'for':");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);  // Saída: 10, 20, 30
}

// Laço `for...in` (iterando sobre índices) - 
// Não recomendado para arrays, mas útil para objetos.
console.log("\nLaço 'for...in' (índices):");
for (let index in array) {
    console.log(`Índice ${index}: ${array[index]}`);  // Saída: Índice 0: 10, Índice 1: 20, Índice 2: 30
}

// Laço `for...of` - Ideal para percorrer os
// **valores** de arrays e outros objetos iteráveis.
console.log("\nLaço 'for...of' (valores):");
for (let value of array) {
    console.log(value);  // Saída: 10, 20, 30
}

