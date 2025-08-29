let num = [5, 8, 2];
num[3] = 6; //cria um novo elemento no índice indicado por []
num.push(7); //cria um novo elemento para o array
num.sort(); //coloca os elementos em ordem crescente
console.log(`Nosso vetor é o ${num}`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
console.log(`O vetor tem ${num.length} posições`);
let pos = num.indexOf(8); //indica em qual posição está o elemento
console.log(`O valor 8 está na posição ${pos}`);
