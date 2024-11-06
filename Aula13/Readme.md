**Funções e Tipagem de Funções em TypeScript**. Funções são uma parte essencial de qualquer linguagem de programação, e em TypeScript, você pode usar tipos para definir parâmetros e valores de retorno, garantindo que suas funções sejam seguras e robustas. Além disso, o TypeScript oferece recursos como funções anônimas, funções de ordem superior, sobrecarga de funções e o uso de tipos genéricos em funções.

---

### **Aula: Funções e Tipagem de Funções em TypeScript**

#### **Objetivo da Aula:**
- Aprender a **tipar funções** em TypeScript, garantindo segurança e clareza.
- Explorar **funções anônimas**, **funções de ordem superior** e **sobrecarga de funções**.
- Entender como usar **tipos genéricos** em funções para aumentar a flexibilidade e reutilização do código.

---

### **1. Definindo Funções em TypeScript**

Em TypeScript, podemos definir funções de maneira muito semelhante ao JavaScript, mas com a vantagem de **tipar** seus parâmetros e valores de retorno.

#### **Sintaxe básica de funções com tipagem:**

```typescript
function nomeDaFuncao(parametro1: tipo1, parametro2: tipo2): tipoDeRetorno {
    // Corpo da função
    return valorDeRetorno;
}
```

- **`parametro1: tipo1`** e **`parametro2: tipo2`**: Aqui, estamos especificando o tipo dos parâmetros da função.
- **`tipoDeRetorno`**: Tipo do valor que a função vai retornar.

#### **Exemplo 1: Função Simples**

```typescript
function somar(a: number, b: number): number {
    return a + b;
}

let resultado = somar(10, 20);
console.log(resultado);  // Saída: 30
```

- A função `somar` recebe dois parâmetros do tipo `number` e retorna um `number`.

#### **Exemplo 2: Função com Parâmetros Opcionais**

Você pode usar o operador `?` para tornar parâmetros opcionais.

```typescript
function saudacao(nome: string, saudacao: string = "Olá"): string {
    return `${saudacao}, ${nome}!`;
}

console.log(saudacao("Carlos"));  // Saída: Olá, Carlos!
console.log(saudacao("Ana", "Bom dia"));  // Saída: Bom dia, Ana!
```

- O parâmetro `saudacao` é **opcional**, e se não for passado, será usado o valor padrão `"Olá"`.

---

### **2. Funções Anônimas e Arrow Functions**

Em TypeScript, você pode também trabalhar com **funções anônimas** e **arrow functions** (funções de seta), que são mais concisas.

#### **Exemplo 3: Função Anônima**

Função anônima é aquela sem nome, geralmente usada para atribuição a variáveis ou como argumento para outras funções.

```typescript
let multiplicar = function(a: number, b: number): number {
    return a * b;
};

console.log(multiplicar(4, 5));  // Saída: 20
```

#### **Exemplo 4: Arrow Function**

A **arrow function** é uma forma mais concisa de declarar funções. Além disso, ela mantém o contexto de `this` de onde foi definida.

```typescript
let dividir = (a: number, b: number): number => {
    return a / b;
};

console.log(dividir(10, 2));  // Saída: 5
```

Se a função tiver apenas uma expressão, você pode simplificar ainda mais:

```typescript
let subtrair = (a: number, b: number): number => a - b;

console.log(subtrair(10, 4));  // Saída: 6
```

- As **arrow functions** são especialmente úteis quando você trabalha com funções curtas e em contextos como callbacks, promises, ou como argumentos de outras funções.

---

### **3. Funções de Ordem Superior**

Uma **função de ordem superior** é uma função que pode receber uma função como argumento ou retornar uma função como resultado.

#### **Exemplo 5: Função que recebe outra função como argumento**

```typescript
function aplicarOperacao(a: number, b: number, operacao: (x: number, y: number) => number): number {
    return operacao(a, b);
}

let soma = (x: number, y: number) => x + y;
let resultado = aplicarOperacao(10, 5, soma);

console.log(resultado);  // Saída: 15
```

