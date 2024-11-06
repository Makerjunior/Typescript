**Tipos Avançados e Utilitários em TypeScript**. Nesta aula, vamos explorar como o TypeScript lida com tipos mais complexos e como você pode usar os tipos avançados e as utilidades para tornar seu código mais flexível e robusto. Isso inclui tipos como **uniões**, **interseções**, **tipos literais**, **tipos genéricos avançados** e **tipos utilitários**.

---

### **Aula: Tipos Avançados e Utilitários em TypeScript**

#### **Objetivo da Aula:**
- Explorar **tipos avançados** como uniões, interseções e tipos literais.
- Aprender a utilizar **tipos genéricos avançados** para criar funções e classes mais flexíveis.
- Compreender como os **tipos utilitários** podem ajudar a manipular tipos de forma dinâmica e eficiente.
- Entender como utilizar **type guards** para estreitar tipos em tempo de execução.

---

### **1. Tipos de União (Union Types)**

O **tipo de união** (`|`) permite que uma variável tenha um valor de **vários tipos diferentes**. É útil quando uma variável pode ser de mais de um tipo, e o TypeScript irá permitir que a variável tenha qualquer um dos tipos definidos.

#### **Sintaxe de União:**

```typescript
let variavel: Tipo1 | Tipo2;
```

- Aqui, a variável pode ser de **Tipo1** ou **Tipo2**.

#### **Exemplo 1: Tipos de União**

```typescript
function formatarIdade(idade: number | string): string {
    if (typeof idade === "number") {
        return `Idade em anos: ${idade}`;
    } else {
        return `Idade em texto: ${idade}`;
    }
}

console.log(formatarIdade(25));    // Saída: Idade em anos: 25
console.log(formatarIdade("25"));  // Saída: Idade em texto: 25
```

- A função `formatarIdade` aceita tanto um `number` quanto uma `string`, e o TypeScript usa **type guards** (no caso, o `typeof`) para determinar qual tipo está sendo passado no momento da execução.

---

### **2. Tipos de Interseção (Intersection Types)**

O **tipo de interseção** (`&`) permite combinar **múltiplos tipos** em um único. A variável deve cumprir todos os requisitos dos tipos combinados, ou seja, deve ter todas as propriedades dos tipos envolvidos.

#### **Sintaxe de Interseção:**

```typescript
let variavel: Tipo1 & Tipo2;
```

- Aqui, a variável deve ter todas as propriedades e métodos dos **dois tipos**.

#### **Exemplo 2: Tipos de Interseção**

```typescript
interface Pessoa {
    nome: string;
    idade: number;
}

interface Contato {
    email: string;
    telefone: string;
}

type PessoaComContato = Pessoa & Contato;

const pessoaComContato: PessoaComContato = {
    nome: "Maria",
    idade: 28,
    email: "maria@email.com",
    telefone: "123-456-789"
};

console.log(pessoaComContato);
```

- A `PessoaComContato` é um tipo resultante da **interseção** de `Pessoa` e `Contato`, combinando as propriedades de ambas as interfaces.

---

### **3. Tipos Literais (Literal Types)**

**Tipos literais** permitem que você restrinja uma variável a um conjunto específico de **valores possíveis**. Ao contrário de um tipo genérico, que pode ter qualquer valor de um tipo, o tipo literal define valores fixos.

#### **Sintaxe de Tipos Literais:**

```typescript
let variavel: "valor1" | "valor2" | "valor3";
```

- A variável pode ser apenas um dos valores específicos definidos.

#### **Exemplo 3: Tipos Literais**

```typescript
type Direcao = "norte" | "sul" | "leste" | "oeste";

function mover(direcao: Direcao): void {
    console.log(`Movendo para o ${direcao}`);
}

mover("norte");  // Saída: Movendo para o norte
mover("sul");    // Saída: Movendo para o sul
// mover("cima");  // Erro: Argumento do tipo 'cima' não pode ser atribuído ao parâmetro do tipo 'Direcao'.
```

- O tipo `Direcao` permite que a variável `direcao` seja **restrita** a um conjunto específico de valores (`"norte"`, `"sul"`, `"leste"`, ou `"oeste"`).

---

### **4. Tipos Genéricos Avançados**

