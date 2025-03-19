Exemplos práticos para cada tipo de laço (`for`, `for...in` e `for...of`) em TypeScript, com explicações passo a passo.

### **1. Laço `for`**

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

Esses exemplos ilustram como você pode utilizar cada tipo de laço de forma eficiente em diferentes cenários.