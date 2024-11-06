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

Isso conclui nossa aula sobre **Generics**! Se você tiver dúvidas ou quiser ver mais exemplos práticos, estou à disposição para ajudar!