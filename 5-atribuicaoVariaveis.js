console.log("Trabalhando com atribuição de variáveis");
const idade = 28;
const nome = "Hellysamar";
const sobrenome = "Araujo";

console.log(nome + sobrenome); // HellysamarAraujo - concatenando as Strings sem um espaço na variavel, fica dessa forma
console.log(nome + " " + sobrenome); // Hellysamar Araujo - usando concatenação com String contendo espaço
console.log(nome, sobrenome); // Hellysamar Araujo - como a virgula é resevada é usada para espaçamento, ela serve como espaço entre as Strings
console.log(`Meu nome é ${nome} ${sobrenome}`); // Meu nome é Hellysamar Araujo - a forma mais comum é essa, onde colocamos as variaveis dentro dos colchetes a frente do Cifrão, e sendo informadas entre as cráses.
//----------------------ˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆ<<<>>> Interpolação


let versao = 1.0;
versao = 1.1;
console.log("versao") // 1.1 - pois a variável "versao" foi alterada!

const sexo = "masculino";
sexo = "feminino";

console.log("sexo") // masculino - é impresso "masculino" por a variável ter sido declarada como const"ante", assim esse não pode ser alterada, para isso ela deveria ser "let"

// devemos colocar o nome da variável o mais clara possivel, para que não seja difil sua alteração no futuro, se assim for necessário

// a variavel do tipo Const não pode ser alterada