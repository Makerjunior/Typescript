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

