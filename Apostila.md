# Vamos aprender TypeScript  
## Sumário
#####  Introdução
#####  O Compilador TypeScript
##### Tipos em TypeScript
##### Tipos Avançados em TypeScript
##### IF, ELSE e Operador Ternário
##### Switch case
##### Loop for e suas variações
##### O Laço `while` e Suas Variações
##### Operadores do TypeScript
##### Funções em TypeScript



### **Aula 1: Introdução ao TypeScript**
#### **1. O que é o TypeScript?**

-  **Definição:**

TypeScript é uma linguagem de programação desenvolvida pela Microsoft que é um superset de JavaScript. Ou seja, todo código JavaScript válido também é válido em TypeScript, mas TypeScript adiciona funcionalidades extras, como a tipagem estática.

-  **Por que usar TypeScript?**

-  **Tipagem Estática:** O TypeScript permite que você defina tipos para suas variáveis, parâmetros de função, e objetos, ajudando a prevenir erros antes da execução.

-  **Segurança:** Com a verificação de tipos em tempo de compilação, fica mais fácil detectar erros que poderiam ser difíceis de encontrar em JavaScript.

-  **Escalabilidade:** Em projetos grandes, o TypeScript oferece mais controle sobre o código, o que torna a manutenção e evolução mais fáceis.

-  **Ferramentas de Desenvolvimento:** O TypeScript oferece suporte aprimorado para IDEs (como o Visual Studio Code), oferecendo autocompletar, refatoração e navegação no código mais inteligente.

-  **Diferença entre JavaScript e TypeScript:**

-  **JavaScript:** Linguagem de tipagem dinâmica, onde você não define tipos e o código é interpretado diretamente pelo navegador ou Node.js.

-  **TypeScript:** Linguagem de tipagem estática, onde você define tipos e o código é transpilado (convertido) para JavaScript, que pode ser executado no navegador ou em servidores Node.js.

  

#### **2. Vantagens do TypeScript**

-  **Erro em Tempo de Compilação:** O TypeScript ajuda a encontrar erros antes de rodar o código.

-  **IntelliSense e Auto-Completar:** Com as definições de tipo, as ferramentas de desenvolvimento podem fornecer uma experiência melhor de auto-completar e sugestões enquanto você codifica.

-  **Facilidade de Refatoração:** O TypeScript facilita mudanças no código, uma vez que a tipagem estática ajuda a identificar rapidamente onde o código depende de determinadas estruturas.

-  **Documentação Implícita:** Como você define tipos, isso serve como uma documentação para o código, tornando-o mais fácil de entender para outros desenvolvedores.

  

#### **3. Instalando e Configurando o TypeScript**
Agora, vamos aprender a instalar o TypeScript em nosso ambiente local.
**Passo 1: Instalar o Node.js e o npm**

