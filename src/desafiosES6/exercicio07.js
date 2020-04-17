//  Exercicio 03
// import axios from 'axios';

// class Github {
//     static async getRepositories(repo) {
//     await axios.get(`https://api.github.com/repos/${repo}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Repositório não existe');
//         })
//     }
// }
// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');
   


// Exercicio 02
// import axios from 'axios';
// async function getUserFromGithub(user) {
//     await axios.get(`https://api.github.com/users/${user}`)
//          .then(response => {
//             console.log(response.data);
//          })
//         .catch(err => {
//             console.log('Usuário não existe');
//         })
// }

// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');


//EXERCICIO 01 Funão delay aciona o .then após 1s
//const delay = () => new Promise(resolve => setTimeout(resolve('OK'), 1000));

// async function umPorSegundo() {
//  await delay().then(() => {console.log('1s');});
//  await delay().then(() => {console.log('2s'); });
//  await delay().then(() => {console.log('3s'); });
// }

// const umPorSegundo = async () => {
//     await delay().then(() => {console.log('1s_');});
//     await delay().then(() => {console.log('2s_'); });
//     await delay().then(() => {console.log('3s_'); });
// };

// const umPorSegundo = async () => {
//     console.log(await delay() + ' em 1s');
//     console.log(await delay() + ' em 2s');
//     console.log(await delay() + ' em 3s');
//     };


// umPorSegundo();


