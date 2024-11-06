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

