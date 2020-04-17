const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const idadesUsuarios = usuarios.map(item => item.idade);
const maiorIdade = usuarios.filter(item => item.idade > 18 && item.empresa === 'Rocketseat');
const google = usuarios.find(item => item.empresa === 'Google')

const alteradoIdade = usuarios.map( item => {
     const novoStatus = {...item};
     novoStatus.idade = novoStatus.idade * 2;
     return novoStatus;
})

const res = alteradoIdade.filter(item => item.idade < 50);


console.log(res)