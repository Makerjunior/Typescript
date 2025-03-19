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
  default:
    console.log("Dia inválido");
}

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
