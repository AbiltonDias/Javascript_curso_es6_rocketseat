const usuario = {
     nome: 'Rocketseat',
     endereco: {
     cidade: 'Rio do Sul',
     estado: 'SC',
     }
};

const {nome, endereco: {cidade, estado}} = usuario // Isso é desistruturação

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC


function mostraInfo({nome, idade}) {
     return `${nome} tem ${idade} anos.`;
}
//const {nome, idade} = { return `${nome} tem ${idade} anos.`}

console.log(mostraInfo({ nome: 'Diego', idade: 23 }))
    