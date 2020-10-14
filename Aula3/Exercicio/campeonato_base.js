let times = [{
    nome: "Liverpool",
    vitorias: 23,
    empates: 7,
    derrotas: 1,
    golsproprio: 70,
    golscontra: 52
}, {
    nome: "Manchester City",
    vitorias: 24,
    empates: 2,
    derrotas: 4,
    golsproprio: 79,
    golscontra: 21
}, {
    nome: "Tottenhan",
    vitorias: 20,
    empates: 1,
    derrotas: 9,
    golsproprio: 57,
    golscontra: 32
}, {
    nome: "Arsenal",
    vitorias: 18,
    empates: 6,
    derrotas: 6,
    golsproprio: 63,
    golscontra: 39
}, {
    nome: "Manchester United",
    vitorias: 17,
    empates: 7,
    derrotas: 6,
    golsproprio: 58,
    golscontra: 40
}, {
    nome: "Chelsea",
    vitorias: 17,
    empates: 6,
    derrotas: 7,
    golsproprio: 50,
    golscontra: 33
}];

//1 - Traga somente times com 20 vitórias ou mais
console.log('1. Times com 20 vitórias ou mais:');
// Utiliza a função nativa filter do js
let timesMais20Win = times.filter(time => {
    return time.vitorias >= 20;
});
console.log(timesMais20Win);

//2 - Traga somente os nomes dos times
console.log('2. Nome dos times:');
// Utiliza a função nativa map do js
let nomeTimes = times.map(time => time.nome);
console.log(nomeTimes);

//3 - Traga somente os nomes dos times
console.log('3. Times Cadastrados:');
// Utiliza a função nativa push do js

times.push({
    nome: "Wolves",
    vitorias: 12,
    empates: 8,
    derrotas: 10,
    golsproprio: 38,
    golscontra: 36
});
console.log(times)

//4 -  Mostre o nome e a quantidade de jogos(vitorias, empates e derrotas), quantidade de vitorias, empates e derrotas de um time
console.log('4. Dados dos times:');
// Utiliza a função nativa map do js

let dadosTimes = times.map(time => {
    return {
        Nome: time.nome,
        TotalJogos: time.vitorias + time.derrotas + time.empates,
        Vitorias: time.vitorias,
        Derrotas: time.derrotas,
        Empates: time.empates,
        SaldoDeGols:time.golsproprio - time.golscontra

    }
});
console.log(dadosTimes);

//5 - Informe a quantidade de jogos do campeonato
console.log('5. Numero de Jogos do Campeonato:');
// Utiliza a função nativa reduce do js    

let totalJogosCampeonato = times.reduce((soma, time) => {
        return soma + parseInt(time.vitorias) + parseInt(time.empates/2)
    }, 0)
    console.log(totalJogosCampeonato);