const senhaCorreta = "12345";
let senha: string = '';

do {
    senha = "45678"; 
    console.log(`Senha digitada ${senha}`);
    // Senha incorreta, você pode trocar para testar outras senhas
    if (senha !== senhaCorreta) {
        console.log("Senha incorreta, tente novamente.");
        console.log("Digite uma senha valida");
        break;
    }
} while (senha !== senhaCorreta);

console.log("Senha correta! Acesso concedido.");

