/* Aula: Operadores do TypeScript

## 1. Introdução
Os operadores são fundamentais em qualquer linguagem de programação, incluindo TypeScript. Eles são usados para realizar operações matemáticas, lógicas, de comparação e outras manipulações em valores e variáveis.

*/
// 2. Tipos de Operadores

// 2.1 Operadores Aritméticos

// Usados para realizar operações matemáticas:

let a: number = 10;
let b: number = 3;

console.log(a + b); // Adição -> 13
console.log(a - b); // Subtração -> 7
console.log(a * b); // Multiplicação -> 30
console.log(a / b); // Divisão -> 3.333...
console.log(a % b); // Módulo -> 1
console.log(a ** b); // Expoente -> 1000

// 2.2 Operadores de Atribuição
// Usados para atribuir valores a variáveis:

let x: number = 10;
x += 5;  // x = x + 5 -> 15
x -= 2;  // x = x - 2 -> 13
x *= 3;  // x = x * 3 -> 39
x /= 3;  // x = x / 3 -> 13
x %= 4;  // x = x % 4 -> 1
x **= 2; // x = x ** 2 -> 1


// 2.3 Operadores de Comparacão
// Usados para comparar valores:

console.log(10 == "10");  // true  (comparação sem verificar tipo)
console.log(10 === "10"); // false (comparação estrita)
console.log(10 != 5);     // true
console.log(10 !== "10"); // true
console.log(10 > 5);      // true
console.log(10 < 5);      // false
console.log(10 >= 10);    // true
console.log(10 <= 5);     // false


 // 2.4 Operadores Lógicos
 // Usados para operações booleanas:

console.log(true && false); // false (AND)
console.log(true || false); // true  (OR)
console.log(!true);         // false (NOT)


// 2.5 Operadores Bitwise (Bit a Bit)
// Usados para manipulação de bits:
console.log(5 & 1);  // 1 (AND bitwise)
console.log(5 | 1);  // 5 (OR bitwise)
console.log(5 ^ 1);  // 4 (XOR bitwise)
console.log(~5);     // -6 (NOT bitwise)
console.log(5 << 1); // 10 (Deslocamento para esquerda)
console.log(5 >> 1); // 2  (Deslocamento para direita)
console.log(5 >>> 1);// 2  (Deslocamento para direita sem sinal)


// 2.6 Operadores Ternários
// Usado para expressões condicionais de forma simplificada:

let idade: number = 20;
let status: string = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(status); // Maior de idade


//  2.7 Operadores de String
// Usados para manipulação de strings:

let nome: string = "João";
let sobrenome: string = "Silva";
console.log(nome + " " + sobrenome); // João Silva (Concatenação)

// 2.8 Operadores TypeScript Específicos

// 2.8.1 Operador "typeof"
// Retorna o tipo de uma variável:

console.log(typeof 123);  // "number"
console.log(typeof "abc"); // "string"
console.log(typeof true); // "boolean"


// 2.8.2 Operador "instanceof"
// Verifica se um objeto pertence a uma determinada classe:
  
class Carro {}
let meuCarro = new Carro();
console.log(meuCarro instanceof Carro); // true


// 2.8.3 Operador "in"
// Verifica se uma propriedade existe em um objeto:

let pessoa = { nome: "Ana", idade: 25 };
console.log("nome" in pessoa);  // true
console.log("altura" in pessoa); // false


//  2.8.4 Operador "as" (Type Assertion)
// Usado para afirmar o tipo de uma variável:

let valor: unknown = "Hello";
let tamanho: number = (valor as string).length;
console.log(tamanho); // 5


// 2.8.5 Operador "??" (Nullish Coalescing)
// Retorna o valor da direita se o da esquerda for null ou undefined:

let usuario: string | null = null;
console.log(usuario ?? "Convidado"); // Convidado


// 2.8.6 Operador "?." (Optional Chaining)
// Evita erro ao acessar propriedades de objetos nulos ou indefinidos:

let obj: any = null;
console.log(obj?.propriedade); // undefined (sem erro)


// 3. Conclusão
// O TypeScript possui uma ampla gama de operadores que facilitam a manipulação de valores e estruturas de dados. Compreender esses operadores é essencial para escrever código eficiente e limpo.