- A função `aplicarOperacao` recebe dois números e uma função `operacao`, que é executada dentro dela.

#### **Exemplo 6: Função que retorna outra função**

```typescript
function criarMultiplicador(fator: number) {
    return function(num: number): number {
        return num * fator;
    };
}

let multiplicarPor2 = criarMultiplicador(2);
let multiplicarPor3 = criarMultiplicador(3);

console.log(multiplicarPor2(5));  // Saída: 10
console.log(multiplicarPor3(5));  // Saída: 15
```

- A função `criarMultiplicador` retorna uma nova função que, quando chamada, multiplica o número fornecido pelo **fator** especificado. Isso é útil para **criar funções específicas dinamicamente**.

---

### **4. Sobrecarga de Funções (Function Overloading)**

Em TypeScript, você pode criar **sobrecarga de funções**, ou seja, definir várias assinaturas de função com o mesmo nome, mas com diferentes tipos de parâmetros ou diferentes números de parâmetros. O TypeScript resolve a sobrecarga com base no tipo de argumento passado para a função.

#### **Exemplo 7: Sobrecarga de Funções**

```typescript
function somar(a: number, b: number): number;
function somar(a: string, b: string): string;
function somar(a: any, b: any): any {
    return a + b;
}

console.log(somar(10, 20));  // Saída: 30
console.log(somar("Olá", " Mundo!"));  // Saída: Olá Mundo!
```

- O TypeScript permite que você defina várias assinaturas para a mesma função, com base no tipo de parâmetros. A função `somar` pode somar tanto números quanto strings.

#### **Exemplo 8: Sobrecarga com Diferentes Tipos de Parâmetros**

```typescript
function combinar(a: number, b: number): number;
function combinar(a: string, b: string): string;
function combinar(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;  // Soma de números
    } else if (typeof a === "string" && typeof b === "string") {
        return a + b;  // Concatenção de strings
    }
    throw new Error("Parâmetros devem ser ambos números ou ambos strings.");
}

console.log(combinar(1, 2));  // Saída: 3
console.log(combinar("Olá", " Mundo!"));  // Saída: Olá Mundo!
```

- No exemplo acima, a função `combinar` realiza uma operação diferente dependendo se os parâmetros são números ou strings. A sobrecarga ajuda a garantir que a função seja chamada corretamente, dependendo dos tipos dos parâmetros.

---

### **5. Tipos Genéricos em Funções**

Os **tipos genéricos** permitem criar funções que podem operar em **qualquer tipo**, proporcionando flexibilidade enquanto ainda mantém a segurança de tipo. Isso é útil quando você quer que a função aceite uma variedade de tipos diferentes, mas ainda assim quer garantir que os tipos sejam consistentes.

#### **Exemplo 9: Função Genérica**

```typescript
function identidade<T>(valor: T): T {
    return valor;
}

let numero = identidade(42);  // Tipo inferido como number
let texto = identidade("Olá!");  // Tipo inferido como string

console.log(numero);  // Saída: 42
console.log(texto);  // Saída: Olá!
```

- A função `identidade` usa o tipo genérico `T`, que é determinado automaticamente com base no valor passado para ela. O TypeScript infere o tipo corretamente, mas você também pode especificar o tipo explicitamente, se necessário.

#### **Exemplo 10: Função Genérica com Tipo Específico**

```typescript
function imprimirArray<T>(itens: T[]): void {
    itens.forEach(item => console.log(item));
}

imprimirArray([1, 2, 3]);  // Saída: 1 2 3
imprimirArray(["a", "b", "c"]);  // Saída: a b c
```

- A função `imprimirArray` aceita um array de qualquer tipo e imprime seus itens. O tipo do array é deduzido automaticamente a partir dos argumentos passados.

---

### **6. Conclusão da Aula**

Nesta aula, exploramos como trabalhar com funções em TypeScript de maneira mais eficiente e robusta, utilizando recursos como:

- **Tipagem de funções**: Definindo tipos para parâmetros e valores de retorno de funções.
- **Funções anônimas e arrow functions**