Primeiro, certifique-se de ter o **Node.js** instalado no seu sistema, pois o TypeScript será instalado via npm (gerenciador de pacotes do Node). Você pode baixar o Node.js [aqui](https://nodejs.org).

Após instalar o Node.js, verifique se a instalação foi bem-sucedida executando os seguintes comandos no terminal:
```bash

node  -v

npm  -v

```

 **Passo 2: Instalar o TypeScript Globalmente**

 Agora, vamos instalar o TypeScript globalmente usando o npm:
```bash

npm  install  -g  typescript

```

Isso vai instalar o compilador TypeScript no seu sistema.

 **Passo 3: Verificar a Instalação do TypeScript**

 Verifique se o TypeScript foi instalado corretamente:

 ```bash

tsc  -v

```

Esse comando vai mostrar a versão do TypeScript instalada no seu computador.

#### **4. Criando um Projeto TypeScript**

Vamos criar um projeto básico para testar o TypeScript.

 **Passo 1: Criar uma nova pasta para o projeto**

 ```bash

mkdir  meu-projeto-ts

cd  meu-projeto-ts

```

**Passo 2: Inicializar o projeto com npm**

 Crie um arquivo `package.json` para o projeto:
```bash

npm  init  -y

```
**Passo 3: Criar um arquivo de configuração do TypeScript**

  

Execute o comando abaixo para gerar um arquivo `tsconfig.json`, que irá armazenar as configurações do compilador TypeScript:
```bash
tsc  --init
```

Esse arquivo pode ser modificado para ajustar as configurações do seu projeto, como o diretório de saída dos arquivos compilados.

  

**Passo 4: Criar o primeiro arquivo TypeScript**
 Crie um arquivo `index.ts` com o seguinte conteúdo:

```typescript

let  mensagem: string = "Olá, TypeScript!";

console.log(mensagem);
```
**Passo 5: Compilar o código TypeScript**
 Agora, compile o código TypeScript para JavaScript com o comando:
```bash
tsc  index.ts
```
Isso vai gerar um arquivo `index.js` com o código compilado. O arquivo JavaScript pode ser executado com Node.js:

 ```bash

node  index.js

```

Isso deve exibir a mensagem `"Olá, TypeScript!"` no terminal.
**Compilador TypeScript** e seu funcionamento. Nesta aula, vamos aprender como configurar e usar o compilador TypeScript (tsc), além de explorar o processo de **compilação** de arquivos TypeScript para JavaScript.

---

### **O Compilador TypeScript (tsc)**

#### **1. O que é o Compilador TypeScript (tsc)?**

O **compilador TypeScript (tsc)** é a ferramenta responsável por transformar código TypeScript (`.ts`) em código JavaScript (`.js`). O TypeScript é um superset (superconjunto) do JavaScript, o que significa que você pode escrever código TypeScript, que será transformado em JavaScript puro, que pode ser executado em qualquer ambiente que suporte JavaScript.

Quando você escreve código TypeScript, ele precisa ser compilado para JavaScript, pois navegadores e ambientes Node.js não entendem diretamente TypeScript. O compilador `tsc` converte o código TypeScript para um JavaScript que pode ser executado.

#### **2. Instalando o TypeScript**

Para usar o compilador TypeScript, primeiro você precisa instalá-lo globalmente ou localmente no seu projeto.

##### **2.1. Instalando o TypeScript Globalmente**

Para instalar o TypeScript globalmente no seu sistema, você pode usar o `npm` (Node Package Manager).

1. Abra o terminal e execute o comando:

```bash
npm install -g typescript
```

2. Após a instalação, você pode verificar a versão do TypeScript instalada com o comando:

```bash
tsc --version
```

Isso deve exibir a versão do TypeScript instalada, confirmando que o compilador está pronto para ser usado.

##### **2.2. Instalando o TypeScript Localmente no Projeto**

Se você preferir instalar o TypeScript somente no seu projeto, execute o seguinte comando dentro da pasta do seu projeto:

```bash
npm install --save-dev typescript
```

Agora, o TypeScript estará disponível para ser usado no seu projeto, mas apenas localmente. Você pode rodar o compilador com `npx tsc` em vez de `tsc`.

#### **3. Compilando Arquivos TypeScript com tsc**

##### **3.1. Compilando um Arquivo TypeScript**

Suponha que você tenha um arquivo TypeScript chamado `app.ts` e deseja compilá-lo para JavaScript. Para fazer isso, execute o seguinte comando no terminal:

```bash
tsc app.ts
```

Isso criará um arquivo `app.js` com o código JavaScript compilado.

##### **3.2. Observando Mudanças com tsc --watch**

Se você deseja que o compilador observe mudanças no seu arquivo TypeScript e recompile automaticamente sempre que o arquivo for salvo, use a flag `--watch`:

```bash
tsc --watch
```

Esse comando mantém o processo do compilador ativo e recompila o arquivo sempre que há alterações.

#### **4. O Arquivo tsconfig.json**

O arquivo `tsconfig.json` é usado para configurar a compilação do seu projeto TypeScript. Ele permite que você defina várias opções de compilação, como a versão do JavaScript de saída, os diretórios de entrada e saída, e muito mais.

##### **4.1. Criando um tsconfig.json**

Para criar um arquivo `tsconfig.json` em seu projeto, você pode rodar o seguinte comando no terminal:

```bash
tsc --init
```

Isso criará um arquivo `tsconfig.json` básico, que pode ser modificado conforme necessário.

##### **4.2. Estrutura Básica do tsconfig.json**

Aqui está um exemplo básico de um arquivo `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es6",           // Define o padrão de JavaScript de saída (ES6)
    "module": "commonjs",      // Define o tipo de módulo (CommonJS, ES6, etc.)
    "strict": true,            // Habilita verificações rigorosas (como nullability)
    "esModuleInterop": true,   // Permite a interoperabilidade de módulos ES6 com CommonJS
    "skipLibCheck": true,      // Ignora a checagem de tipos em arquivos de declaração de bibliotecas
    "forceConsistentCasingInFileNames": true // Impõe consistência no uso de maiúsculas/minúsculas nos nomes de arquivos
  },
  "include": [
    "src/**/*"                 // Incluir todos os arquivos dentro da pasta "src"
  ],
  "exclude": [
    "node_modules"             // Excluir a pasta "node_modules" da compilação
  ]
}
```

##### **4.3. Opções Comuns no tsconfig.json**

- **target**: Especifica a versão do JavaScript para a qual o TypeScript será compilado. Os valores podem ser `ES3`, `ES5`, `ES6`/`ES2015`, `ES2016`, `ES2017`, etc.
  
- **module**: Especifica o sistema de módulos a ser usado (CommonJS, AMD, ES6, etc.).

- **strict**: Habilita um conjunto de verificações rigorosas de tipos.

- **esModuleInterop**: Permite a interoperabilidade entre módulos CommonJS e ES6.

- **include**: Define os arquivos ou diretórios que o compilador TypeScript deve incluir na compilação.

- **exclude**: Define os arquivos ou diretórios que o compilador deve ignorar.

#### **5. Compilando com tsconfig.json**

Após criar o arquivo `tsconfig.json`, você pode compilar o projeto inteiro executando o comando:

```bash
tsc
```

Isso irá compilar todos os arquivos TypeScript dentro dos diretórios especificados no arquivo `tsconfig.json`.

#### **6. Transpilando para Diferentes Versões de JavaScript**

O TypeScript pode ser configurado para gerar diferentes versões de JavaScript. Por exemplo, se você deseja que seu código seja compilado para uma versão mais recente do JavaScript, como o ES6, você pode alterar a opção `target` no arquivo `tsconfig.json`.

**Exemplo para ES6:**

```json
{
  "compilerOptions": {
    "target": "es6"
  }
}
```

Isso garante que o código gerado pelo TypeScript use recursos do ES6, como classes e arrow functions.

#### **7. Manipulando Múltiplos Arquivos TypeScript**

Se seu projeto envolver múltiplos arquivos TypeScript, você pode configurar o TypeScript para compilar todos os arquivos de uma vez. Em vez de compilar um arquivo de cada vez, você pode usar um `tsconfig.json` que inclua todos os arquivos relevantes.

**Exemplo de tsconfig.json:**
```json
{
  "compilerOptions": {
    "outDir": "./dist", // Onde o JavaScript compilado será salvo
    "module": "commonjs"
  },
  "include": [
    "src/**/*.ts"
  ]
}
```

Com essa configuração, você só precisa executar o comando `tsc` para compilar todos os arquivos `.ts` dentro da pasta `src` e gerar os arquivos `.js` na pasta `dist`.

#### **8. Exercício Prático**

1. Crie um arquivo `index.ts` com algumas funções simples e compile-o para JavaScript. Teste o comando `tsc --watch` para observar mudanças no arquivo.
2. Crie um arquivo `tsconfig.json` e configure a compilação para gerar código JavaScript no padrão ES6. Compile um projeto com múltiplos arquivos TypeScript.
3. Explore a opção `strict` no `tsconfig.json` e veja como ela afeta a verificação de tipos em seu código.

---

### **Conclusão**

Na Aula 2, aprendemos sobre:
- Como configurar e usar o **compilador TypeScript (tsc)**.
- A instalação global e local do TypeScript.
- Como compilar arquivos TypeScript para JavaScript.
- O uso do **tsconfig.json** para configurar a compilação do projeto.
- A importância das opções `target`, `module`, e `strict` para controlar o comportamento da compilação.

Na próxima aula, vamos aprofundar em **tipos avançados** em TypeScript, como **tipos literais**, **tipos genéricos** e **tipos de interseção**, para tornar nosso código mais flexível e seguro.

---
 Vamos para a **Aula 3** do curso de TypeScript, onde vamos explorar os **tipos em TypeScript** de forma mais detalhada. Nessa aula, vamos abordar os tipos básicos, como o TypeScript lida com tipos de dados e como você pode usá-los para garantir que seu código seja mais seguro e fácil de manter.

---

### **Tipos em TypeScript**

#### **1. Tipos Básicos em TypeScript**

O TypeScript é uma linguagem tipada, o que significa que você pode especificar os tipos de variáveis, funções e parâmetros. Isso ajuda a garantir que os valores usados no código correspondam às expectativas, evitando erros de tipo.

##### **1.1. Tipos Primitivos**

Os **tipos primitivos** em TypeScript são os mesmos que em JavaScript, com a diferença de que TypeScript oferece uma verificação mais rigorosa de tipos. Vamos explorar alguns desses tipos:

- **`number`**: Representa tanto inteiros quanto números de ponto flutuante (números com casas decimais).

  **Exemplo:**
  ```typescript
  let idade: number = 30;
  let preco: number = 19.99;
  ```

- **`string`**: Representa uma sequência de caracteres (texto).

  **Exemplo:**
  ```typescript
  let nome: string = "Carlos";
  let saudacao: string = `Olá, ${nome}!`;
  ```

- **`boolean`**: Representa um valor de verdadeiro ou falso.

  **Exemplo:**
  ```typescript
  let ativo: boolean = true;
  let concluido: boolean = false;
  ```

##### **1.2. Tipos de Arrays**

Em TypeScript, você pode declarar arrays de tipos específicos. Existem duas maneiras principais de declarar arrays:

- **Usando o tipo `Array<T>`**:
  
  **Exemplo:**
  ```typescript
  let numeros: Array<number> = [1, 2, 3, 4];
  let nomes: Array<string> = ["Carlos", "Ana", "Paulo"];
  ```

- **Usando a notação de colchetes (`T[]`)**:
  
  **Exemplo:**
  ```typescript
  let numeros: number[] = [1, 2, 3, 4];
  let nomes: string[] = ["Carlos", "Ana", "Paulo"];
  ```

##### **1.3. Tipos de Tupla**

As **tuplas** são como arrays, mas com um número fixo de elementos, onde cada elemento pode ter um tipo diferente.

**Exemplo:**
```typescript
let pessoa: [string, number] = ["Carlos", 30];
```

Neste exemplo, a variável `pessoa` deve ser um array de dois elementos: o primeiro um `string` e o segundo um `number`.

##### **1.4. Tipo `any`**

O tipo `any` permite que você trabalhe com valores de qualquer tipo. Ele é útil quando você não sabe ou não precisa especificar um tipo exato, mas deve ser usado com cautela, pois perde as verificações de tipo.

**Exemplo:**
```typescript
let dado: any = 42;
dado = "Agora é uma string";
dado = true; // Pode ser qualquer tipo
```

##### **1.5. Tipo `void`**

O tipo `void` é usado para indicar que uma função não retorna um valor. Isso é útil em funções que não precisam retornar nada.

**Exemplo:**
```typescript
function saudacao(nome: string): void {
  console.log(`Olá, ${nome}!`);
}
```

Neste caso, a função `saudacao` não retorna um valor, então usamos `void` como o tipo de retorno.

##### **1.6. Tipo `null` e `undefined`**

- **`null`** é um valor atribuído explicitamente a uma variável para indicar a ausência de valor.
- **`undefined`** é o valor atribuído automaticamente a variáveis que foram declaradas, mas não inicializadas.

**Exemplo:**
```typescript
let x: null = null;
let y: undefined = undefined;
```

No TypeScript moderno, `null` e `undefined` são tipos distintos e não são atribuídos automaticamente a qualquer tipo, a menos que você use a opção `strictNullChecks`.

#### **2. Tipos Especiais**

Além dos tipos básicos, TypeScript oferece tipos especiais que ajudam a tornar o código mais flexível e seguro.

##### **2.1. Tipo `never`**

O tipo `never` é usado para indicar que uma função ou expressão nunca deve retornar. Ele é utilizado em casos como loops infinitos ou funções que sempre lançam erros.

**Exemplo:**
```typescript
function erro(message: string): never {
  throw new Error(message);
}

function loopInfinito(): never {
  while (true) {}
}
```

Aqui, a função `erro` nunca retorna um valor, pois sempre lança uma exceção.

##### **2.2. Tipo `unknown`**

O tipo `unknown` é semelhante ao tipo `any`, mas mais seguro. Você pode usar `unknown` quando não souber o tipo de um valor, mas, ao contrário de `any`, você precisa fazer uma verificação de tipo antes de usá-lo.

**Exemplo:**
```typescript
let valor: unknown = 30;

if (typeof valor === "number") {
  console.log(valor.toFixed(2));  // OK, porque valor é um número
}
```

##### **2.3. Tipos Literais**

**Tipos literais** permitem que você defina valores específicos para uma variável, restringindo os valores que ela pode assumir.

**Exemplo:**
```typescript
let cor: "azul" | "vermelho" = "azul";
cor = "vermelho"; // Válido
cor = "verde";    // Erro: "verde" não é um valor permitido
```

Neste exemplo, `cor` pode ser apenas `"azul"` ou `"vermelho"`, qualquer outro valor causaria erro.

#### **3. Tipos Personalizados com `type`**

Em TypeScript, você pode criar tipos personalizados usando a palavra-chave `type`. Isso permite combinar tipos existentes para criar novos tipos compostos.

**Exemplo:**
```typescript
type Nome = string;
type Idade = number;

let nome: Nome = "Carlos";
let idade: Idade = 30;
```

Você também pode usar `type` para criar tipos compostos com união, interseção ou até mesmo tipos mais complexos.

**Exemplo com união:**
```typescript
type NumeroOuTexto = number | string;

let valor: NumeroOuTexto = 42;
valor = "Olá, mundo!";
```

**Exemplo com interseção:**
```typescript
type Pessoa = { nome: string; idade: number };
type Funcionario = Pessoa & { salario: number };

let funcionario: Funcionario = { nome: "Carlos", idade: 30, salario: 5000 };
```

#### **4. Exercício Prático**

1. Crie uma função que receba um parâmetro `id` do tipo `number | string` e um parâmetro `ativo` do tipo `boolean`. Se o `id` for do tipo `number`, a função deve retornar uma mensagem de número, e se for do tipo `string`, uma mensagem com texto.
2. Crie uma tupla que armazene as informações de um livro, com o título como `string`, o ano de publicação como `number`, e se ele está disponível como `boolean`.
3. Crie um tipo personalizado para representar um `Produto` com `nome`, `preco` e `quantidade`. Depois, crie uma função que aceite um objeto do tipo `Produto` e calcule o valor total (preço * quantidade).

---

### **Conclusão**

Na Aula 3, exploramos os **tipos básicos** em TypeScript, como `number`, `string`, `boolean`, `any`, `void`, `null`, `undefined`, e também discutimos tipos mais avançados como `never`, `unknown`, **tipos literais**, e **tipos personalizados** com `type`.

Estes são os fundamentos que permitirão que você escreva código TypeScript mais seguro e eficiente, aproveitando ao máximo a tipagem estática da linguagem.

---
Vamos para a **Aula 4** do curso de TypeScript! Nesta aula, vamos explorar **tipos avançados**, como **tipos genéricos**, **tipos de interseção** e **tipos condicionais**, que são ferramentas poderosas para criar código mais flexível e reutilizável.

---

### **Tipos Avançados em TypeScript**

#### **1. Tipos Genéricos**

Os **tipos genéricos** permitem que você escreva funções, classes ou interfaces que podem trabalhar com qualquer tipo de dado, mas ainda assim mantenham a verificação de tipos em tempo de compilação. Eles são extremamente úteis quando você deseja criar código que funcione com diferentes tipos, sem perder a segurança de tipo.

##### **1.1. O que são Tipos Genéricos?**

Tipos genéricos são uma maneira de criar funções ou classes que podem operar com múltiplos tipos de dados sem precisar duplicar o código.

**Exemplo básico de função genérica:**

```typescript
function identidade<T>(valor: T): T {
  return valor;
}

let numero = identidade(42);    // T é inferido como number
let texto = identidade("Olá");  // T é inferido como string
```

Aqui, a função `identidade` recebe um parâmetro de tipo `T` e retorna esse parâmetro. O tipo `T` é um **tipo genérico** que será substituído pelo tipo real no momento da chamada da função.

##### **1.2. Usando Tipos Genéricos com Arrays**

Você também pode usar tipos genéricos com arrays para garantir que todos os elementos do array sejam do mesmo tipo.

**Exemplo de função genérica com array:**

```typescript
function imprimeArray<T>(itens: T[]): void {
  itens.forEach(item => console.log(item));
}

imprimeArray([1, 2, 3]);         // Tipado como number[]
imprimeArray(["a", "b", "c"]);   // Tipado como string[]
```

Aqui, o tipo `T[]` é o tipo genérico, garantindo que todos os itens do array sejam do mesmo tipo.

##### **1.3. Tipos Genéricos em Classes**

Você também pode usar tipos genéricos em **classes** para criar estruturas que funcionem com vários tipos.

**Exemplo de classe genérica:**

```typescript
class Caixa<T> {
  private conteudo: T;

  constructor(conteudo: T) {
    this.conteudo = conteudo;
  }

  mostrarConteudo(): T {
    return this.conteudo;
  }
}

let caixaNumero = new Caixa(100);  // Tipo T é number
let caixaTexto = new Caixa("Caixa de texto");  // Tipo T é string

console.log(caixaNumero.mostrarConteudo());  // 100
console.log(caixaTexto.mostrarConteudo());  // Caixa de texto
```

Neste exemplo, a classe `Caixa` usa um tipo genérico `T` para permitir que você crie instâncias da classe com qualquer tipo de valor, mantendo a verificação de tipo.

#### **2. Tipos de Interseção**

Os **tipos de interseção** permitem combinar múltiplos tipos em um único tipo, criando um tipo novo que contém as propriedades e métodos de todos os tipos combinados.

##### **2.1. O que são Tipos de Interseção?**

Você pode combinar dois ou mais tipos usando o operador `&`. O tipo resultante será uma combinação de todas as propriedades e métodos dos tipos envolvidos.

**Exemplo de tipos de interseção:**

```typescript
interface Pessoa {
  nome: string;
  idade: number;
}

interface Empregado {
  salario: number;
}

type PessoaEmpregada = Pessoa & Empregado;

let funcionario: PessoaEmpregada = {
  nome: "Carlos",
  idade: 30,
  salario: 5000
};

console.log(funcionario);
```

Aqui, o tipo `PessoaEmpregada` combina as propriedades de `Pessoa` e `Empregado`. O objeto `funcionario` deve ter todas as propriedades de `Pessoa` e `Empregado`.

##### **2.2. Tipos de Interseção com Funções**

Você também pode usar tipos de interseção em funções para combinar tipos de parâmetros ou valores de retorno.

**Exemplo de interseção em funções:**

```typescript
function exibirPessoa(empregado: Pessoa & Empregado) {
  console.log(`${empregado.nome}, ${empregado.idade} anos, R$${empregado.salario}`);
}

exibirPessoa({ nome: "Ana", idade: 28, salario: 4500 });  // Ok
```

Aqui, a função `exibirPessoa` recebe um objeto que deve ter tanto as propriedades de `Pessoa` quanto de `Empregado`.

#### **3. Tipos Condicionais**

Os **tipos condicionais** permitem criar tipos dinâmicos com base em uma condição. Eles são semelhantes às instruções `if/else`, mas funcionam diretamente na definição de tipos.

##### **3.1. O que são Tipos Condicionais?**

Os tipos condicionais têm a seguinte forma:

```typescript
T extends U ? X : Y
```

Isso significa: **"Se `T` for atribuível a `U`, então o tipo é `X`, senão é `Y`"**.

**Exemplo de tipo condicional simples:**

```typescript
type EhNumero<T> = T extends number ? "É um número" : "Não é um número";

let resultado1: EhNumero<42> = "É um número";  // Ok
let resultado2: EhNumero<"texto"> = "Não é um número";  // Ok
```

Aqui, `EhNumero` é um tipo condicional que verifica se o tipo `T` é `number`. Se for, o tipo será `"É um número"`, caso contrário, será `"Não é um número"`.

##### **3.2. Tipos Condicionais para Inferência de Tipo**

Você também pode usar tipos condicionais para inferir tipos de maneira mais complexa. Por exemplo, se um tipo for uma função, podemos extrair seu tipo de retorno.

**Exemplo de inferência de tipo com condicional:**

```typescript
type Retorno<T> = T extends (...args: any[]) => infer R ? R : never;

function somar(a: number, b: number): number {
  return a + b;
}

type TipoRetorno = Retorno<typeof somar>;  // TipoRetorno será 'number'
```

Neste exemplo, o tipo `Retorno` usa `infer` para extrair o tipo de retorno de uma função e atribui esse tipo à variável `TipoRetorno`.

#### **4. Exercício Prático**

1. Crie uma função genérica `ordenar<T>` que receba um array de elementos do tipo `T` e retorne o array ordenado. Faça a função funcionar com diferentes tipos de dados, como `number` e `string`.
2. Defina uma interseção de tipos chamada `ProdutoDigital` e `ProdutoFisico`, que tenham propriedades como `nome`, `preco` e `quantidade`, e crie um objeto que implemente ambos os tipos.
3. Crie um tipo condicional `TipoArray<T>`, que retorne `"É um Array"` se `T` for um tipo de array e `"Não é um Array"` caso contrário.

---

### **Conclusão**

Nesta aula, exploramos **tipos avançados** em TypeScript, como **tipos genéricos**, **tipos de interseção** e **tipos condicionais**.

Esses recursos são extremamente poderosos para escrever código flexível, reutilizável e seguro, permitindo que você trabalhe com diferentes tipos de maneira eficiente sem perder a verificação de tipos.

Na próxima aula, vamos aprender sobre **decoradores**, que são uma forma avançada de modificar classes e métodos em TypeScript.

---
Vamos para a **Aula 5** do curso de TypeScript! Nesta aula, vamos explorar as estruturas de controle de fluxo, como **`if`**, **`else`**, e o **operador ternário**, que são fundamentais para tomar decisões no seu código.

---

### **IF, ELSE e Operador Ternário**

#### **1. Estruturas Condicionais em TypeScript**

As estruturas condicionais permitem que você execute diferentes blocos de código dependendo de uma condição. O TypeScript segue a mesma lógica do JavaScript para essas estruturas, já que ele é um superconjunto de JavaScript.

##### **1.1. IF - Condicional Simples**

O **`if`** é a estrutura condicional mais básica. Ele executa um bloco de código se a condição fornecida for verdadeira.

**Sintaxe:**
```typescript
if (condicao) {
  // Código a ser executado se a condição for verdadeira
}
```

**Exemplo:**
```typescript
let idade: number = 20;

if (idade >= 18) {
  console.log("Você é maior de idade.");
}
```

Neste exemplo, a mensagem "Você é maior de idade." será exibida, pois a condição `idade >= 18` é verdadeira.

##### **1.2. IF-ELSE - Condicional com Alternativa**

A estrutura **`if-else`** permite que você forneça uma alternativa caso a condição não seja verdadeira.

**Sintaxe:**
```typescript
if (condicao) {
  // Código a ser executado se a condição for verdadeira
} else {
  // Código a ser executado se a condição for falsa
}
```

**Exemplo:**
```typescript
let idade: number = 16;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

Aqui, a mensagem "Você é menor de idade." será exibida, pois a condição `idade >= 18` é falsa.

##### **1.3. IF-ELSE IF-ELSE - Múltiplas Condições**

Quando você precisa verificar múltiplas condições, pode usar **`else if`** para criar uma sequência de condições a serem verificadas.

**Sintaxe:**
```typescript
if (condicao1) {
  // Código a ser executado se a condição1 for verdadeira
} else if (condicao2) {
  // Código a ser executado se a condição2 for verdadeira
} else {
  // Código a ser executado se nenhuma condição anterior for verdadeira
}
```

**Exemplo:**
```typescript
let nota: number = 8;

if (nota >= 9) {
  console.log("Aprovado com distinção.");
} else if (nota >= 7) {
  console.log("Aprovado.");
} else {
  console.log("Reprovado.");
}
```

Neste exemplo, a mensagem "Aprovado" será exibida, pois a nota `8` atende à condição `nota >= 7`.

#### **2. Operador Ternário**

O **operador ternário** é uma maneira compacta de escrever uma estrutura condicional simples. Ele é útil quando você deseja fazer uma comparação em uma única linha de código.

**Sintaxe:**
```typescript
condicao ? valorSeVerdadeiro : valorSeFalso;
```

A estrutura do operador ternário pode ser explicada da seguinte forma:

- **`condicao`**: A condição a ser verificada (semelhante ao `if`).
- **`valorSeVerdadeiro`**: O valor que será retornado ou executado se a condição for verdadeira.
- **`valorSeFalso`**: O valor que será retornado ou executado se a condição for falsa.

**Exemplo:**
```typescript
let idade: number = 20;
let resultado: string = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(resultado);
```

Aqui, a variável `resultado` será atribuída como `"Maior de idade"` porque a condição `idade >= 18` é verdadeira. Se a idade fosse menor que 18, o valor seria `"Menor de idade"`.

##### **2.1. Usando o Operador Ternário em Funções**

Você também pode usar o operador ternário dentro de funções para retornar valores de forma compacta.

**Exemplo:**
```typescript
function verificarIdade(idade: number): string {
  return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

console.log(verificarIdade(16));  // Menor de idade
console.log(verificarIdade(20));  // Maior de idade
```

#### **3. Diferenças Entre IF/ELSE e Operador Ternário**

O **operador ternário** é mais conciso e útil quando você precisa de uma estrutura simples, sem muitos blocos de código. Ele pode ser útil em atribuições ou retornos diretos.

Por outro lado, **`if-else`** é mais adequado para estruturas de controle mais complexas, especialmente quando há muitos blocos de código que precisam ser executados com base nas condições.

#### **4. Exercício Prático**

1. Crie uma função que receba um número e verifique se ele é par ou ímpar. Use **`if-else`** para isso.
2. Refatore a função do exercício anterior para usar o **operador ternário**.
3. Crie uma função que recebe a idade de uma pessoa e exibe a mensagem "Maior de idade", "Menor de idade" ou "Idade inválida" (para idades negativas) usando **`if-else`**.
4. Refatore a função do exercício anterior para usar o **operador ternário**.

---

### **Conclusão**

Nesta aula, aprendemos como usar as estruturas condicionais **`if`**, **`else`** e **`else if`**, além de explorar o **operador ternário**, que oferece uma forma mais compacta de fazer decisões condicionais em uma única linha.

As estruturas condicionais são fundamentais para criar lógica no seu código e tomar decisões com base nas condições fornecidas.

---


### **Switch case**

O **`switch`** é uma estrutura de controle usada para executar diferentes partes de código com base em uma expressão. Ela pode ser mais eficiente que uma série de **`if`** e **`else if`**, especialmente quando temos várias condições possíveis para uma mesma variável.

### 1. O que é o `switch`?

O **`switch`** permite que você compare uma expressão com várias opções possíveis (casos). Quando um caso corresponde ao valor da expressão, o código dentro daquele **`case`** é executado. Caso nenhum caso corresponda, você pode usar o **`default`** para tratar uma situação padrão.

#### Sintaxe do `switch`:

```typescript
switch (expressão) {
  case valor1:
    // Código a ser executado se expressão for igual a valor1
    break;

  case valor2:
    // Código a ser executado se expressão for igual a valor2
    break;

  default:
    // Código a ser executado se nenhum case for correspondido
}
```

- **`expressão`**: O valor que será comparado.
- **`case valorX`**: Um valor específico a ser comparado com a expressão.
- **`break`**: Termina a execução do `switch` e evita que outros casos sejam testados.
- **`default`**: (Opcional) Executa quando nenhum **`case`** corresponde à expressão.

---

### 2. Exemplo Básico

Vamos começar com um exemplo simples, onde o `switch` verifica o valor de uma variável `day` e imprime o nome do dia correspondente.

```typescript
let day: number = 3;

switch (day) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
}
```

**Resultado:**  
```text
Terça-feira
```

No exemplo acima, o valor de `day` (que é `3`) é comparado com os valores de cada `case`. Como `3` corresponde ao `case 3`, o código dentro desse `case` é executado e imprime `"Terça-feira"`.

---

### 3. Exemplo com Tipos Diferentes

O `switch` pode ser usado para comparar valores de tipos diferentes, como strings, números e até mesmo enums.

#### Comparando strings:

```typescript
let color: string = "azul";

switch (color) {
  case "vermelho":
    console.log("A cor é vermelho");
    break;
  case "azul":
    console.log("A cor é azul");
    break;
  case "verde":
    console.log("A cor é verde");
    break;
  default:
    console.log("Cor desconhecida");
}
```

**Resultado:**  
```text
A cor é azul
```

Neste caso, a variável `color` (que é uma string) é comparada com os valores dos **`case`**. Quando o valor de `color` for `"azul"`, a correspondência acontece, e o código no bloco do **`case azul`** é executado.

---

### 4. Exemplo com Enums

Enums são uma ótima maneira de melhorar a legibilidade e a manutenção do código. Vamos ver como podemos usar um `switch` com enums.

```typescript
enum Status {
  Ativo = "ativo",
  Inativo = "inativo",
  Pendente = "pendente"
}

let status: Status = Status.Ativo;

switch (status) {
  case Status.Ativo:
    console.log("O status é Ativo");
    break;
  case Status.Inativo:
    console.log("O status é Inativo");
    break;
  case Status.Pendente:
    console.log("O status é Pendente");
    break;
  default:
    console.log("Status desconhecido");
}
```

**Resultado:**  
```text
O status é Ativo
```

Aqui, criamos um **`enum`** chamado `Status`, com três valores possíveis. O `switch` então compara o valor de `status` com os valores do `enum`.

---

### 5. Exemplo Avançado: Vários Casos para o Mesmo Resultado

Às vezes, você pode querer que vários **`case`** executem o mesmo código. Para isso, você pode agrupar múltiplos **`case`**.

```typescript
let fruit: string = "banana";

switch (fruit) {
  case "maçã":
  case "banana":
  case "laranja":
    console.log("Fruta disponível");
    break;
  default:
    console.log("Fruta não disponível");
}
```

**Resultado:**  
```text
Fruta disponível
```

Neste caso, tanto `"banana"`, `"maçã"`, quanto `"laranja"` executarão o mesmo código. Como o valor de `fruit` é `"banana"`, a mensagem `"Fruta disponível"` será exibida.

---

### 6. Cuidado com o **`break`**

Sem o **`break`**, o código continuará a execução de forma "empilhada", ou seja, ele continuará testando os **`case`** abaixo até encontrar um **`break`** ou atingir o final do bloco. Esse comportamento é chamado de "fall-through".

Exemplo sem `break`:

```typescript
let animal: string = "gato";

switch (animal) {
  case "gato":
    console.log("É um gato");
  case "cachorro":
    console.log("É um cachorro");
  default:
    console.log("Animal desconhecido");
}
```

**Resultado:**  
```text
É um gato
É um cachorro
Animal desconhecido
```

O código não parou após o `case "gato"` porque o `break` foi omitido. A execução "caiu" no próximo `case`, e também executou o `default`. Para evitar esse comportamento, sempre use o **`break`** após cada bloco de código.

---

### 7. Conclusão

O **`switch` case** é uma estrutura poderosa para comparar uma variável com múltiplos valores e executar diferentes blocos de código conforme necessário. Ele é mais eficiente e mais legível do que usar uma longa cadeia de **`if`** e **`else if`**, especialmente quando há muitos valores possíveis a serem comparados.

### Recapitulando:

- **`switch`** compara uma expressão com diferentes **`case`**.
- **`break`** interrompe a execução do `switch` após um **`case`** ser executado.
- **`default`** serve como um valor padrão se nenhum **`case`** corresponder.
- O **`fall-through`** ocorre quando não se usa `break`.

Agora, pratique criando exemplos usando **strings**, **números** e **enums** para entender ainda mais a estrutura do `switch`!

### **Loop for e suas variações**

O laço `for` é útil quando precisamos de controle total sobre os índices e a quantidade de iterações.

#### **Exemplo 1: Somando os números de um array com o `for`**

```typescript
const numeros = [1, 2, 3, 4, 5];
let soma = 0;

// Usando o laço for para percorrer o array e somar seus elementos
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];  // Adiciona cada valor do array à variável soma
}

