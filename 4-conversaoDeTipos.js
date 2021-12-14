console.log("Conversão de Tipos");

console.log("ano" + 2021); // ano2021 - quando tentamos somar uma string com um numero, o interpretador entende o sinal de + "mais" como sinal para concatenação
console.log("2" + "2"); // 22 - como o sinal de mais "+" é também reservado, então o interpretador não tenta a conversão dos numeros entre aspas (String para Numero), é apenas feita concatenação
console.log(parseInt("2") + parseInt("2")); // 4 - convertendo as strings para Numero, então o interpretador utiliza o sinal + para soma, e não mais para concatenar

console.log("10" / "2"); // 5 - como a barra "/" não é reservada, o interpretador dá seu jeito e converste automatico as Strings para numero
console.log("Hellysamar" / "2"); // NaN (Not a Number) - como a String "Hellysamar" não é um numero, o interpretador não consegue fazer essa conversão, e não finaliza a execução por não ser possivel faze-la.

console.log(6.5); // 6.5 - o uso do ponto entre 2 ou mais numeros resulta em um Numero quebrado (com casa decimal), como 3/2 = 1.5 esse ponto define o "Ponto flutuante"
console.log(6,5); // 6 5 - a virgula (,) é reservada, pois referisse a espaçamento, então não é como comumente usamos para numeros ñ inteiros.
