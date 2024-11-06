**Manipulação de Tipos Avançados em TypeScript**. Em TypeScript, além de trabalhar com tipos primitivos e simples como `number`, `string`, e `boolean`, você também pode usar tipos mais avançados, como **tipos de união**, **tipos literais**, **tipos condicionais** e **tipos mapeados**. Vamos explorar essas técnicas que tornam seu código mais flexível e expressivo, ao mesmo tempo que mantém a segurança de tipo.

---

### **Aula: Manipulação de Tipos Avançados em TypeScript**

#### **Objetivo da Aula:**
- Explorar **tipos avançados** do TypeScript, como **tipos de união**, **tipos literais**, **tipos condicionais** e **tipos mapeados**.
- Aprender a criar **tipos flexíveis** e reutilizáveis, aproveitando ao máximo a tipagem estática do TypeScript.
- Demonstrar como usar esses tipos avançados para escrever código mais expressivo, flexível e seguro.

---

### **1. Tipos de União (Union Types)**

Os **tipos de união** permitem que uma variável possa ter mais de um tipo. Isso é útil quando você tem diferentes opções de tipos possíveis para uma variável ou parâmetro de uma função.

#### **Sintaxe:**

```typescript
let variavel: tipo1 | tipo2;
```

- A variável pode ser do **tipo1** ou **tipo2**, ou seja, ela pode aceitar valores de ambos os tipos.

#### **Exemplo 1: Tipos de União**

```typescript
let idade: number | string;

idade = 25;  // Válido
idade = "25 anos";  // Válido
// idade = true;  // Erro: 'boolean' não é atribuível a 'number | string'.
```

- Aqui, a variável `idade` pode ser **um número** ou uma **string**. Isso permite flexibilidade no tipo de dados, ao mesmo tempo que mantém a segurança de tipo.

#### **Exemplo 2: Função com Tipos de União**

```typescript
function exibirInformacao(info: string | number): void {
    if (typeof info === "string") {
        console.log(`Texto: ${info}`);
    } else {
        console.log(`Número: ${info}`);
    }
}

exibirInformacao(123);  // Saída: Número: 123
exibirInformacao("Olá, TypeScript!");  // Saída: Texto: Olá, TypeScript!
```

- A função `exibirInformacao` aceita tanto uma `string` quanto um `number`. Dentro da função, utilizamos **type guards** (`typeof info === "string"`) para verificar o tipo da variável em tempo de execução e tratar cada caso de maneira adequada.

---

### **2. Tipos Literais (Literal Types)**

Os **tipos literais** permitem que você restrinja uma variável a **um valor específico**. Isso é útil quando você quer garantir que uma variável tenha um valor fixo.

#### **Sintaxe:**

```typescript
let variavel: "valor1" | "valor2" | "valor3";
```

- A variável pode ser **"valor1"**, **"valor2"** ou **"valor3"**, mas não pode ser nenhum outro valor.

#### **Exemplo 3: Tipos Literais**

```typescript
let direcao: "esquerda" | "direita" | "em frente";

direcao = "esquerda";  // Válido
direcao = "direita";  // Válido
// direcao = "tras";  // Erro: 'tras' não é um valor válido.
```

- A variável `direcao` só pode ser um dos valores literais predefinidos: `"esquerda"`, `"direita"` ou `"em frente"`. Isso oferece mais controle sobre os valores possíveis.

#### **Exemplo 4: Função com Tipos Literais**

```typescript
function mover(direcao: "esquerda" | "direita"): void {
    if (direcao === "esquerda") {
        console.log("Movendo para a esquerda");
    } else {
        console.log("Movendo para a direita");
    }
}

mover("esquerda");  // Saída: Movendo para a esquerda
mover("direita");  // Saída: Movendo para a direita
// mover("cima");  // Erro: Argumento do tipo 'cima' não é atribuível ao parâmetro do tipo 'esquerda | direita'.
```

- A função `mover` recebe um argumento com valores literais `"esquerda"` ou `"direita"`. O uso de tipos literais garante que apenas valores válidos sejam passados como parâmetros.

---

### **3. Tipos Condicionais (Conditional Types)**