console.log(soma);  // Saída: 15
```

Neste exemplo:
- Inicializamos `i` como 0.
- A condição `i < numeros.length` garante que o loop pare após o último índice do array.
- O incremento `i++` faz com que o loop avance de 1 em 1 até atingir o tamanho do array.

---

### **2. Laço `for...in`**

O `for...in` é utilizado para iterar sobre **propriedades** de objetos ou **índices** de arrays.

#### **Exemplo 2: Iterando sobre as propriedades de um objeto**

```typescript
const pessoa = {
    nome: "Maria",
    idade: 25,
    cidade: "Rio de Janeiro"
};

// Usando for...in para iterar sobre as propriedades do objeto
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}
```

**Saída**:
```
nome: Maria
idade: 25
cidade: Rio de Janeiro
```

Neste exemplo:
- Usamos `for...in` para percorrer as **propriedades** de `pessoa`.
- Para cada chave (`chave`), acessamos o valor correspondente em `pessoa[chave]`.

**Importante**: Embora o `for...in` funcione em arrays, ele pode retornar índices como strings e também pode percorrer propriedades herdadas de protótipos, por isso é mais adequado para objetos.

---

#### **Exemplo 3: Iterando sobre os índices de um array (não recomendado)**

```typescript
const frutas = ["maçã", "banana", "laranja"];

// Usando for...in para iterar sobre os índices do array
for (let indice in frutas) {
    console.log(`Índice ${indice}: ${frutas[indice]}`);
}
```

**Saída**:
```
Índice 0: maçã
Índice 1: banana
Índice 2: laranja
```

**Nota**: O `for...in` percorre os **índices** do array, mas se você deseja iterar sobre os **valores** de um array, é preferível usar o `for...of`.

---

### **3. Laço `for...of`**

O `for...of` é ideal para iterar sobre os **valores** de arrays, strings, e outros objetos iteráveis como Mapas e Sets.

#### **Exemplo 4: Iterando sobre os valores de um array com o `for...of`**

```typescript
const frutas = ["maçã", "banana", "laranja"];

// Usando for...of para iterar sobre os valores do array
for (let fruta of frutas) {
    console.log(fruta);  // Saída: maçã, banana, laranja
}
```

Neste exemplo:
- `for...of` percorre diretamente os **valores** do array `frutas`.
- Não precisamos acessar os índices manualmente.

---

#### **Exemplo 5: Iterando sobre os caracteres de uma string com `for...of`**

```typescript
const nome = "TypeScript";

// Usando for...of para iterar sobre os caracteres de uma string
for (let letra of nome) {
    console.log(letra);  // Saída: T, y, p, e, S, c, r, i, p, t
}
```

Neste exemplo:
- O `for...of` percorre os **caracteres** da string `nome`, um por um.
- A cada iteração, a variável `letra` recebe o caractere atual da string.

---

#### **Exemplo 6: Iterando sobre valores de um Map com `for...of`**

O `for...of` também pode ser usado para iterar sobre coleções como `Map` e `Set`.

```typescript
const mapa = new Map([
    ["nome", "João"],
    ["idade", 30],
    ["cidade", "São Paulo"]
]);

// Usando for...of para iterar sobre os pares chave-valor de um Map
for (let [chave, valor] of mapa) {
    console.log(`${chave}: ${valor}`);
}
```

**Saída**:
```
nome: João
idade: 30
cidade: São Paulo
```

Neste exemplo:
- O `for...of` percorre o `Map`, retornando **pares chave-valor**.
- Usamos destructuring `[chave, valor]` para acessar diretamente a chave e o valor de cada entrada.

---

### **4. Comparando `for`, `for...in` e `for...of`**

| Tipo de Laço  | Uso                                                | Exemplo                                                                 |
|---------------|----------------------------------------------------|-------------------------------------------------------------------------|
| `for`         | Repetição baseada em números ou intervalos.        | Iterar de 0 até 9: `for (let i = 0; i < 10; i++)`                      |
| `for...in`    | Iteração sobre as **propriedades** de objetos ou índices de arrays. | Iterar sobre as propriedades de um objeto: `for (let chave in obj)`   |
| `for...of`    | Iteração sobre os **valores** de arrays, strings ou outros objetos iteráveis. | Iterar sobre elementos de um array: `for (let val of array)`          |

#### **Exemplo Comparativo**

```typescript
const array = [10, 20, 30];

// Laço `for`
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);  // Saída: 10, 20, 30
}

// Laço `for...in` (iterando sobre índices)
for (let index in array) {
    console.log(`Índice ${index}: ${array[index]}`);  // Saída: Índice 0: 10, Índice 1: 20, Índice 2: 30
}

// Laço `for...of` (iterando sobre valores)
for (let value of array) {
    console.log(value);  // Saída: 10, 20, 30
}
```

---

### **Conclusão**

- **`for`**: Ideal para quando você precisa de controle sobre os índices e o número de iterações.
- **`for...in`**: Usado para iterar sobre as **propriedades** de um objeto ou **índices** de um array (mas não é recomendado para arrays).
- **`for...of`**: Mais recomendado para iterar sobre os **valores** de arrays, strings ou outros objetos iteráveis.


---

### **O Laço `while` e Suas Variações**

O laço `while` é uma estrutura de controle que executa um bloco de código enquanto uma condição especificada for verdadeira. Ao contrário do laço `for`, o `while` não tem um controle de índice explícito, sendo mais flexível em algumas situações.

#### **Sintaxe Básica do `while`:**

```typescript
while (condição) {
    // código a ser repetido
}
```

- **Condição**: A condição é uma expressão booleana que será avaliada antes de cada iteração.
- Se a condição for `true`, o bloco de código será executado. Caso contrário, o loop termina.

#### **Exemplo Básico de `while`**

Vamos ver um exemplo simples que imprime os números de 1 a 5:

```typescript
let i = 1;  // Inicializa a variável de controle

while (i <= 5) {  // A condição será verdadeira enquanto i for menor ou igual a 5
    console.log(i);  // Imprime o valor de i
    i++;  // Incrementa i em 1
}
```

**Saída**:
```
1
2
3
4
5
```

Aqui:
- Inicializamos a variável `i` com 1.
- A condição `i <= 5` é verificada antes de cada iteração. Enquanto for verdadeira, o bloco de código será executado.
- A variável `i` é incrementada após cada iteração para evitar um loop infinito.

#### **Boas práticas para o uso de `while`**
- A condição do `while` deve ser bem definida para evitar loops infinitos.
- Se você não modificar a variável de controle dentro do laço, pode acabar com um loop que nunca termina.

---

### **2. Laço `do...while`**

O laço `do...while` é similar ao `while`, mas a principal diferença é que ele garante que o bloco de código seja executado pelo menos uma vez, independentemente da condição.

#### **Sintaxe Básica do `do...while`:**

```typescript
do {
    // código a ser repetido
} while (condição);
```

- **Primeira execução**: O bloco de código dentro do `do` será sempre executado pelo menos uma vez, independentemente da condição.
- **Condição**: Após a execução do código, a condição será verificada. Se for verdadeira, o laço será repetido.

#### **Exemplo de `do...while`**

Vamos ver um exemplo de como o `do...while` pode ser usado:

```typescript
let j = 1;

