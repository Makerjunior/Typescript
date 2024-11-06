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