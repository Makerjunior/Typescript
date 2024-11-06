**Funções em TypeScript**. As funções são um conceito central em qualquer linguagem de programação, e no TypeScript não é diferente. Vamos abordar desde as funções simples até as funções anônimas, passando por tipos de retorno, parâmetros e tipos de funções.

---

### **Aula: Funções em TypeScript**

#### **Objetivo da Aula:**
- Compreender como criar e usar funções em TypeScript.
- Aprender a tipar parâmetros e valores de retorno de funções.
- Explorar funções anônimas, funções de ordem superior e funções de callback.
- Estudar boas práticas e exemplos práticos.

---

### **1. Introdução às Funções em TypeScript**

Funções são blocos de código que podem ser reutilizados. Elas recebem entradas (parâmetros) e, com base nessas entradas, retornam um resultado (valor de retorno). O TypeScript é um superconjunto do JavaScript, então ele também oferece suporte completo para funções, mas com a vantagem de poder **tipar** os parâmetros e o valor de retorno.

#### **Sintaxe Básica de uma Função**

A sintaxe básica de uma função em TypeScript é semelhante à de JavaScript, com a adição de tipagem de parâmetros e do valor de retorno.

```typescript
function nomeDaFuncao(parametro1: tipo1, parametro2: tipo2): tipoDeRetorno {
    // corpo da função
    return resultado;
}
```

- **Parâmetros**: São valores de entrada da função. Podemos tipá-los usando a sintaxe `parametro: tipo`.
- **Tipo de Retorno**: Podemos definir o tipo do valor que a função retornará após a execução. É indicado após os parênteses dos parâmetros, com `: tipoDeRetorno`.
- **Corpo da Função**: Contém o código que será executado quando a função for chamada.

---

### **2. Funções Simples e Tipagem de Parâmetros**

#### **Exemplo 1: Função que soma dois números**

Vamos criar uma função simples que recebe dois números como parâmetros e retorna a soma deles.

```typescript
function somar(a: number, b: number): number {
    return a + b;
}

let resultado = somar(10, 20);
console.log(resultado);  // Saída: 30
```

- **Parâmetros `a` e `b`**: Ambos são do tipo `number`.
- **Valor de retorno**: A função retorna um valor do tipo `number`, que é a soma de `a` e `b`.

---

### **3. Funções sem Retorno (void)**

Às vezes, uma função não precisa retornar um valor, mas ainda assim pode realizar tarefas, como exibir algo na tela ou modificar variáveis externas. Nesse caso, usamos o tipo `void` para indicar que a função não retorna nada.

#### **Exemplo 2: Função que exibe uma mensagem**

```typescript
function exibirMensagem(mensagem: string): void {
    console.log(mensagem);
}

exibirMensagem("Olá, TypeScript!");  // Saída: Olá, TypeScript!
```

Aqui:
- A função `exibirMensagem` recebe um parâmetro do tipo `string` e não retorna nada, portanto o tipo de retorno é `void`.

---

### **4. Parâmetros Opcionais**

No TypeScript, você pode definir parâmetros **opcionais** nas funções. Para isso, basta adicionar um `?` após o nome do parâmetro. Isso significa que o parâmetro pode ser **não fornecido** quando a função for chamada.

#### **Exemplo 3: Função com parâmetro opcional**

```typescript
function saudacao(nome: string, saudacao: string = "Olá"): void {
    console.log(`${saudacao}, ${nome}!`);
}

saudacao("Maria");  // Saída: Olá, Maria!
saudacao("João", "Bom dia");  // Saída: Bom dia, João!
```

- O parâmetro `saudacao` tem um valor padrão de `"Olá"`. Se ele não for fornecido, o valor padrão será usado.

---

### **5. Funções Anônimas (Arrow Functions)**

As funções **anônimas** são funções sem um nome e geralmente são atribuídas a variáveis. Elas são bastante usadas em **funções de ordem superior** e **callbacks**.

#### **Exemplo 4: Função anônima simples**

Uma função anônima em TypeScript pode ser criada usando a **sintaxe de arrow function**:

```typescript
const multiplicar = (a: number, b: number): number => {
    return a * b;
};

console.log(multiplicar(3, 4));  // Saída: 12
```

- **`const multiplicar`**: A função é atribuída a uma variável `multiplicar`.
- **Sintaxe `=>`**: Usamos a sintaxe de **arrow function** (`=>`) para definir a função anônima.
- **Retorno**: O tipo de retorno é `number`, e o valor retornado é o produto de `a` e `b`.

#### **Exemplo 5: Função anônima como parâmetro**

As funções anônimas são muito comuns quando passamos uma função como argumento para outra função, por exemplo, no caso de **callbacks** ou **funções de ordem superior**.

```typescript
const numeros = [1, 2, 3, 4, 5];

const quadrado = numeros.map((num) => num * num);

console.log(quadrado);  // Saída: [1, 4, 9, 16, 25]
```

- A função `map` recebe uma **função anônima** como parâmetro, que aplica a operação de quadrado sobre cada elemento do array.

---

### **6. Funções de Ordem Superior**

Funções de ordem superior são aquelas que recebem outra função como argumento ou que retornam uma função. Em TypeScript, podemos usar funções de ordem superior como **callbacks** ou para criar funções personalizadas.

#### **Exemplo 6: Função de ordem superior**

Aqui, criaremos uma função `executarOperacao` que recebe duas funções como argumentos para aplicar operações matemáticas.

```typescript
function executarOperacao(a: number, b: number, operacao: (x: number, y: number) => number): number {
    return operacao(a, b);
}

const soma = (x: number, y: number): number => x + y;
const multiplicacao = (x: number, y: number): number => x * y;

console.log(executarOperacao(5, 3, soma));  // Saída: 8
console.log(executarOperacao(5, 3, multiplicacao));  // Saída: 15
```

Aqui:
- `executarOperacao` é uma função de ordem superior que recebe uma operação (função) e a executa sobre os parâmetros `a` e `b`.
- Passamos as funções `soma` e `multiplicacao` como parâmetros para `executarOperacao`.

---

### **7. Tipando Funções Anônimas e de Ordem Superior**

TypeScript permite que você tipifique tanto os parâmetros quanto o valor de retorno de funções anônimas. Isso é útil quando passamos funções como argumentos ou quando usamos funções como callbacks.

#### **Exemplo 7: Tipando função anônima como parâmetro**

```typescript
function executarCallback(func: (x: number, y: number) => number): number {
    return func(10, 20);
}

const resultado = executarCallback((a, b) => a - b);
console.log(resultado);  // Saída: -10
```

Aqui:
- A função `executarCallback` recebe um parâmetro `func` do tipo `(x: number, y: number) => number`, ou seja, uma função que recebe dois números e retorna um número.
- Passamos uma função anônima que subtrai os dois números.

---

### **8. Funções com Tipos Genéricos**

As funções genéricas são aquelas que podem trabalhar com diferentes tipos de dados. Podemos usar **tipos genéricos** para criar funções que funcionam com qualquer tipo, sem perder a segurança de tipo.

#### **Exemplo 8: Função genérica para exibir elementos**

```typescript
function exibirElemento<T>(item: T): void {
    console.log(item);
}

exibirElemento(123);         // Saída: 123
exibirElemento("Hello!");    // Saída: Hello!
exibirElemento([1, 2, 3]);   // Saída: [1, 2, 3]
```

- A função `exibirElemento` é genérica, podendo receber qualquer tipo `T`.
- Ao chamá-la, o TypeScript infere automaticamente o tipo baseado no argumento passado.

---

### **Conclusão da Aula**

- **Funções** são essenciais para a modularização de código e reutilização.
- O **TypeScript** adiciona **tipagem** nas funções, o que ajuda a garantir que as entradas e saídas das funções sejam corretas.
- Podemos **tipar parâmetros**, **valores de retorno**, usar **parâmetros opcionais**, e até mesmo criar **funções anônimas** (arrow functions) e **funções de ordem superior**.
- As **funções genéricas** permitem que criemos funções que podem ser aplicadas a diferentes tipos de dados, mantendo a segurança de tipo.

---

Isso conclui nossa aula sobre