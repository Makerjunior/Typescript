// Run: deno run src/main.ts
function alerta(): void {
    console.log('Programa em execução');
                
}

alerta();
       
function somar(): number {
    return 10 + 20;
}

let resultado = somar();
console.log(resultado);  


function subtrair(a: number, b: number): number {
    return a - b;
}

let resultado2 = subtrair(20, 10);
console.log(resultado2); 




// Definindo a interface para o objeto
interface Pessoa {
    id: number;
    nome: string;
    idade: number;
  }
  
  // Criando um array de objetos do tipo Pessoa
  const pessoas: Pessoa[] = [
    { id: 1, nome: 'João', idade: 25 },
    { id: 2, nome: 'Maria', idade: 30 },
    { id: 3, nome: 'Pedro', idade: 22 },
  ];
  
  // Função para buscar uma pessoa pelo id
  function buscarPessoa(id: number): Pessoa | undefined {
    for (let i = 0; i < pessoas.length; i++) {
      if (pessoas[i].id === id) {
        return pessoas[i]; // Retorna a pessoa encontrada
      }
    }
    return undefined; // Retorna undefined se não encontrar
  }
  
  // Exemplo de uso
  const pessoaBuscada = buscarPessoa(2);
  
  if (pessoaBuscada) {
    console.log(`Pessoa encontrada: ${pessoaBuscada.nome}, ${pessoaBuscada.idade} anos.`);
  } else {
    console.log('Pessoa não encontrada.');
  }