do {
    console.log(j);  // Imprime o valor de j
    j++;  // Incrementa j
} while (j <= 5);
```

**Saída**:
```
1
2
3
4
5
```

Aqui:
- O código dentro do `do` é executado **pelo menos uma vez**, mesmo antes de verificar a condição.
- Após a execução do código, a condição `j <= 5` é verificada. Enquanto for verdadeira, o loop continuará.

#### **Quando usar `do...while`**
- O `do...while` é útil quando você deseja que o código seja executado pelo menos uma vez, como ao pedir ao usuário uma entrada até que ela seja válida.

---

### **3. Diferença entre `while` e `do...while`**

| Característica         | `while`                               | `do...while`                         |
|------------------------|---------------------------------------|--------------------------------------|
| **Execução mínima**     | A condição é verificada **antes** da execução do código. O código pode não ser executado se a condição for falsa no início. | O código é executado **pelo menos uma vez**, pois a condição é verificada após a execução. |
| **Uso comum**           | Usado quando não sabemos quantas vezes o loop será executado, mas temos uma condição de parada bem definida. | Usado quando precisamos garantir que o código será executado pelo menos uma vez, independentemente da condição. |

#### **Exemplo Comparativo entre `while` e `do...while`**

```typescript
let i = 6;

// Exemplo com while
while (i <= 5) {
    console.log(`(while) i: ${i}`);
    i++;
}

// Resetando o valor de i
i = 6;

// Exemplo com do...while
do {
    console.log(`(do...while) i: ${i}`);
    i++;
} while (i <= 5);
```

**Saída**:
```
(do...while) i: 6
```

**Explicação**:
- No **`while`**, a condição `i <= 5` é falsa desde o começo, então o laço **não é executado**.
- No **`do...while`**, a execução do código ocorre **pelo menos uma vez**, pois a condição é verificada **depois** da execução.

---

### **4. Exemplos Práticos**

#### **Exemplo 1: Contando até 10 com o `while`**

```typescript
let contador = 1;

while (contador <= 10) {
    console.log(contador);  // Imprime os números de 1 a 10
    contador++;
}
```

Neste exemplo:
- O loop irá executar enquanto `contador <= 10` for verdadeiro.
- A cada iteração, o valor de `contador` é incrementado.

---

#### **Exemplo 2: Pedindo ao usuário um número positivo com `do...while`**

Aqui, utilizamos o `do...while` para garantir que o código seja executado pelo menos uma vez, pedindo ao usuário para digitar um número positivo.

```typescript
let numero: number;

do {
    numero = parseInt(prompt("Digite um número positivo:") || "0");
} while (numero <= 0);

