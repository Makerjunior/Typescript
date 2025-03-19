

# Aula sobre **`switch` case** em TypeScript

O **`switch`** é uma estrutura de controle usada para executar diferentes partes de código com base em uma expressão. Ela pode ser mais eficiente que uma série de **`if`** e **`else if`**, especialmente quando temos várias condições possíveis para uma mesma variável.

### Objetivo da Aula:
- Aprender como usar o **`switch` case** em TypeScript.
- Entender como o **`switch`** pode ser utilizado para verificar múltiplos valores de uma variável.
- Explorar casos simples e avançados.

---

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