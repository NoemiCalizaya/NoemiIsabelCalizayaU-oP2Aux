'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
        ],
        [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
// -----------------------------------------------------------------------------------
// 1. Cree un array de jugadores para cada equipo
//(nombre a las variables como 'players1' y 'players2')
const {
    players: [item1, item2]
} = game; 

const players1 = item1;
const players2 = item2;
// ----------------------------------------------------------------------------------
// 2. El primer jugador en cualquier conjunto de jugadores es el portero y los demás 
//son jugadores de campo. Para el Bayern de Múnich (team 1) cree una variable 
//'gk' con el nombre del portero y un array 'fieldPlayers' con los 10 restantes
//jugadores de campo
const [
    portero, 
    player1, 
    player2,
    player3,
    player4,
    player5,
    player6, 
    player7, 
    player8, 
    player9,
    player10
] = players1;

const gk = portero;

const fieldPlayers = [
    player1, 
    player2, 
    player3, 
    player4, 
    player5, 
    player6, 
    player7, 
    player8, 
    player9, 
    player10
];

/* console.log(gk);
console.log(fieldPlayers); */
// --------------------------------------------------------------------------------
// 3. Cree una matriz 'allPlayers' que contenga a todos los jugadores de ambos 
//equipos (22 jugadores)

const [
    porteroTeam2,
    player1Team2, 
    player2Team2,
    player3Team2,
    player4Team2,
    player5Team2,
    player6Team2, 
    player7Team2, 
    player8Team2, 
    player9Team2,
    player10Team2
] = players2;

const allPlayers = [
    [ portero, player1, player2, player3, player4, player5, player6, player7, player8, player9, player10],
    [ porteroTeam2, player1Team2, player2Team2, player3Team2, player4Team2, player5Team2, player6Team2, player7Team2, player8Team2, player9Team2, player10Team2]
];

//console.log(allPlayers);
// ----------------------------------------------------------------------------------------------
// 4. Durante el partido, el Bayern de Múnich (team 1) utilizó 3 jugadores suplentes. 
//Así que crea un nuevo array ('players1Final') que contiene todos los jugadores 
//originales del equipo1 más 'Thiago', 'Coutinho' y 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//console.log(players1Final);
// -----------------------------------------------------------------------------------------------
// 5. Basado en el objeto game.odds, cree una variable para cada cuota (llamada
//'team1', 'draw' y 'team2')
const {
    odds: {
        team1, x, team2
    }
} = game;

const Team1 = team1;
const draw = x;
const Team2 = team2;

//console.log(Team1, draw, Team2);
// ----------------------------------------------------------------------------------------------
// 6. Cree una función ('printGoals') que reciba un número arbitrario de nombres de 
//jugadores (no un array) e imprime cada uno de ellos en la consola, junto con el
//número de goles que marco cada uno (pasar como argumento solo nombres de 
//jugadores que hayan marcado al menos un gol, revise los datos del objeto ‘game’ 
//para encontrar la información que le sirva).
const {
    scored: [p1, p2, p3, p4]
} = game;

const goles = [p1, p2, p3, p4];

let repetidos = {};
for (let i = 0; i < goles.length; i++) {
  if (repetidos["" + goles[i]] == null) {
    repetidos["" + goles[i]] = 0;
  }
  repetidos["" + goles[i]]++;
}
//console.log(repetidos);


const printGoals = (player) => {
        let gol = 0;
        const golesMarcados = [];
        let count = 0;
        for (let [propiedad, valor] of Object.entries(player)) {
            gol = valor === 1? `${valor} gol`: `${valor} goles`; 
            golesMarcados[count] = `El jugador ${propiedad} marco ${gol}`;
            count++;
        }
        return golesMarcados;
};
//console.log(printGoals(repetidos));
// --------------------------------------------------------------------------------------
// 7. En las aplicaciones de apuestas es más probable que gane el equipo con la 
//cuota más baja. Imprima en la consola que equipo es más probable que gane, 
//sin usar una declaración if/else o el operador ternario.
const cuota = [Team1, Team2];

const orderCuota = cuota.sort((a, b) => {
    return a - b;
});
//console.log(orderCuota[0]);
// ---------------------------------------------------------------------------------------
// 8. Use un bucle para poder calcular la cuota (odd) promedio y mostrarlo en la 
//consola
let sum = 0;
for (let i = 0; i < cuota.length; i++) {
    sum += cuota[i];
}
const prom = sum/cuota.length;
//console.log(prom);
// ----------------------------------------------------------------------------------------
// 9. Cree una función que devuelva un objeto que contenga los nombres de los 
//jugadores que anotaron goles, pero como PROPIEDADES, y el número de goles 
//como VALORES. Por ejemplo, con los datos obtenidos arriba el objeto se verá 
//como:
//{
//    Gnarby: 1,
//    Hummels: 1,
//    Lewandowski: 2
//}
const playersGoals = (playersG) => {
    const ordered = {};
    Object.keys(playersG).sort().forEach(function(key) {
        ordered[key] = playersG[key];
    });
    return ordered;
};
//console.log(playersGoals(repetidos));
// ------------------------------------------------------------------------------------------
// 10. Tome en cuenta los siguientes datos:
const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
]);
// -  Cree una funcion que analice los datos y muestre en la consola un mensaje como 
//este: “Un evento ocurrió, en promedio, cada 9 minutos”
const events = (evento) => {
    let sumGoal = 0;
    let sumSub = 0;
    let sumY = 0;
    let sumR = 0;
    let conGoal = 0;
    let conSub = 0;
    let conY = 0;
    let conR = 0;
    let promGoal = 0;
    let promSub = 0;
    let promY = 0;
    let promR = 0;
    for (const [key, value] of evento) {
        if (value === 'GOAL') {
            sumGoal += key;
            conGoal++;
        } else if (value === 'Substitution') {
                    sumSub += key;
                    conSub++;
        } else if (value === 'Yellow card') {
                    sumY += key;
                    conY++;
        } else {
            sumR += key;
            conR++;
        }
    }
    promGoal = sumGoal/conGoal;
    promSub = sumSub/conSub;
    promY = sumY/conY;
    promR = sumR/conR;
    let counter = 0;
    const event = [];
    let g = ``;
    let s = ``;
    let y = ``;
    let r = ``;
    for (const value of evento.values()) {
        if (value === 'GOAL') {
            g = `Un ${value} ocurrió, en promedio, cada ${promGoal} minutos`;
            event[counter] = g;
        } else if (value === 'Substitution') {
                    s = `Un ${value} ocurrió, en promedio, cada ${promSub} minutos`;
                    event[counter] = s;
        } else if (value === 'Yellow card') {
                    y = `Un ${value} ocurrió, en promedio, cada ${promY} minutos`;
                    event[counter] = y;
        } else {
            r = `Un ${value} ocurrió, en promedio, cada ${promR} minutos`;
            event[counter] = r;
        }
        counter++;
    }
    const promEvents = new Set(event);
    return promEvents;
};
console.log(events(gameEvents));
//- Recorra la variable “gameEvents” y muestre cada elemento en la consola 
//señalando si fue el primer o el segundo tiempo, algo como esto: 
//“[PRIMER TIEMPO] 17: GOAL”

/* let llave = ``;
for (const [key, value] of gameEvents) {
    llave = key <= 46 ? `[PRIMER TIEMPO]` : `[SEGUNDO TIEMPO]`;
    console.log(`${llave} ${key}: ${value}`);
} */