console.log(`Você digitou o número positivo: ${numero}`);
```

Neste exemplo:
- O laço `do...while` continua pedindo ao usuário para inserir um número até que ele insira um valor positivo.
- O código dentro do `do` é sempre executado pelo menos uma vez, independentemente do que o usuário digitar inicialmente.

---

#### **Exemplo 3: Gerando uma senha aleatória com `while`**

Aqui, geramos uma senha aleatória até que ela tenha pelo menos 8 caracteres e contenha pelo menos um número.

```typescript
function gerarSenha(): string {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let senha = "";
    
    while (senha.length < 8 || !/\d/.test(senha)) {
        senha = "";
        for (let i = 0; i < 8; i++) {
            senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
    }

    return senha;
}

console.log(`Senha gerada: ${gerarSenha()}`);
```

Neste exemplo:
- O `while` é usado para garantir que a senha gerada tenha pelo menos 8 caracteres e contenha ao menos um número.
- O loop continua até que ambas as condições sejam atendidas.

---

### **5. Comparando `while` e `do...while`**

| Tipo de Laço         | Uso                                        | Exemplo                                |
|----------------------|--------------------------------------------|----------------------------------------|
| **`while`**           | Executa o bloco de código **somente** se a condição for verdadeira. | `while (x <= 10) { // faça algo }`      |
| **`do...while`**      | Executa o bloco de código **pelo menos uma vez**, depois verifica a condição. | `do { // faça algo } while (x <= 10)`  |

**Quando usar qual:**
- Use o **`while`** quando a execução do loop depender de uma condição que deve ser verificada antes de executar o bloco de código.
- Use o **`do...while`** quando precisar garantir que o código seja executado **pelo menos uma vez**, mesmo que a condição inicial já seja falsa.

---

### **Conclusão da Aula**

- **`while`**: Ideal quando a condição de parada é verificada antes da execução do código e não sabemos quantas iterações serão necessárias.
- **`do...while`**: Útil quando precisamos garantir que o bloco de código seja executado **pelo menos uma vez**, mesmo que a condição inicial seja falsa.

Agora você tem uma visão completa sobre o laço `while` e `do...while`, suas diferenças e quando usar cada um. Teste-os em situações práticas para dominar a estrutura de loops em TypeScript!

--- 
##  Operadores do TypeScript

## 1. Introdução
Os operadores são fundamentais em qualquer linguagem de programação, incluindo TypeScript. Eles são usados para realizar operações matemáticas, lógicas, de comparação e outras manipulações em valores e variáveis.

## 2. Tipos de Operadores

### 2.1 Operadores Aritméticos
Usados para realizar operações matemáticas:
```typescript
let a: number = 10;
let b: number = 3;

console.log(a + b); // Adição -> 13
console.log(a - b); // Subtração -> 7
console.log(a * b); // Multiplicação -> 30
console.log(a / b); // Divisão -> 3.333...
console.log(a % b); // Módulo -> 1
console.log(a ** b); // Expoente -> 1000
```

### 2.2 Operadores de Atribuição
Usados para atribuir valores a variáveis:
```typescript
let x: number = 10;
x += 5;  // x = x + 5 -> 15
x -= 2;  // x = x - 2 -> 13
x *= 3;  // x = x * 3 -> 39
x /= 3;  // x = x / 3 -> 13
x %= 4;  // x = x % 4 -> 1
x **= 2; // x = x ** 2 -> 1
```

### 2.3 Operadores de Comparacão
Usados para comparar valores:
```typescript
console.log(10 == "10");  // true  (comparação sem verificar tipo)
console.log(10 === "10"); // false (comparação estrita)
console.log(10 != 5);     // true
console.log(10 !== "10"); // true
console.log(10 > 5);      // true
console.log(10 < 5);      // false
console.log(10 >= 10);    // true
console.log(10 <= 5);     // false
```

### 2.4 Operadores Lógicos
Usados para operações booleanas:
```typescript
console.log(true && false); // false (AND)
console.log(true || false); // true  (OR)
console.log(!true);         // false (NOT)
```

### 2.5 Operadores Bitwise (Bit a Bit)
Usados para manipulação de bits:
```typescript
console.log(5 & 1);  // 1 (AND bitwise)
console.log(5 | 1);  // 5 (OR bitwise)
console.log(5 ^ 1);  // 4 (XOR bitwise)
console.log(~5);     // -6 (NOT bitwise)
console.log(5 << 1); // 10 (Deslocamento para esquerda)
console.log(5 >> 1); // 2  (Deslocamento para direita)
console.log(5 >>> 1);// 2  (Deslocamento para direita sem sinal)
```

### 2.6 Operadores Ternários
Usado para expressões condicionais de forma simplificada:
```typescript
let idade: number = 20;
let status: string = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(status); // Maior de idade
```

### 2.7 Operadores de String
Usados para manipulação de strings:
```typescript
let nome: string = "João";
let sobrenome: string = "Silva";
console.log(nome + " " + sobrenome); // João Silva (Concatenação)
```

### 2.8 Operadores TypeScript Específicos

#### 2.8.1 Operador "typeof"
Retorna o tipo de uma variável:
```typescript
console.log(typeof 123);  // "number"
console.log(typeof "abc"); // "string"
console.log(typeof true); // "boolean"
```

#### 2.8.2 Operador "instanceof"
Verifica se um objeto pertence a uma determinada classe:
```typescript
class Carro {}
let meuCarro = new Carro();
console.log(meuCarro instanceof Carro); // true
```

#### 2.8.3 Operador "in"
Verifica se uma propriedade existe em um objeto:
```typescript
let pessoa = { nome: "Ana", idade: 25 };
console.log("nome" in pessoa);  // true
console.log("altura" in pessoa); // false
```

#### 2.8.4 Operador "as" (Type Assertion)
Usado para afirmar o tipo de uma variável:
```typescript
let valor: unknown = "Hello";
let tamanho: number = (valor as string).length;
console.log(tamanho); // 5
```

#### 2.8.5 Operador "??" (Nullish Coalescing)
Retorna o valor da direita se o da esquerda for null ou undefined:
```typescript
let usuario: string | null = null;
console.log(usuario ?? "Convidado"); // Convidado
```

#### 2.8.6 Operador "?." (Optional Chaining)
Evita erro ao acessar propriedades de objetos nulos ou indefinidos:
```typescript
let obj: any = null;
console.log(obj?.propriedade); // undefined (sem erro)
```

## 3. Conclusão
O TypeScript possui uma ampla gama de operadores que facilitam a manipulação de valores e estruturas de dados. Compreender esses operadores é essencial para escrever código eficiente e limpo.



---

### **Funções em TypeScript**

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

**Classes e Objetos em TypeScript**. As classes são fundamentais para a programação orientada a objetos, e TypeScript tem suporte nativo para elas, com o benefício adicional de tipagem estática. Vamos explorar conceitos como criação de classes, herança, modificadores de acesso, e muito mais.

---

### **Aula: Classes e Objetos em TypeScript**

#### **Objetivo da Aula:**
- Compreender como criar e usar classes em TypeScript.
- Aprender a utilizar modificadores de acesso, herança e interfaces.
- Explorar como trabalhar com objetos instanciados de uma classe.
- Aplicar boas práticas de programação orientada a objetos em TypeScript.

---

### **1. Introdução às Classes em TypeScript**

Em TypeScript, as **classes** são a base para trabalhar com programação orientada a objetos. Elas servem como moldes para a criação de **objetos**. Uma classe pode conter **propriedades** e **métodos** que determinam o comportamento dos objetos instanciados a partir dela.

#### **Sintaxe Básica de uma Classe:**

```typescript
class NomeDaClasse {
    // Propriedades (ou atributos)
    propriedade: tipo;

    // Construtor
    constructor(parametro: tipo) {
        this.propriedade = parametro;
    }

    // Métodos
    metodo() {
        // lógica
    }
}
```

- **Propriedades**: São características dos objetos criados pela classe.
- **Construtor**: O método especial `constructor` é chamado quando a classe é instanciada, permitindo inicializar as propriedades do objeto.
- **Métodos**: Funções dentro da classe que determinam o comportamento dos objetos.

---

### **2. Criando a Primeira Classe**

Vamos criar uma classe simples para representar uma **Pessoa**, com propriedades como `nome` e `idade`, e um método para exibir essas informações.

#### **Exemplo 1: Classe `Pessoa`**

```typescript
class Pessoa {
    nome: string;
    idade: number;

    // Construtor
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método
    exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}

// Criando uma instância da classe Pessoa
const pessoa1 = new Pessoa("Ana", 25);
pessoa1.exibirInformacoes();  // Saída: Nome: Ana, Idade: 25
```

Aqui:
- A classe `Pessoa` possui dois atributos (`nome` e `idade`), que são inicializados no construtor.
- O método `exibirInformacoes` imprime as informações da pessoa no console.

---

### **3. Modificadores de Acesso: `public`, `private` e `protected`**

Em TypeScript, podemos controlar a visibilidade das propriedades e métodos das classes usando modificadores de acesso. Isso ajuda a proteger dados sensíveis e a seguir o princípio da **encapsulação**.

- **`public`**: Propriedades e métodos são acessíveis de qualquer lugar.
- **`private`**: Propriedades e métodos só são acessíveis dentro da própria classe.
- **`protected`**: Propriedades e métodos são acessíveis dentro da classe e nas classes que a herdam.

#### **Exemplo 2: Modificadores de Acesso**

```typescript
class Carro {
    public modelo: string;  // Atributo público
    private cor: string;    // Atributo privado
    protected ano: number;  // Atributo protegido

    constructor(modelo: string, cor: string, ano: number) {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }

    public exibirDetalhes(): void {
        console.log(`Modelo: ${this.modelo}, Cor: ${this.cor}, Ano: ${this.ano}`);
    }

    private alterarCor(cor: string): void {
        this.cor = cor;
    }
}

const meuCarro = new Carro("Fusca", "azul", 1970);
meuCarro.exibirDetalhes();  // Acesso permitido
// meuCarro.alterarCor("vermelho");  // Erro: Método 'alterarCor' é privado e não pode ser acessado fora da classe.
```

- A propriedade `cor` é **privada**, ou seja, não pode ser acessada diretamente de fora da classe.
- A propriedade `ano` é **protegida**, então pode ser acessada por classes que herdam de `Carro`, mas não fora da classe ou de suas subclasses.
- O método `alterarCor` é **privado**, o que impede sua chamada fora da classe `Carro`.

---

### **4. Herança em TypeScript**

A herança permite criar uma **nova classe** (subclasse) a partir de uma **classe existente** (superclasse). A subclasse herda todas as propriedades e métodos da superclasse, podendo ainda sobrescrevê-los ou adicionar novos.

#### **Exemplo 3: Herança em TypeScript**

```typescript
class Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    fazerSom(): void {
        console.log("O animal faz um som.");
    }
}

class Cachorro extends Animal {
    constructor(nome: string) {
        super(nome);  // Chama o construtor da classe Animal
    }

    // Sobrescreve o método da classe Animal
    fazerSom(): void {
        console.log("O cachorro late.");
    }
}

const meuCachorro = new Cachorro("Rex");
meuCachorro.fazerSom();  // Saída: O cachorro late.
```

- A classe `Cachorro` **herda** de `Animal`, então pode acessar suas propriedades e métodos.
- O método `fazerSom` foi **sobrescrito** na classe `Cachorro` para se comportar de forma específica.

---

### **5. Interfaces em TypeScript**

Uma **interface** é um contrato que define as propriedades e métodos que uma classe deve implementar. As interfaces ajudam a garantir que as classes sigam uma estrutura definida, sem especificar a implementação.

#### **Exemplo 4: Interface em TypeScript**

```typescript
interface IAnimal {
    nome: string;
    idade: number;
    fazerSom(): void;
}

class Gato implements IAnimal {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    fazerSom(): void {
        console.log("O gato mia.");
    }
}

const meuGato = new Gato("Whiskers", 3);
meuGato.fazerSom();  // Saída: O gato mia.
```

Aqui:
- A interface `IAnimal` define a estrutura que qualquer classe **implementadora** precisa seguir, com as propriedades `nome` e `idade` e o método `fazerSom`.
- A classe `Gato` implementa a interface `IAnimal` e, portanto, deve fornecer uma implementação para o método `fazerSom`.

---

### **6. Métodos Estáticos**

Métodos **estáticos** pertencem à classe em si, e não às instâncias da classe. Eles podem ser chamados diretamente na classe, sem precisar de uma instância.

#### **Exemplo 5: Métodos Estáticos**

```typescript
class Calculadora {
    static somar(a: number, b: number): number {
        return a + b;
    }

    static multiplicar(a: number, b: number): number {
        return a * b;
    }
}

console.log(Calculadora.somar(5, 3));  // Saída: 8
console.log(Calculadora.multiplicar(5, 3));  // Saída: 15
```

- O método `somar` e o método `multiplicar` são **estáticos**, então são chamados diretamente na classe `Calculadora`, sem precisar criar uma instância.

---

### **7. Conclusão da Aula**

- **Classes** em TypeScript são usadas para criar objetos e definir a estrutura de suas propriedades e métodos.
- **Modificadores de acesso** como `public`, `private`, e `protected` ajudam a controlar a visibilidade de propriedades e métodos.
- **Herança** permite que classes compartilhem propriedades e métodos, promovendo a reutilização de código.
- **Interfaces** são usadas para garantir que as classes implementem determinados contratos, tornando o código mais robusto e previsível.
- **Métodos estáticos** são úteis quando queremos definir funções que pertencem à classe, e não às suas instâncias.

### **Próximos Passos**
- Continue praticando a criação e utilização de classes.
- Explore o uso de **módulos** e **namespace** em TypeScript para uma melhor organização de código.
- Aprenda a trabalhar com **decorators** e outros recursos avançados de TypeScript.

---
**Generics (Tipos Genéricos) em TypeScript**. Generics são uma das características mais poderosas do TypeScript, pois permitem criar componentes (funções, classes, interfaces) que podem trabalhar com qualquer tipo, preservando ao mesmo tempo a segurança de tipo.

---

### **Aula: Generics (Tipos Genéricos) em TypeScript**

#### **Objetivo da Aula:**
- Entender o conceito de **Generics** em TypeScript.
- Aprender a criar **funções genéricas**, **interfaces genéricas** e **classes genéricas**.
- Explorar como os **Generics** ajudam a criar código reutilizável, mantendo a segurança de tipo.

---

### **1. O Que São Generics?**

Generics são uma maneira de criar componentes (funções, classes, interfaces, etc.) que podem trabalhar com diferentes tipos de dados, sem perder a **segurança de tipo**. Em vez de especificar um tipo fixo, usamos **parâmetros de tipo** que serão substituídos por tipos concretos no momento da utilização.

- **Vantagem**: Usar Generics permite que o código seja mais flexível e reutilizável, enquanto ainda aproveita o sistema de tipos do TypeScript.

#### **Sintaxe Básica de Generics**

```typescript
function nomeDaFuncao<T>(parametro: T): T {
    return parametro;
}
```

- **`<T>`**: Este `T` é um **parâmetro de tipo** genérico. Pode ser qualquer nome (embora `T` seja comum por convenção).
- **`parametro: T`**: O tipo do parâmetro da função é o tipo genérico `T`, que será determinado quando a função for chamada.
- **`: T`**: O tipo de retorno da função também é `T`.

---

### **2. Funções Genéricas**

Vamos começar com uma função simples que retorna o mesmo valor que recebe. A ideia aqui é mostrar como a tipagem genérica permite que a função trabalhe com qualquer tipo de dado.

#### **Exemplo 1: Função Genérica que Retorna o Mesmo Valor**

```typescript
function identidade<T>(valor: T): T {
    return valor;
}

const numero = identidade(123);  // Saída: 123
const texto = identidade("Olá, TypeScript!");  // Saída: Olá, TypeScript!
```

Aqui:
- A função `identidade` recebe um valor de qualquer tipo (`T`) e retorna esse mesmo valor, mantendo a tipagem.
- No momento da chamada, o TypeScript infere o tipo automaticamente, com base no argumento passado.

---

### **3. Funções Genéricas com Tipos Específicos**

Você também pode usar Generics para especificar que a função aceita um determinado tipo, mas ainda mantém a flexibilidade para ser utilizada com tipos diferentes.

#### **Exemplo 2: Função Genérica para Adicionar Itens a um Array**

```typescript
function adicionarItem<T>(array: T[], item: T): T[] {
    array.push(item);
    return array;
}

let numeros: number[] = [1, 2, 3];
numeros = adicionarItem(numeros, 4);  // Saída: [1, 2, 3, 4]

let frutas: string[] = ["maçã", "banana"];
frutas = adicionarItem(frutas, "laranja");  // Saída: ["maçã", "banana", "laranja"]
```

- Aqui, a função `adicionarItem` recebe um **array** e um **item**, ambos do tipo `T`.
- A função adiciona o `item` ao `array` e retorna o array atualizado.
- Essa função pode ser usada com qualquer tipo de dado, garantindo que o tipo de `array` e `item` sejam os mesmos.

---

### **4. Interfaces Genéricas**

As **interfaces genéricas** permitem definir contratos para objetos ou funções que trabalham com tipos genéricos. Isso é útil quando você quer garantir que um objeto ou estrutura de dados tenha uma certa forma, mas permitindo que os tipos sejam flexíveis.

#### **Exemplo 3: Interface Genérica**

```typescript
interface RespostaAPI<T> {
    status: number;
    dados: T;
}

const respostaNumero: RespostaAPI<number> = {
    status: 200,
    dados: 123
};

const respostaUsuario: RespostaAPI<{ nome: string, idade: number }> = {
    status: 200,
    dados: { nome: "Maria", idade: 30 }
};
```

- A interface `RespostaAPI` é genérica e aceita um tipo `T` para a propriedade `dados`, permitindo que seja qualquer tipo de dado.
- Ao criar uma instância dessa interface, podemos definir o tipo de `dados` que queremos (neste caso, `number` e um **objeto com nome e idade**).

---

### **5. Classes Genéricas**

As **classes genéricas** permitem criar classes que podem trabalhar com diferentes tipos de dados. As instâncias dessas classes podem ter tipos específicos definidos quando a classe for instanciada.

#### **Exemplo 4: Classe Genérica**

```typescript
class Caixa<T> {
    private conteudo: T;

    constructor(conteudo: T) {
        this.conteudo = conteudo;
    }

    obterConteudo(): T {
        return this.conteudo;
    }
}

const caixaDeNumero = new Caixa(100);
console.log(caixaDeNumero.obterConteudo());  // Saída: 100

const caixaDeTexto = new Caixa("Conteúdo importante");
console.log(caixaDeTexto.obterConteudo());  // Saída: Conteúdo importante
```

- A classe `Caixa` é genérica e aceita um tipo `T` para o seu conteúdo.
- Quando criamos uma instância da classe, o tipo `T` é especificado (neste caso, `number` e `string`).

---

### **6. Constraints (Restrições) com Generics**

Às vezes, você quer restringir o tipo de dados que um parâmetro genérico pode receber. Para isso, podemos usar **restrições** (constraints) com a palavra-chave `extends`.

#### **Exemplo 5: Função Genérica com Restrição**

```typescript
function exibirTamanho<T extends { length: number }>(item: T): void {
    console.log(item.length);
}

exibirTamanho("Olá");  // Saída: 3
exibirTamanho([1, 2, 3, 4]);  // Saída: 4
// exibirTamanho(123);  // Erro: O tipo 'number' não possui a propriedade 'length'.
```

- A função `exibirTamanho` só aceita parâmetros cujo tipo tenha a propriedade `length` (como `string` ou `array`).
- A restrição `<T extends { length: number }>` assegura que o parâmetro passado deve ter a propriedade `length`.

---

### **7. Usando Generics com `keyof` e `in`**

Você também pode usar Generics junto com os operadores `keyof` e `in` para acessar as chaves de um objeto de forma segura.

#### **Exemplo 6: Usando `keyof` com Generics**

```typescript
function obterValor<T, K extends keyof T>(objeto: T, chave: K): T[K] {
    return objeto[chave];
}

const pessoa = { nome: "Lucas", idade: 28 };

const nome = obterValor(pessoa, "nome");  // Saída: Lucas
const idade = obterValor(pessoa, "idade");  // Saída: 28
// const erro = obterValor(pessoa, "endereco");  // Erro: 'endereco' não existe em 'pessoa'
```

- A função `obterValor` recebe um objeto `T` e uma chave `K` que deve ser uma chave válida desse objeto.
- O operador `keyof` restringe `K` para ser uma chave de `T`, garantindo que só possamos acessar chaves válidas do objeto.

---

### **8. Conclusão da Aula**

- **Generics** são uma poderosa ferramenta do TypeScript que permitem criar componentes flexíveis e reutilizáveis, mantendo a segurança de tipo.
- Você pode usar Generics com **funções**, **interfaces**, **classes** e até mesmo **restrições** (com `extends`).
- Com **Generics**, o TypeScript consegue inferir automaticamente os tipos, tornando seu código mais **seguro** e **modular**.

### **Próximos Passos**
- Experimente criar suas próprias funções, classes e interfaces genéricas.
- Explore mais casos de uso de **Generics com `keyof`**, **`in`** e **`extends`**.
- Estude o uso de **Generics avançados** com o TypeScript, como em **tipos mapeados** e **unions**.

---
**Matrizes Binimensionais** em TypeScript. Uma **matriz binimensional** é um tipo de estrutura de dados que pode ser visualizada como uma tabela ou uma grade, onde os elementos estão organizados em linhas e colunas. Em TypeScript, as matrizes binimensionais podem ser representadas por arrays de arrays.

---

### **Aula: Matrizes Binimensionais em TypeScript**

#### **Objetivo da Aula:**
- Entender o conceito de **matrizes binimensionais** e como elas são representadas em TypeScript.
- Aprender como manipular matrizes binimensionais (acessar, modificar e iterar).
- Explorar exemplos práticos de **manipulação de matrizes**.

---

### **1. O que é uma Matriz Binimensional?**

Uma **matriz binimensional** (ou array bidimensional) é um **array de arrays**, onde cada elemento é um array que representa uma linha da matriz. Ela pode ser vista como uma **tabela** de dados, com **linhas** e **colunas**.

Por exemplo, uma matriz de 3x3 seria algo como:

```
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

Neste caso, temos **3 linhas** e **3 colunas**, e cada elemento pode ser acessado por duas coordenadas: a linha e a coluna.

---

### **2. Como Declarar Matrizes Binimensionais em TypeScript**

Em TypeScript, podemos declarar uma matriz binimensional da seguinte maneira:

```typescript
let matriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

- **`number[][]`**: Define que `matriz` será um array de arrays de números.

Também podemos declarar uma matriz vazia e, posteriormente, preenchê-la:

```typescript
let matriz: number[][] = [];
matriz[0] = [1, 2, 3];
matriz[1] = [4, 5, 6];
matriz[2] = [7, 8, 9];
```

---

### **3. Acessando e Modificando Elementos em Matrizes Binimensionais**

Como estamos lidando com uma matriz binimensional, podemos acessar um elemento usando **dois índices**: o primeiro para a **linha** e o segundo para a **coluna**.

#### **Exemplo 1: Acessando Elementos**

```typescript
let matriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Acessando o elemento da linha 2, coluna 3 (índices começam do 0)
let elemento = matriz[1][2];  // Valor: 6
console.log(elemento);  // Saída: 6
```

- **`matriz[1][2]`** acessa o elemento na **segunda linha** e **terceira coluna** (porque os índices começam em 0).

#### **Exemplo 2: Modificando Elementos**

Podemos modificar um elemento de uma matriz binimensional da mesma forma que fazemos para acessar um elemento:

```typescript
matriz[0][1] = 20;  // Modificando o valor da primeira linha, segunda coluna
console.log(matriz);  // Saída: [[1, 20, 3], [4, 5, 6], [7, 8, 9]]
```

- **`matriz[0][1]`** modifica o elemento da **primeira linha** e **segunda coluna** para o valor `20`.

---

### **4. Iterando sobre Matrizes Binimensionais**

É comum precisar iterar sobre os elementos de uma matriz binimensional. Para isso, podemos usar **loops aninhados** (um `for` dentro de outro).

#### **Exemplo 3: Iterando com `for` Aninhado**

```typescript
let matriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Iterando sobre as linhas
for (let i = 0; i < matriz.length; i++) {
    // Iterando sobre as colunas de cada linha
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`Elemento na posição [${i}][${j}] = ${matriz[i][j]}`);
    }
}
```

Saída:
```
Elemento na posição [0][0] = 1
Elemento na posição [0][1] = 2
Elemento na posição [0][2] = 3
Elemento na posição [1][0] = 4
Elemento na posição [1][1] = 5
Elemento na posição [1][2] = 6
Elemento na posição [2][0] = 7
Elemento na posição [2][1] = 8
Elemento na posição [2][2] = 9
```

- O **primeiro loop** (`for (let i = 0; i < matriz.length; i++)`) percorre as **linhas** da matriz.
- O **segundo loop** (`for (let j = 0; j < matriz[i].length; j++)`) percorre as **colunas** de cada linha.

#### **Exemplo 4: Usando `forEach` para Iterar**

Também podemos usar o método `forEach` para iterar sobre os elementos de uma matriz binimensional.

```typescript
let matriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

matriz.forEach((linha, i) => {
    linha.forEach((elemento, j) => {
        console.log(`Elemento na posição [${i}][${j}] = ${elemento}`);
    });
});
```

- O método `forEach` é usado para iterar sobre cada linha da matriz e, dentro de cada linha, sobre os elementos.

---

### **5. Trabalhando com Matrizes de Diferentes Tamanhos**

Uma matriz binimensional pode ter linhas com **número de colunas diferentes**. Isso é conhecido como uma **matriz irregular**.

#### **Exemplo 5: Matriz Irregular**

```typescript
let matrizIrregular: number[][] = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9]
];

console.log(matrizIrregular[0]);  // Saída: [1, 2]
console.log(matrizIrregular[1]);  // Saída: [3, 4, 5]
console.log(matrizIrregular[2]);  // Saída: [6, 7, 8, 9]
```

- Nesse caso, a matriz não tem o mesmo número de elementos por linha. A primeira linha tem 2 elementos, a segunda tem 3 e a terceira tem 4.

---

### **6. Operações Comuns em Matrizes Binimensionais**

Aqui estão algumas operações comuns que você pode realizar com matrizes binimensionais:

#### **Exemplo 6: Transposta de uma Matriz**

A **matriz transposta** é uma matriz obtida trocando suas linhas por colunas.

```typescript
function transposta(matriz: number[][]): number[][] {
    let transposta: number[][] = [];
    
    for (let i = 0; i < matriz[0].length; i++) {
        let linha: number[] = [];
        for (let j = 0; j < matriz.length; j++) {
            linha.push(matriz[j][i]);
        }
        transposta.push(linha);
    }
    return transposta;
}

let matriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(transposta(matriz));  // Saída: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```

- O código acima cria uma nova matriz onde as **linhas se tornam colunas** e as **colunas se tornam linhas**.

#### **Exemplo 7: Somando Matrizes**

A soma de duas matrizes binimensionais é possível apenas se ambas tiverem as mesmas dimensões (mesmo número de linhas e colunas).

```typescript
function somarMatrizes(matriz1: number[][], matriz2: number[][]): number[][] {
    let resultado: number[][] = [];
    
    for (let i = 0; i < matriz1.length; i++) {
        let linha: number[] = [];
        for (let j = 0; j < matriz1[i].length; j++) {
            linha.push(matriz1[i][j] + matriz2[i][j]);
        }
        resultado.push(linha);
    }
    return resultado;
}

let matriz1: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let matriz2: number[][] = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 

1]
];

console.log(somarMatrizes(matriz1, matriz2));  // Saída: [[10, 10, 10], [10, 10, 10], [10, 10, 10]]
```

- O código acima soma duas matrizes de mesmo tamanho, elemento por elemento.

---

### **7. Conclusão**

Nesta aula, vimos como **declarar**, **acessar**, **modificar** e **iterar** sobre matrizes binimensionais em TypeScript. Também aprendemos algumas operações úteis, como **transposta** e **soma de matrizes**. Com essas habilidades, você poderá manipular eficientemente matrizes em seus projetos TypeScript.

---

### **Exercícios:**
1. Crie uma matriz 4x4 com números aleatórios e escreva uma função para encontrar o maior número da matriz.
2. Implemente uma função que receba duas matrizes de dimensões iguais e retorne uma nova matriz onde cada elemento seja a multiplicação dos elementos correspondentes nas duas matrizes.
3. Crie uma matriz de 3x3 e implemente uma função que calcule a **soma das diagonais** da matriz.
 **Manipulação de Arrays e Objetos em TypeScript**. Esta é uma parte importante do desenvolvimento, pois muitos projetos lidam com dados estruturados em arrays e objetos. Além disso, em TypeScript, você pode aplicar tipagem forte para garantir maior segurança ao manipular esses tipos.

---

### **Aula: Manipulação de Arrays e Objetos em TypeScript**

#### **Objetivo da Aula:**
- Aprender como criar e manipular **arrays** e **objetos** de forma segura usando **TypeScript**.
- Explorar métodos comuns para manipulação de arrays e objetos.
- Trabalhar com **tipagem estática** em arrays e objetos para garantir a integridade dos dados.

---

### **1. Arrays em TypeScript**

Em TypeScript, arrays são utilizados da mesma forma que em JavaScript, mas com a diferença de que você pode especificar o tipo de dados que o array vai armazenar.

#### **Sintaxe de Arrays:**

Você pode criar arrays de dois jeitos:
1. **Usando a notação de tipo explícito (`type[]`)**
2. **Usando a interface `Array<tipo>`**

```typescript
let numeros: number[] = [1, 2, 3, 4];  // Notação explícita
let frutas: Array<string> = ["maçã", "banana", "laranja"];  // Usando a interface Array<>
```

- **`numeros: number[]`**: Cria um array que só pode conter números.
- **`frutas: Array<string>`**: Cria um array que só pode conter strings.

#### **Exemplo 1: Manipulando Arrays**

```typescript
let nomes: string[] = ["Ana", "João", "Maria"];

// Adicionando um item ao array
nomes.push("Carlos");

// Removendo o último item do array
const ultimoNome = nomes.pop();

// Acessando um item específico
const primeiroNome = nomes[0];  // "Ana"

// Modificando um item do array
nomes[1] = "Joaquim";

// Exibindo o array
console.log(nomes);  // Saída: ["Ana", "Joaquim", "Maria", "Carlos"]
console.log(ultimoNome);  // Saída: Carlos
console.log(primeiroNome);  // Saída: Ana
```

Aqui:
- Usamos **`push`** para adicionar um item ao final do array.
- Usamos **`pop`** para remover o último item do array.
- Acessamos e modificamos elementos diretamente com o índice.

#### **Exemplo 2: Métodos Comuns para Arrays**

TypeScript fornece vários métodos úteis para manipulação de arrays, como:

- **`map()`**: Cria um novo array com os resultados da aplicação de uma função.
- **`filter()`**: Cria um novo array com todos os elementos que passaram em um teste.
- **`reduce()`**: Aplica uma função a um acumulador e a cada elemento do array (de esquerda para direita) para reduzi-lo a um único valor.
- **`forEach()`**: Executa uma função em cada item do array, mas sem retornar nada.

```typescript
let numeros = [1, 2, 3, 4, 5];

// Usando map() para dobrar cada número
let dobrados = numeros.map(num => num * 2);
console.log(dobrados);  // Saída: [2, 4, 6, 8, 10]

// Usando filter() para filtrar números maiores que 3
let maioresQueTres = numeros.filter(num => num > 3);
console.log(maioresQueTres);  // Saída: [4, 5]

// Usando reduce() para somar todos os números
let soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma);  // Saída: 15

// Usando forEach() para imprimir cada número
numeros.forEach(num => console.log(num));
```

Esses métodos são fundamentais para a manipulação eficiente de arrays em JavaScript e TypeScript.

---

### **2. Objetos em TypeScript**

Objetos em TypeScript funcionam de maneira semelhante aos objetos em JavaScript, mas com a adição de **tipagem estática**, que permite garantir a estrutura dos dados.

#### **Sintaxe de Objetos:**

Você pode definir a estrutura de um objeto usando **tipos explícitos** ou **interfaces**.

```typescript
// Usando tipagem explícita
let pessoa: { nome: string, idade: number } = {
    nome: "Lucas",
    idade: 25
};

// Usando interfaces
interface Pessoa {
    nome: string;
    idade: number;
}

let pessoa2: Pessoa = {
    nome: "Maria",
    idade: 30
};
```

- O tipo `{ nome: string, idade: number }` define um objeto com duas propriedades: `nome` (do tipo `string`) e `idade` (do tipo `number`).
- A **interface `Pessoa`** define o tipo de objeto de forma mais reutilizável.

#### **Exemplo 3: Manipulando Objetos**

Você pode acessar e modificar propriedades de um objeto da mesma forma que em JavaScript, mas com a vantagem de que o TypeScript garante que as propriedades existam e estejam no tipo correto.

```typescript
let pessoa = {
    nome: "Lucas",
    idade: 25
};

// Acessando propriedades
console.log(pessoa.nome);  // Saída: Lucas
console.log(pessoa["idade"]);  // Saída: 25

// Modificando propriedades
pessoa.nome = "Carlos";

// Adicionando novas propriedades
pessoa.profissao = "Desenvolvedor";

// Excluindo propriedades
delete pessoa.idade;

console.log(pessoa);  // Saída: { nome: "Carlos", profissao: "Desenvolvedor" }
```

Aqui:
- Usamos **`pessoa.nome`** e **`pessoa["idade"]`** para acessar as propriedades.
- Modificamos a propriedade `nome` diretamente.
- Adicionamos uma nova propriedade `profissao`.
- Excluímos a propriedade `idade` usando `delete`.

---

### **3. Objetos e Arrays Trabalhando Juntos**

Frequentemente, em aplicações mais complexas, você vai precisar trabalhar com **arrays de objetos** ou **objetos com arrays** como valores. Vamos ver como isso funciona.

#### **Exemplo 4: Array de Objetos**

```typescript
interface Produto {
    nome: string;
    preco: number;
    quantidade: number;
}

const produtos: Produto[] = [
    { nome: "Camiseta", preco: 29.99, quantidade: 10 },
    { nome: "Calça", preco: 79.99, quantidade: 5 },
    { nome: "Tênis", preco: 119.99, quantidade: 3 }
];

// Filtrando produtos com quantidade maior que 5
const produtosDisponiveis = produtos.filter(produto => produto.quantidade > 5);
console.log(produtosDisponiveis);  
// Saída: [ { nome: 'Camiseta', preco: 29.99, quantidade: 10 } ]
```

- Neste exemplo, temos um **array de objetos `Produto`**.
- Usamos o **método `filter()`** para filtrar os produtos que têm uma quantidade maior que 5.

#### **Exemplo 5: Objeto com Array como Valor**

```typescript
interface Departamento {
    nome: string;
    funcionarios: string[];
}

const empresa: Departamento = {
    nome: "Tech Co",
    funcionarios: ["Ana", "Carlos", "João"]
};

// Adicionando um funcionário ao departamento
empresa.funcionarios.push("Maria");

console.log(empresa.funcionarios);  // Saída: ["Ana", "Carlos", "João", "Maria"]
```

- Neste caso, o **objeto `empresa`** possui uma propriedade `funcionarios`, que é um **array de strings**.
- Usamos o método **`push`** para adicionar um novo funcionário ao array.

---

### **4. Tipos de Dados Complexos: Objetos Aninhados**

Outro cenário comum em TypeScript é quando temos objetos com **objetos aninhados**. TypeScript permite que você defina tipos para objetos mais complexos, ajudando a garantir que a estrutura interna seja validada.

#### **Exemplo 6: Objetos Aninhados**

```typescript
interface Endereco {
    rua: string;
    cidade: string;
    estado: string;
}

interface PessoaComEndereco {
    nome: string;
    idade: number;
    endereco: Endereco;
}

const pessoa: PessoaComEndereco = {
    nome: "Carlos",
    idade: 30,
    endereco: {
        rua: "Rua das Flores, 123",
        cidade: "São Paulo",
        estado: "SP"
    }
};

console.log(pessoa.endereco.cidade);  // Saída: São Paulo
```

- Aqui temos um objeto **`PessoaComEndereco`**, que contém um **objeto aninhado** `endereco` do tipo `Endereco`.
- TypeScript valida a estrutura do objeto, garantindo que `endereco` tenha as propriedades corretas (`rua`, `cidade`, `estado`).

---

### **5. Conclusão da Aula**

- **Arrays** e **objetos** são tipos fundamentais em TypeScript e JavaScript.
- TypeScript proporciona **tipagem estática** para garantir que os dados em arrays

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



# Implementações 
 # Curso de TypeScript!

### **Aula 1: Introdução ao TypeScript**

#### **1. O que é o TypeScript?**
- **Definição:**  
  TypeScript é uma linguagem de programação desenvolvida pela Microsoft que é um superset de JavaScript. Ou seja, todo código JavaScript válido também é válido em TypeScript, mas TypeScript adiciona funcionalidades extras, como a tipagem estática.
  
- **Por que usar TypeScript?**
  - **Tipagem Estática:** O TypeScript permite que você defina tipos para suas variáveis, parâmetros de função, e objetos, ajudando a prevenir erros antes da execução.
  - **Segurança:** Com a verificação de tipos em tempo de compilação, fica mais fácil detectar erros que poderiam ser difíceis de encontrar em JavaScript.
  - **Escalabilidade:** Em projetos grandes, o TypeScript oferece mais controle sobre o código, o que torna a manutenção e evolução mais fáceis.
  - **Ferramentas de Desenvolvimento:** O TypeScript oferece suporte aprimorado para IDEs (como o Visual Studio Code), oferecendo autocompletar, refatoração e navegação no código mais inteligente.
  
- **Diferença entre JavaScript e TypeScript:**
  - **JavaScript:** Linguagem de tipagem dinâmica, onde você não define tipos e o código é interpretado diretamente pelo navegador ou Node.js.
  - **TypeScript:** Linguagem de tipagem estática, onde você define tipos e o código é transpilado (convertido) para JavaScript, que pode ser executado no navegador ou em servidores Node.js.

#### **2. Vantagens do TypeScript**
- **Erro em Tempo de Compilação:** O TypeScript ajuda a encontrar erros antes de rodar o código.
- **IntelliSense e Auto-Completar:** Com as definições de tipo, as ferramentas de desenvolvimento podem fornecer uma experiência melhor de auto-completar e sugestões enquanto você codifica.
- **Facilidade de Refatoração:** O TypeScript facilita mudanças no código, uma vez que a tipagem estática ajuda a identificar rapidamente onde o código depende de determinadas estruturas.
- **Documentação Implícita:** Como você define tipos, isso serve como uma documentação para o código, tornando-o mais fácil de entender para outros desenvolvedores.

#### **3. Instalando e Configurando o TypeScript**

Agora, vamos aprender a instalar o TypeScript em nosso ambiente local.

**Passo 1: Instalar o Node.js e o npm**

Primeiro, certifique-se de ter o **Node.js** instalado no seu sistema, pois o TypeScript será instalado via npm (gerenciador de pacotes do Node). Você pode baixar o Node.js [aqui](https://nodejs.org).

Após instalar o Node.js, verifique se a instalação foi bem-sucedida executando os seguintes comandos no terminal:

```bash
node -v
npm -v
```

**Passo 2: Instalar o TypeScript Globalmente**

Agora, vamos instalar o TypeScript globalmente usando o npm:

```bash
npm install -g typescript
```

Isso vai instalar o compilador TypeScript no seu sistema.

**Passo 3: Verificar a Instalação do TypeScript**

Verifique se o TypeScript foi instalado corretamente:

```bash
tsc -v
```

Esse comando vai mostrar a versão do TypeScript instalada no seu computador.

#### **4. Criando um Projeto TypeScript**
Vamos criar um projeto básico para testar o TypeScript.

**Passo 1: Criar uma nova pasta para o projeto**

```bash
mkdir meu-projeto-ts
cd meu-projeto-ts
```

**Passo 2: Inicializar o projeto com npm**

Crie um arquivo `package.json` para o projeto:

```bash
npm init -y
```

**Passo 3: Criar um arquivo de configuração do TypeScript**

Execute o comando abaixo para gerar um arquivo `tsconfig.json`, que irá armazenar as configurações do compilador TypeScript:

```bash
tsc --init
```

Esse arquivo pode ser modificado para ajustar as configurações do seu projeto, como o diretório de saída dos arquivos compilados.

**Passo 4: Criar o primeiro arquivo TypeScript**

Crie um arquivo `index.ts` com o seguinte conteúdo:

```typescript
let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);
```

**Passo 5: Compilar o código TypeScript**

Agora, compile o código TypeScript para JavaScript com o comando:

```bash
tsc index.ts
```

Isso vai gerar um arquivo `index.js` com o código compilado. O arquivo JavaScript pode ser executado com Node.js:

```bash
node index.js
```

Isso deve exibir a mensagem `"Olá, TypeScript!"` no terminal.

---

### **Tarefa para Casa**
1. Instalar o Node.js e o TypeScript no seu computador.
2. Criar um novo projeto TypeScript e compilar um arquivo `index.ts` simples que mostre uma mensagem no console.
3. Testar o processo de compilação e execução para garantir que tudo está funcionando corretamente.

---

### **Conclusão da Aula 1**
Na Aula 1, aprendemos:
- O que é TypeScript e como ele se diferencia de JavaScript.
- As vantagens do uso do TypeScript em projetos.
- Como instalar o TypeScript e configurar um projeto básico.
- Como escrever e compilar o código TypeScript.

Na próxima aula, vamos explorar os tipos básicos em TypeScript e como utilizá-los no nosso código.

---

Agora, vamos para a **Aula 2** do curso de TypeScript! Neste módulo, vamos explorar os **tipos básicos** do TypeScript e como utilizá-los em nosso código.

---

### **Aula 2: Tipos Básicos em TypeScript**

#### **1. Tipos Primitivos em TypeScript**

Em TypeScript, assim como em JavaScript, temos tipos primitivos que representam valores simples. O TypeScript adiciona a possibilidade de definir explicitamente os tipos, oferecendo uma verificação de tipos mais rigorosa durante a compilação.

Aqui estão os tipos primitivos que vamos explorar:

##### **1.1. `number` (Número)**

O tipo `number` é usado para representar tanto números inteiros quanto flutuantes.

**Exemplo:**
```typescript
let idade: number = 25;
let preco: number = 9.99;
```

##### **1.2. `string` (Texto)**

O tipo `string` é usado para representar texto. Você pode usar aspas simples, duplas ou crase (backticks) para definir uma string.

**Exemplo:**
```typescript
let nome: string = "João";
let saudacao: string = `Olá, ${nome}!`;
```

##### **1.3. `boolean` (Booleano)**

O tipo `boolean` é usado para representar valores lógicos, ou seja, verdadeiro (`true`) ou falso (`false`).

**Exemplo:**
```typescript
let isActive: boolean = true;
let isComplete: boolean = false;
```

##### **1.4. `null` e `undefined`**

Esses tipos são usados para representar a ausência de valor.

- `null` indica a ausência intencional de um valor.
- `undefined` indica que uma variável foi declarada, mas não foi atribuída a nenhum valor.

**Exemplo:**
```typescript
let vazio: null = null;
let semDefinicao: undefined = undefined;
```

##### **1.5. `any`**

O tipo `any` é um tipo especial que pode representar qualquer valor. Ele é útil quando você não sabe qual tipo uma variável terá, mas deve ser usado com cuidado, pois perde as vantagens da tipagem estática.

**Exemplo:**
```typescript
let qualquer: any = 42;
qualquer = "Agora sou uma string";
qualquer = true;
```

##### **1.6. Tipos Literais**

Em TypeScript, você pode especificar um valor literal para uma variável. Isso significa que a variável pode receber apenas aquele valor específico.

**Exemplo:**
```typescript
let cor: "azul" = "azul"; // Só pode ser "azul"
cor = "verde"; // Erro: Não é possível atribuir 'verde' ao tipo 'azul'
```

#### **2. Tipos de Arrays e Tuplas**

##### **2.1. Arrays**

Em TypeScript, você pode definir o tipo dos elementos de um array. Isso ajuda a garantir que o array contenha apenas elementos do tipo esperado.

**Exemplo:**
```typescript
let numeros: number[] = [1, 2, 3];
let nomes: string[] = ["Ana", "Carlos", "João"];
```

Alternativamente, você pode usar a notação genérica:

```typescript
let frutas: Array<string> = ["maçã", "banana", "laranja"];
```

##### **2.2. Tuplas**

Uma tupla é um tipo especial de array que pode armazenar elementos de tipos diferentes em posições específicas. Ao contrário de um array comum, que pode ter qualquer tipo de elementos, a tupla tem uma estrutura fixa.

**Exemplo:**
```typescript
let pessoa: [string, number] = ["João", 25]; // Primeiro é uma string, segundo é um número
```

Tuplas também podem ter uma quantidade variável de elementos, desde que você defina os tipos na estrutura.

```typescript
let endereco: [string, number, string?] = ["Rua A", 100, "Apartamento 101"];
```

#### **3. Tipos de Funções**

Em TypeScript, você pode tipar tanto os parâmetros quanto o valor de retorno das funções. Isso garante que a função seja usada corretamente.

##### **3.1. Funções com Tipos de Parâmetros e Retorno**

**Exemplo de função com tipos:**
```typescript
function soma(a: number, b: number): number {
  return a + b;
}

let resultado = soma(10, 20);
console.log(resultado); // 30
```

##### **3.2. Função que não retorna nada (`void`)**

Se uma função não retornar um valor, você pode usar o tipo `void` para indicar que o valor de retorno é indefinido ou inexistente.

**Exemplo:**
```typescript
function exibirMensagem(mensagem: string): void {
  console.log(mensagem);
}

exibirMensagem("Olá, TypeScript!");
```

##### **3.3. Funções com parâmetros opcionais**

Em TypeScript, você pode tornar parâmetros de função opcionais, adicionando `?` depois do nome do parâmetro.

**Exemplo:**
```typescript
function saudacao(nome: string, idade?: number): string {
  if (idade) {
    return `Olá, ${nome}. Você tem ${idade} anos.`;
  } else {
    return `Olá, ${nome}!`;
  }
}

console.log(saudacao("Ana")); // Olá, Ana!
console.log(saudacao("Carlos", 30)); // Olá, Carlos. Você tem 30 anos.
```

#### **4. Operadores de Tipos**

Além de tipos básicos, TypeScript permite a utilização de operadores que combinam tipos de diferentes formas.

##### **4.1. Union Types (Tipos União)**

O TypeScript permite que uma variável aceite mais de um tipo. Isso é feito usando o operador `|`.

**Exemplo:**
```typescript
let valor: string | number;
valor = "Texto";
valor = 100; // Aceita tanto string quanto number
```

##### **4.2. Type Assertions (Afirmações de Tipo)**

Às vezes, você sabe mais sobre o tipo de uma variável do que o TypeScript. Nesse caso, você pode usar **type assertions** para afirmar que uma variável é de um tipo específico.

**Exemplo:**
```typescript
let valor: any = "Texto";
let comprimento: number = (valor as string).length; // Afirma que valor é do tipo string
```

#### **5. Exercício Prático**

Vamos praticar o que aprendemos criando um simples sistema de gerenciamento de usuários.

**Exemplo de código:**
```typescript
type Usuario = {
  nome: string;
  idade: number;
  ativo: boolean;
  email?: string; // email é opcional
};

let usuario1: Usuario = {
  nome: "Carlos",
  idade: 30,
  ativo: true,
  email: "carlos@example.com",
};

let usuario2: Usuario = {
  nome: "Ana",
  idade: 25,
  ativo: false,
};

console.log(usuario1);
console.log(usuario2);
```

#### **Tarefa para Casa**

1. Crie variáveis com tipos diferentes (`number`, `string`, `boolean`, `any`).
2. Crie uma função que receba um número e uma string, e retorne uma mensagem com o valor dos parâmetros.
3. Crie um tipo `Pessoa` que tenha os campos `nome`, `idade` e `email`, onde `email` é opcional. Crie alguns objetos com esse tipo e exiba-os no console.

---

### **Conclusão da Aula 2**

Na Aula 2, aprendemos:
- Os tipos primitivos do TypeScript e como usá-los (`number`, `string`, `boolean`, `null`, `undefined`, `any`).
- Como trabalhar com arrays e tuplas.
- Como tipar funções em TypeScript, incluindo parâmetros opcionais e valores de retorno.
- Como usar operadores de tipos como `union` e `type assertions`.

Na próxima aula, vamos explorar **Interfaces** e como elas ajudam a garantir a estrutura dos objetos em TypeScript.

---









Agora vamos para a **Aula 3** do curso de TypeScript! Nesta aula, vamos aprender sobre **Interfaces**, que são um dos conceitos centrais de TypeScript, permitindo que você defina a estrutura de objetos e classes de forma robusta.

---

### **Aula 3: Interfaces em TypeScript**

#### **1. O que são Interfaces?**

Uma **interface** em TypeScript é uma maneira de definir um contrato para objetos. Ela descreve a forma de um objeto, incluindo os tipos de suas propriedades e métodos. Ao usar interfaces, podemos garantir que um objeto tenha uma estrutura específica, o que ajuda a prevenir erros e melhora a legibilidade do código.

#### **2. Criando e Usando Interfaces**

##### **2.1. Definindo uma Interface Simples**

Uma interface é criada usando a palavra-chave `interface`, seguida pelo nome da interface. Dentro de suas chaves, você define os tipos das propriedades e métodos esperados.

**Exemplo:**
```typescript
interface Pessoa {
  nome: string;
  idade: number;
}

let pessoa1: Pessoa = {
  nome: "João",
  idade: 25
};

console.log(pessoa1);
```

**Explicação:**
- Criamos a interface `Pessoa`, que exige que os objetos do tipo `Pessoa` tenham uma propriedade `nome` do tipo `string` e uma propriedade `idade` do tipo `number`.
- Em seguida, criamos um objeto `pessoa1` que segue essa estrutura.

##### **2.2. Propriedades Opcionais em Interfaces**

Às vezes, você pode querer que uma propriedade seja opcional. Para isso, você pode usar o operador `?` após o nome da propriedade na interface.

**Exemplo:**
```typescript
interface Pessoa {
  nome: string;
  idade: number;
  email?: string; // Propriedade opcional
}

let pessoa2: Pessoa = {
  nome: "Ana",
  idade: 30
};

console.log(pessoa2);
```

**Explicação:**
- A propriedade `email` é opcional na interface `Pessoa`, então você pode criar objetos do tipo `Pessoa` sem fornecer um valor para ela.

##### **2.3. Métodos em Interfaces**

Além das propriedades, você também pode definir métodos em interfaces. Os métodos devem ser declarados sem o corpo (apenas assinatura).

**Exemplo:**
```typescript
interface Pessoa {
  nome: string;
  idade: number;
  saudacao(): string; // Método que retorna uma saudação
}

let pessoa3: Pessoa = {
  nome: "Carlos",
  idade: 28,
  saudacao: function() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
};

console.log(pessoa3.saudacao());
```

**Explicação:**
- A interface `Pessoa` agora tem um método chamado `saudacao`, que retorna uma string.
- O objeto `pessoa3` implementa esse método, que usa as propriedades `nome` e `idade`.

#### **3. Interfaces com Classes**

Uma das vantagens das interfaces é que você pode usá-las com classes, obrigando as classes a implementarem a estrutura definida pela interface.

##### **3.1. Implementando uma Interface em uma Classe**

Quando uma classe implementa uma interface, ela deve fornecer uma implementação para todos os métodos e propriedades descritos pela interface.

**Exemplo:**
```typescript
interface Animal {
  nome: string;
  som(): string;
}

class Cachorro implements Animal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  som(): string {
    return "Au Au!";
  }
}

let meuCachorro = new Cachorro("Rex");
console.log(meuCachorro.nome); // Rex
console.log(meuCachorro.som()); // Au Au!
```

**Explicação:**
- A interface `Animal` define uma propriedade `nome` e um método `som()`.
- A classe `Cachorro` implementa a interface `Animal` e fornece as implementações para `nome` e `som()`.

##### **3.2. Herança de Interfaces**

Assim como em classes, as interfaces também podem herdar de outras interfaces, permitindo que você crie hierarquias e reutilize definições.

**Exemplo:**
```typescript
interface Animal {
  nome: string;
  som(): string;
}

interface Mamifero extends Animal {
  tipoDePelo: string;
}

class Gato implements Mamifero {
  nome: string;
  tipoDePelo: string;

  constructor(nome: string, tipoDePelo: string) {
    this.nome = nome;
    this.tipoDePelo = tipoDePelo;
  }

  som(): string {
    return "Miau!";
  }
}

let meuGato = new Gato("Whiskers", "Curto");
console.log(meuGato.nome); // Whiskers
console.log(meuGato.som()); // Miau!
console.log(meuGato.tipoDePelo); // Curto
```

**Explicação:**
- A interface `Mamifero` herda da interface `Animal` e adiciona a propriedade `tipoDePelo`.
- A classe `Gato` implementa a interface `Mamifero` e fornece uma implementação para todas as propriedades e métodos exigidos.

#### **4. Tipos de Funções em Interfaces**

Assim como podemos definir propriedades e métodos em interfaces, também podemos definir assinaturas de funções.

**Exemplo:**
```typescript
interface Calculadora {
  (a: number, b: number): number;
}

let soma: Calculadora = (a, b) => a + b;
let subtrai: Calculadora = (a, b) => a - b;

console.log(soma(10, 5)); // 15
console.log(subtrai(10, 5)); // 5
```

**Explicação:**
- A interface `Calculadora` define a assinatura de uma função, que recebe dois parâmetros do tipo `number` e retorna um `number`.
- As funções `soma` e `subtrai` implementam essa assinatura.

#### **5. Exercício Prático**

Crie uma interface `Produto` com as propriedades `nome` (string), `preco` (number), e `quantidade` (number). Em seguida, crie um objeto que siga essa interface e mostre no console o valor total (preço * quantidade) do produto.

**Exemplo:**
```typescript
interface Produto {
  nome: string;
  preco: number;
  quantidade: number;
}

let produto: Produto = {
  nome: "Camiseta",
  preco: 39.90,
  quantidade: 3
};

let valorTotal = produto.preco * produto.quantidade;
console.log(`O valor total do(a) ${produto.nome} é: R$ ${valorTotal}`);
```

#### **Tarefa para Casa**

1. Crie uma interface `Carro` com as propriedades `marca`, `modelo`, `ano` e `cor`. Crie pelo menos dois objetos que implementem essa interface e mostre suas informações no console.
2. Crie uma interface `Pessoa` que tenha o método `falar()` e implemente a interface em uma classe `Funcionario`. A classe `Funcionario` deve implementar o método `falar()` e exibir o nome da pessoa e seu cargo.

---

### **Conclusão da Aula 3**

Na Aula 3, aprendemos sobre:
- O que são e como criar **Interfaces** em TypeScript.
- Como definir propriedades e métodos em interfaces.
- Como usar interfaces com **objetos** e **classes**.
- Como fazer **herança** de interfaces.
- Como definir **assinaturas de funções** dentro de interfaces.

Na próxima aula, vamos aprender sobre **Tipos Avançados** em TypeScript, como os tipos literais, genéricos, e outros recursos poderosos da linguagem.

---

Vamos para a **Aula 4** do curso de TypeScript! Nessa aula, vamos explorar **tipos avançados** em TypeScript, incluindo **tipos literais**, **tipos genéricos**, **tipos mapeados** e outros conceitos poderosos da linguagem. Esses recursos tornam o TypeScript ainda mais flexível e seguro, principalmente em projetos grandes.

---

### **Aula 4: Tipos Avançados em TypeScript**

#### **1. Tipos Literais**

Os **tipos literais** permitem que você defina um valor específico como o único valor válido para uma variável. Isso oferece mais controle sobre os valores que uma variável pode assumir.

##### **1.1. Tipos Literais com Strings e Números**

Ao usar tipos literais, você pode restringir uma variável para aceitar apenas um valor específico.

**Exemplo com string:**
```typescript
let cor: "azul" | "vermelho" | "verde";

cor = "azul";    // Válido
cor = "amarelo"; // Erro: Não é possível atribuir 'amarelo' ao tipo '"azul" | "vermelho" | "verde"'
```

**Exemplo com número:**
```typescript
let statusCode: 200 | 404 | 500;

statusCode = 200;  // Válido
statusCode = 404;  // Válido
statusCode = 4040; // Erro: Não é possível atribuir '4040' ao tipo '200 | 404 | 500'
```

**Explicação:**
- A variável `cor` pode ter apenas um dos valores literais: `"azul"`, `"vermelho"` ou `"verde"`.
- O mesmo vale para o `statusCode`, onde ele pode ser apenas 200, 404 ou 500.

#### **2. Tipos Genéricos**

Os **tipos genéricos** permitem criar componentes (funções, classes, interfaces) que podem trabalhar com múltiplos tipos de dados, mantendo a tipagem forte e segura.

##### **2.1. Funções Genéricas**

Em TypeScript, podemos usar a notação genérica (`<T>`) para criar funções que aceitam diferentes tipos de entrada e retornam o tipo correspondente.

**Exemplo de função genérica:**
```typescript
function identidade<T>(valor: T): T {
  return valor;
}

let numero = identidade(42);     // Tipo inferido: number
let texto = identidade("Olá");  // Tipo inferido: string
```

**Explicação:**
- A função `identidade` recebe um parâmetro `valor` de tipo genérico `T` e retorna o mesmo tipo.
- TypeScript infere automaticamente o tipo de `T` com base no valor passado para a função.

##### **2.2. Funções Genéricas com Tipos Específicos**

Você também pode restringir os tipos de um parâmetro genérico com a palavra-chave `extends`.

**Exemplo:**
```typescript
function soma<T extends number | string>(a: T, b: T): T {
  return (a as any) + (b as any);
}

let resultado = soma(10, 20);     // Válido, retorna 30
let resultadoTexto = soma("A", "B"); // Válido, retorna "AB"
```

**Explicação:**
- A função `soma` aceita somente `number` ou `string` como parâmetros, e o retorno será do mesmo tipo.

##### **2.3. Tipos Genéricos em Classes**

Classes também podem usar tipos genéricos. Isso é útil quando queremos que a classe trabalhe com diferentes tipos de dados.

**Exemplo de classe genérica:**
```typescript
class Caixa<T> {
  valor: T;

  constructor(valor: T) {
    this.valor = valor;
  }

  exibirValor(): T {
    return this.valor;
  }
}

let caixaNumero = new Caixa(10);
let caixaTexto = new Caixa("Item");

console.log(caixaNumero.exibirValor()); // 10
console.log(caixaTexto.exibirValor()); // Item
```

**Explicação:**
- A classe `Caixa` usa o tipo genérico `T`, permitindo que você crie instâncias de `Caixa` com diferentes tipos de valor (neste caso, `number` e `string`).

#### **3. Tipos de União (Union Types)**

Os **tipos de união** permitem que uma variável tenha mais de um tipo. Em vez de restringir a variável a um tipo específico, você pode definir uma lista de tipos possíveis.

**Exemplo:**
```typescript
let id: string | number;

id = "abc123";  // Válido
id = 12345;     // Válido
id = true;      // Erro: Não é possível atribuir 'true' ao tipo 'string | number'
```

**Explicação:**
- A variável `id` pode ser uma `string` ou um `number`, mas não pode ser um valor de outro tipo (como `boolean`).

#### **4. Tipos de Interseção (Intersection Types)**

Os **tipos de interseção** permitem combinar vários tipos em um único tipo. Isso significa que uma variável pode ter as propriedades de mais de um tipo.

**Exemplo:**
```typescript
interface Carro {
  marca: string;
  modelo: string;
}

interface Pessoa {
  nome: string;
  idade: number;
}

type CarroPessoa = Carro & Pessoa;

let pessoaCarro: CarroPessoa = {
  nome: "Carlos",
  idade: 30,
  marca: "Fiat",
  modelo: "Uno"
};

console.log(pessoaCarro);
```

**Explicação:**
- A variável `pessoaCarro` deve ter todas as propriedades de `Carro` e `Pessoa` ao mesmo tempo.
- Usamos o operador `&` para combinar os tipos.

#### **5. Tipos Mapeados (Mapped Types)**

Os **tipos mapeados** permitem criar novos tipos a partir de um tipo existente, aplicando transformações nas suas propriedades. Esse recurso é útil quando você deseja aplicar uma alteração em todos os membros de um tipo.

**Exemplo:**
```typescript
type Pessoa = {
  nome: string;
  idade: number;
};

type PessoaComStatus = {
  [K in keyof Pessoa]: Pessoa[K]; // Mapeando as propriedades de Pessoa
};

let pessoaComStatus: PessoaComStatus = {
  nome: "Ana",
  idade: 25
};

console.log(pessoaComStatus);
```

**Explicação:**
- Usamos o tipo mapeado para criar um novo tipo `PessoaComStatus` baseado em `Pessoa`, mas você pode transformar ou adicionar mais características.
- O tipo `PessoaComStatus` tem as mesmas propriedades de `Pessoa`, e isso pode ser estendido para fazer ajustes mais complexos.

#### **6. Exercício Prático**

1. Crie uma função genérica `concatena` que aceite dois parâmetros de tipo genérico e os retorne concatenados (use o tipo `string` para a união).
2. Crie uma classe genérica `Armazem` que tenha um método `adicionar` para adicionar um item e um método `listar` para listar todos os itens armazenados.
3. Crie um tipo `Funcionario` que tenha as propriedades `nome`, `cargo` e `salario`. Crie um tipo de interseção que combine `Funcionario` com um tipo `Departamento`, que tenha as propriedades `nomeDepartamento` e `localizacao`.

---

### **Conclusão da Aula 4**

Na Aula 4, aprendemos sobre:
- **Tipos Literais**, que restringem variáveis a valores específicos.
- **Tipos Genéricos**, que tornam funções e classes flexíveis e reutilizáveis.
- **Tipos de União**, permitindo que uma variável tenha múltiplos tipos possíveis.
- **Tipos de Interseção**, combinando tipos para criar novos tipos compostos.
- **Tipos Mapeados**, permitindo transformar tipos de maneira dinâmica.

Na próxima aula, vamos aprender sobre **Namespaces e Módulos** em TypeScript, que são essenciais para organizar e modularizar o código.

---
Vamos para a **Aula 5** do curso de TypeScript! Nesta aula, vamos explorar **Namespaces e Módulos**, que são conceitos essenciais para organizar seu código de forma eficiente em projetos maiores.

---

### **Aula 5: Namespaces e Módulos em TypeScript**

#### **1. O que são Namespaces?**

**Namespaces** (ou "espaços de nomes") são uma maneira de organizar o código em TypeScript. Eles ajudam a evitar conflitos de nomes em projetos maiores, permitindo que você agrupe funções, variáveis, interfaces e classes dentro de um único escopo.

Em TypeScript, um **namespace** é definido usando a palavra-chave `namespace`.

##### **1.1. Criando um Namespace**

Dentro de um `namespace`, você pode declarar funções, classes e variáveis. Tudo dentro de um namespace está acessível com o nome do namespace.

**Exemplo:**
```typescript
namespace Matemática {
  export function soma(a: number, b: number): number {
    return a + b;
  }

  export function multiplica(a: number, b: number): number {
    return a * b;
  }
}

console.log(Matemática.soma(2, 3)); // 5
console.log(Matemática.multiplica(2, 3)); // 6
```

**Explicação:**
- Criamos um namespace `Matemática` com duas funções, `soma` e `multiplica`.
- As funções dentro de um namespace não são acessíveis fora dele a menos que sejam explicitamente **exportadas** usando a palavra-chave `export`.

##### **1.2. Acessando membros de um Namespace**

Para acessar os membros de um namespace, basta usar o nome do namespace seguido por um ponto.

**Exemplo:**
```typescript
namespace Geometria {
  export const pi: number = 3.14;

  export function areaCirculo(raio: number): number {
    return pi * raio * raio;
  }
}

console.log(Geometria.areaCirculo(5));  // 78.5
```

**Explicação:**
- A constante `pi` e a função `areaCirculo` são acessíveis fora do namespace `Geometria` porque foram exportadas.

#### **2. O que são Módulos?**

Módulos são outra maneira de organizar o código em TypeScript, mas diferentemente dos namespaces, os módulos são arquivos separados. Eles permitem importar e exportar funcionalidades entre arquivos, o que é essencial para dividir grandes projetos em partes menores e mais gerenciáveis.

##### **2.1. Como Usar Módulos**

Em TypeScript, um **módulo** é qualquer arquivo que use `export` ou `import`. O `export` permite tornar um membro acessível fora do arquivo, e o `import` permite importar esses membros em outros arquivos.

**Exemplo de Exportação e Importação de Funções:**

Arquivo `math.ts` (módulo de exportação):
```typescript
// math.ts
export function soma(a: number, b: number): number {
  return a + b;
}

export function multiplica(a: number, b: number): number {
  return a * b;
}
```

Arquivo `main.ts` (módulo de importação):
```typescript
// main.ts
import { soma, multiplica } from './math';

console.log(soma(2, 3));      // 5
console.log(multiplica(2, 3)); // 6
```

**Explicação:**
- No arquivo `math.ts`, as funções `soma` e `multiplica` são **exportadas**.
- No arquivo `main.ts`, essas funções são **importadas** para serem usadas.

##### **2.2. Exportando e Importando Tipos**

Além de funções e variáveis, você também pode exportar e importar **tipos**, como interfaces e tipos personalizados.

**Exemplo:**

Arquivo `interfaces.ts`:
```typescript
// interfaces.ts
export interface Pessoa {
  nome: string;
  idade: number;
}
```

Arquivo `app.ts`:
```typescript
// app.ts
import { Pessoa } from './interfaces';

let pessoa: Pessoa = {
  nome: "Carlos",
  idade: 28
};

console.log(pessoa);
```

**Explicação:**
- No arquivo `interfaces.ts`, a interface `Pessoa` é exportada.
- No arquivo `app.ts`, a interface `Pessoa` é importada e usada para tipar o objeto `pessoa`.

##### **2.3. Módulos com Exportação Padrão (default export)**

TypeScript também permite que você use **exportação padrão** para exportar um único valor por módulo, o que facilita a importação.

**Exemplo:**

Arquivo `math.ts`:
```typescript
// math.ts
export default function soma(a: number, b: number): number {
  return a + b;
}
```

Arquivo `main.ts`:
```typescript
// main.ts
import soma from './math';

console.log(soma(2, 3));  // 5
```

**Explicação:**
- No arquivo `math.ts`, a função `soma` é exportada como padrão, com a palavra-chave `default`.
- No arquivo `main.ts`, você pode importar a função sem usar chaves, já que ela foi exportada como padrão.

#### **3. Diferença entre Namespaces e Módulos**

Embora **namespaces** e **módulos** sejam usados para organizar o código, existem diferenças importantes:

- **Namespaces** são mais usados quando você quer manter tudo dentro de um único arquivo e evitar colisões de nomes, mas são mais comuns em projetos menores ou antigos.
- **Módulos** são recomendados para projetos maiores, pois permitem que você divida o código em arquivos separados. Além disso, módulos possuem suporte nativo no JavaScript moderno (ES6), facilitando a interoperabilidade com outros projetos.

#### **4. Exercício Prático**

1. Crie um **namespace** chamado `Calculadora` com funções `somar`, `subtrair`, `multiplicar` e `dividir`.
2. Crie dois **módulos**:
   - O primeiro módulo deve exportar uma interface `Produto` com as propriedades `nome`, `preco` e `quantidade`.
   - O segundo módulo deve importar a interface `Produto` e criar um objeto que implemente essa interface.
3. Crie uma função dentro de um módulo que calcule a área de um círculo e outra que calcule a área de um quadrado. Importe e utilize essas funções em outro arquivo.

---

### **Conclusão da Aula 5**

Na Aula 5, aprendemos sobre:
- **Namespaces**, que permitem organizar o código dentro de um único escopo, exportando e acessando membros de forma controlada.
- **Módulos**, que dividem o código em arquivos separados, permitindo exportar e importar funcionalidades entre arquivos.
- A diferença entre **Namespaces** e **Módulos**, e quando cada um é mais adequado para seu projeto.
---








