Os **tipos condicionais** permitem definir tipos com base em uma condição. A sintaxe é semelhante a uma expressão ternária, onde, dependendo do tipo de entrada, o tipo de saída será diferente.

#### **Sintaxe:**

```typescript
T extends U ? X : Y
```

- Se `T` for um subtipo de `U`, então o tipo será `X`. Caso contrário, o tipo será `Y`.

#### **Exemplo 5: Tipos Condicionais**

```typescript
type TipoSeNumero<T> = T extends number ? "É um número" : "Não é um número";

let tipo1: TipoSeNumero<number> = "É um número";  // Válido
let tipo2: TipoSeNumero<string> = "Não é um número";  // Válido
// let tipo3: TipoSeNumero<boolean> = "É um número";  // Erro: Tipo 'boolean' não é atribuível ao tipo 'Não é um número'.
```

- O tipo `TipoSeNumero<T>` usa um tipo condicional. Se `T` for `number`, o tipo será `"É um número"`. Caso contrário, o tipo será `"Não é um número"`.

#### **Exemplo 6: Condicional com Tipos Inferidos**

```typescript
type Exemplo<T> = T extends { nome: string } ? "Tem nome" : "Não tem nome";

let pessoa: Exemplo<{ nome: string }> = "Tem nome";  // Válido
let animal: Exemplo<{ idade: number }> = "Não tem nome";  // Válido
```

- Aqui, o tipo condicional verifica se o tipo `T` contém a propriedade `nome` e, com base nisso, define o tipo do valor como `"Tem nome"` ou `"Não tem nome"`.

---

### **4. Tipos Mapeados (Mapped Types)**

Os **tipos mapeados** permitem criar tipos novos com base em tipos existentes, aplicando transformações a cada propriedade de um tipo. Eles são úteis quando você quer manipular todas as propriedades de um tipo de maneira dinâmica.

#### **Sintaxe:**

```typescript
type TipoMapeado<T> = {
    [K in keyof T]: T[K];
};
```

- Aqui, para cada propriedade `K` do tipo `T`, o tipo `TipoMapeado` cria uma nova propriedade com o mesmo tipo que a propriedade original.

#### **Exemplo 7: Tipos Mapeados**

```typescript
type Pessoa = {
    nome: string;
    idade: number;
};

type PessoaSomenteStrings = {
    [K in keyof Pessoa]: string;
};

let pessoaString: PessoaSomenteStrings = {
    nome: "Carlos",
    idade: "30"  // A idade agora é uma string
};
```

- O tipo `PessoaSomenteStrings` transforma todas as propriedades de `Pessoa` em `string`.

#### **Exemplo 8: Tipos Mapeados com Funções**

Você pode aplicar transformações mais complexas usando mapeamento, como criar tipos em que todas as propriedades de um objeto sejam **opcionais**.

```typescript
type PessoaOpcional<T> = {
    [K in keyof T]?: T[K];
};

type PessoaCompleta = {
    nome: string;
    idade: number;
};

let pessoaOpcional: PessoaOpcional<PessoaCompleta> = {
    nome: "Ana"
};  // Válido, idade é opcional
```

- O tipo `PessoaOpcional` cria um novo tipo onde todas as propriedades de `PessoaCompleta` são agora opcionais, ou seja, podem ser omitidas.

---

### **5. Conclusão da Aula**

Nesta aula, exploramos os **tipos avançados** do TypeScript que permitem um controle ainda mais fino sobre os tipos de dados no seu código:

- **Tipos de União**: Permite que uma variável tenha mais de um tipo.
- **Tipos Literais**: Restrição de valores possíveis para uma variável ou parâmetro.
- **Tipos Condicionais**: Permitem alterar um tipo dependendo de uma condição, como uma expressão ternária.
- **Tipos Mapeados**: Facilita a transformação de tipos com base em tipos existentes, criando novos tipos dinamicamente.

Essas ferramentas tornam o TypeScript extremamente poderoso, permitindo que você escreva código mais seguro e expressivo, ao mesmo tempo que mantém a flexibilidade para lidar com diferentes cenários de dados.

---

### **Próximos Passos**

- Tente implementar **tipos condicionais** e **mapeados** em seus projetos para entender como eles podem melhorar a flexibilidade e a segurança de tipo no seu código.
- Explore mais sobre como o Type