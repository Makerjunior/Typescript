Aula focada no laço **`while`** e suas variações, como o **`do...while`**, explicando sua sintaxe, funcionamento e boas práticas com exemplos práticos em TypeScript.

---

### **Aula: O Laço `while` e Suas Variações em TypeScript**

#### **Objetivo da Aula:**
- Compreender o funcionamento do laço `while` em TypeScript.
- Explorar a variação `do...while` e quando ela é mais adequada.
- Aplicar essas estruturas de repetição em exemplos práticos.

---

### **1. Introdução ao Laço `while`**

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

