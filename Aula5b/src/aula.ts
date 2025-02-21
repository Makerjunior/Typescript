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
// console.log(a ** b); // Expoente -> 1000






// 2.2 Operadores de Atribuição
// Usados para atribuir valores a variáveis:

let x: number = 10;

console.log('Soma:', x += 5);  // x = x + 5 -> 15
console.log('Subtração:', x -= 2);  // x = x - 2 -> 13
console.log('Multiplicação:', x *= 3);  // x = x * 3 -> 39
console.log('Divisão:', x /= 3);  // x = x / 3 -> 13
console.log('Resto da divisão:', x %= 3); // x = x % 3 -> 1
console.log('Exponenciação:', x **= 2); // x = x ** 2 -> 1



// 2.3 Operadores de Comparacão
// Usados para comparar valores:

console.log('Igualdade sem tipo:', 10 == "10");  // true  (comparação sem verificar tipo)
console.log('Igualdade estrita:', 10 === "10"); // false (comparação estrita)
console.log('Diferença:', 10 != 5);     // true
console.log('Diferença estrita:', 10 !== "10"); // true
console.log('Maior que:', 10 > 5);      // true
console.log('Menor que:', 10 < 5);      // false
console.log('Maior ou igual:', 10 >= 10);    // true
console.log('Menor ou igual:', 10 <= 5);     // false



 // 2.4 Operadores Lógicos
 // Usados para operações booleanas:

console.log('AND (true && false):', true && false); // false
console.log('OR (true || false):', true || false);  // true
console.log('NOT (!true):', !true);                 // false



// 2.5 Operadores Bitwise (Bit a Bit)
// Usados para manipulação de bits:
//A comparação bitwise opera diretamente nos bits dos números em vez de compará-los como valores inteiros
console.log('AND Bitwise (5 & 1):', 5 & 1);  // 1  -> (101 & 001) = 001
console.log('OR Bitwise (5 | 1):', 5 | 1);   // 5  -> (101 | 001) = 101
console.log('XOR Bitwise (5 ^ 1):', 5 ^ 1);  // 4  -> (101 ^ 001) = 100
console.log('NOT Bitwise (~5):', ~5);        // -6 -> ~(00000101) = (11111010) = -6
console.log('Deslocamento para esquerda (5 << 1):', 5 << 1); // 10 -> (101 << 1) = 1010
console.log('Deslocamento para direita (5 >> 1):', 5 >> 1);   // 2  -> (101 >> 1) = 10
console.log('Deslocamento para direita sem sinal (5 >>> 1):', 5 >>> 1); // 2 -> (101 >>> 1) = 10

// Comparação Bitwise
console.log('Comparação Bitwise (5 & 3):', 5 & 3);  // 1  -> (101 & 011) = 001
console.log('Comparação Bitwise (5 | 3):', 5 | 3);  // 7  -> (101 | 011) = 111
console.log('Comparação Bitwise (5 ^ 3):', 5 ^ 3);  // 6  -> (101 ^ 011) = 110









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