Os **tipos genéricos** são úteis quando queremos criar funções e classes que possam operar em **diversos tipos**. No entanto, também podemos usar **restrições** e **condições** em tipos genéricos para tornar nosso código ainda mais flexível e seguro.

#### **Sintaxe de Tipos Genéricos com Restrições:**

```typescript
function nomeDaFuncao<T extends TipoBase>(parametro: T): T {
    // Corpo da função
}
```

- O tipo `T` deve ser um **subtipo** de `TipoBase`.

#### **Exemplo 4: Tipos Genéricos com Restrições**

```typescript
function imprimir<T extends { nome: string }>(objeto: T): void {
    console.log(objeto.nome);
}

const pessoa = { nome: "Carlos", idade: 30 };
imprimir(pessoa);  // Saída: Carlos

const produto = { nome: "Produto X", preco: 100 };
imprimir(produto);  // Saída: Produto X
```

- A função `imprimir` recebe um tipo genérico `T`, mas com a restrição de que `T` deve ter a propriedade `nome` (definida por `{ nome: string }`).

#### **Exemplo 5: Tipos Genéricos com Condições**

Você também pode usar **condições** para criar tipos genéricos mais complexos com base em um tipo de entrada.

```typescript
type Retorno<T> = T extends string ? string : number;

function processar<T>(valor: T): Retorno<T> {
    if (typeof valor === "string") {
        return valor.toUpperCase();  // Retorna uma string
    } else {
        return valor * 2;  // Retorna um número
    }
}

console.log(processar("Olá"));  // Saída: OLÁ
console.log(processar(10));     // Saída: 20
```

- Aqui, o tipo de retorno da função `processar` é condicionado ao tipo de `T`. Se `T` for uma `string`, o retorno será uma `string`; se for um `number`, o retorno será um `number`.

---

### **5. Tipos Utilitários em TypeScript**

O TypeScript oferece uma série de **tipos utilitários** para transformar e manipular tipos de maneira eficiente. Alguns dos utilitários mais comuns incluem:

#### **`Partial`** – Torna todos os membros de um tipo opcionais.

```typescript
interface Usuario {
    nome: string;
    idade: number;
}

const usuarioParcial: Partial<Usuario> = { nome: "Ana" };
```

#### **`Required`** – Torna todos os membros de um tipo obrigatórios.

```typescript
const usuarioObrigatorio: Required<Usuario> = { nome: "Ana", idade: 25 };
```

#### **`Readonly`** – Torna todos os membros de um tipo somente leitura (imutáveis).

```typescript
const usuarioReadonly: Readonly<Usuario> = { nome: "Carlos", idade: 30 };
// usuarioReadonly.nome = "Roberto";  // Erro: não pode modificar porque é readonly.
```

#### **`Record`** – Cria um tipo de objeto com chaves de um tipo específico e valores de outro tipo.

```typescript
type ProdutoPrecos = Record<string, number>;

const precos: ProdutoPrecos = {
    "produto1": 10.99,
    "produto2": 20.49
};
```

#### **`Pick`** – Cria um tipo selecionando um subconjunto de propriedades de um tipo.

```typescript
type UsuarioResumo = Pick<Usuario, "nome">;

const usuarioResumo: UsuarioResumo = { nome: "Maria" };
```

#### **`Omit`** – Cria um tipo omitindo um subconjunto de propriedades de um tipo.

```typescript
type UsuarioSemIdade = Omit<Usuario, "idade">;

const usuarioSemIdade: UsuarioSemIdade = { nome: "Pedro" };
```

---

### **6. Type Guards em TypeScript**

**Type Guards** são usados para restringir um tipo a um subconjunto mais específico durante a execução do código. Com o uso de `typeof`, `instanceof` ou outras verificações personalizadas, podemos garantir que estamos lidando com o tipo correto.

#### **Exemplo 6: Type Guard com `typeof`**

```typescript
function mostrarTipo(valor: number | string): void {
    if (typeof valor === "string") {
        console.log(`É uma string: ${valor}`);
    } else {
        console.log(`É um número: ${valor}`);
    }
}

mostrarTipo("Texto");  // Saída: É uma string: Texto
mostrarTipo