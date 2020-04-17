const arr = [1, 2, 3, 4, 5];

const result = arr.map((item) => {
 return item + 10;
});

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => {
     return usuario.idade;
};

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => (
    {nome, idade} 
 );

//mostraUsuario(nome, idade);
//mostraUsuario(nome);

// 3.4
const promise = () => {
     return new Promise((resolve, reject) => resolve());
}


console.log(result); //Resultado Caso 1
console.log(mostraIdade(usuario)); // Resultado Caso 2
console.log(mostraUsuario(nome, idade)); // Resultado Caso 3
console.log(mostraUsuario(nome)); // Resultado Caso 3
console.log(promise()); //Resultado Caso 4

