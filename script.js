// JavaScript source code
// Player data and functions (same as before)
const quarterbacks = [
  { name: 'Josh Allen', rank: , adp: 27.6, risk_level: 0, scheduleStrength: 4 },
  { name: 'Patrick Mahomes', rank: , adp: 21.5, risk_level: 2, scheduleStrength: 3 },
  { name: 'Player 1', rank: 1, adp: 5, risk_level: 0, scheduleStrength: 4 },
  { name: 'Player 2', rank: 2, adp: 10, risk_level: 2, scheduleStrength: 3 },
  { name: 'Player 1', rank: 1, adp: 5, risk_level: 0, scheduleStrength: 4 },
  { name: 'Player 2', rank: 2, adp: 10, risk_level: 2, scheduleStrength: 3 },
  { name: 'Player 1', rank: 1, adp: 5, risk_level: 0, scheduleStrength: 4 },
  { name: 'Player 2', rank: 2, adp: 10, risk_level: 2, scheduleStrength: 3 },
  { name: 'Player 1', rank: 1, adp: 5, risk_level: 0, scheduleStrength: 4 },
  { name: 'Player 2', rank: 2, adp: 10, risk_level: 2, scheduleStrength: 3 },
  { name: 'Player 1', rank: 1, adp: 5, risk_level: 0, scheduleStrength: 4 },
  { name: 'Player 2', rank: 2, adp: 10, risk_level: 2, scheduleStrength: 3 },
  
];

const runningBacks = [
  { name: 'Christian McCaffrey', rank: 2, adp: 2, risk_level: 1, scheduleStrength: 5 },
  { name: 'Austin Ekeler', rank: 4, adp: 4.5, risk_level: 2, scheduleStrength: 4 },
  { name: 'Player 3', rank: 3, adp: 8, risk_level: 1, scheduleStrength: 5 },
  { name: 'Player 4', rank: 4, adp: 15, risk_level: 0, scheduleStrength: 2 },
  { name: 'Player 3', rank: 3, adp: 8, risk_level: 1, scheduleStrength: 5 },
  { name: 'Player 4', rank: 4, adp: 15, risk_level: 0, scheduleStrength: 2 },
  { name: 'Player 3', rank: 3, adp: 8, risk_level: 1, scheduleStrength: 5 },
  { name: 'Player 4', rank: 4, adp: 15, risk_level: 0, scheduleStrength: 2 },
  { name: 'Player 3', rank: 3, adp: 8, risk_level: 1, scheduleStrength: 5 },
  { name: 'Player 4', rank: 4, adp: 15, risk_level: 0, scheduleStrength: 2 },
  { name: 'Player 3', rank: 3, adp: 8, risk_level: 1, scheduleStrength: 5 },
  { name: 'Player 4', rank: 4, adp: 15, risk_level: 0, scheduleStrength: 2 }
  
];

const wideReceivers = [
  { name: 'Justin Jefferson', rank: 1, adp: 1.1, risk_level: 0, scheduleStrength: 3 },
  { name: 'Ja\'Marr Chase', rank: 3, adp: 3, risk_level: 1, scheduleStrength: 4 },
  { name: 'Player 5', rank: 5, adp: 12, risk_level: 0, scheduleStrength: 3 },
  { name: 'Player 6', rank: 6, adp: 18, risk_level: 3, scheduleStrength: 4 },
  { name: 'Player 5', rank: 5, adp: 12, risk_level: 0, scheduleStrength: 3 },
  { name: 'Player 6', rank: 6, adp: 18, risk_level: 3, scheduleStrength: 4 },
  { name: 'Player 5', rank: 5, adp: 12, risk_level: 0, scheduleStrength: 3 },
  { name: 'Player 6', rank: 6, adp: 18, risk_level: 3, scheduleStrength: 4 },
  { name: 'Player 5', rank: 5, adp: 12, risk_level: 0, scheduleStrength: 3 },
  { name: 'Player 6', rank: 6, adp: 18, risk_level: 3, scheduleStrength: 4 },
  { name: 'Player 5', rank: 5, adp: 12, risk_level: 0, scheduleStrength: 3 },
  { name: 'Player 6', rank: 6, adp: 18, risk_level: 3, scheduleStrength: 4 }
  
];

const tightEnds = [
  { name: 'Travis Kelce', rank: 5, adp: 5, risk_level: 0, scheduleStrength: 5 },
  { name: 'Player 8', rank: 8, adp: 25, risk_level: 1, scheduleStrength: 2 },
  { name: 'Player 7', rank: 7, adp: 20, risk_level: 0, scheduleStrength: 5 },
  { name: 'Player 8', rank: 8, adp: 25, risk_level: 1, scheduleStrength: 2 },
  { name: 'Player 7', rank: 7, adp: 20, risk_level: 0, scheduleStrength: 5 },
  { name: 'Player 8', rank: 8, adp: 25, risk_level: 1, scheduleStrength: 2 },
  { name: 'Player 7', rank: 7, adp: 20, risk_level: 0, scheduleStrength: 5 },
  { name: 'Player 8', rank: 8, adp: 25, risk_level: 1, scheduleStrength: 2 },
  { name: 'Player 7', rank: 7, adp: 20, risk_level: 0, scheduleStrength: 5 },
  { name: 'Player 8', rank: 8, adp: 25, risk_level: 1, scheduleStrength: 2 },
  { name: 'Player 7', rank: 7, adp: 20, risk_level: 0, scheduleStrength: 5 },
  { name: 'Player 8', rank: 8, adp: 25, risk_level: 1, scheduleStrength: 2 }
  
];

const kickers = [
  { name: 'Player 9', rank: 9, adp: 22, risk_level: 0, scheduleStrength: 4 },
  { name: 'Player 10', rank: 10, adp: 30, risk_level: 0, scheduleStrength: 3 },
  { name: 'Player 9', rank: 9, adp: 22, risk_level: 0, scheduleStrength: 4 },
  { name: 'Player 10', rank: 10, adp: 30, risk_level: 0, scheduleStrength: 3 },
  { name: 'Player 9', rank: 9, adp: 22, risk_level: 0, scheduleStrength: 4 },
  { name: 'Player 10', rank: 10, adp: 30, risk_level: 0, scheduleStrength: 3 },
  { name: 'Player 9', rank: 9, adp: 22, risk_level: 0, scheduleStrength: 4 },
  { name: 'Player 10', rank: 10, adp: 30, risk_level: 0, scheduleStrength: 3 },
  { name: 'Player 9', rank: 9, adp: 22, risk_level: 0, scheduleStrength: 4 },
  { name: 'Player 10', rank: 10, adp: 30, risk_level: 0, scheduleStrength: 3 },
  { name: 'Player 9', rank: 9, adp: 22, risk_level: 0, scheduleStrength: 4 },
  { name: 'Player 10', rank: 10, adp: 30, risk_level: 0, scheduleStrength: 3 }
 
];

const teamDefenses = [
  { name: 'Team 1', rank: 1, adp: 3, risk_level: 0, scheduleStrength: 5 },
  { name: 'Team 2', rank: 2, adp: 6, risk_level: 0, scheduleStrength: 4 },
  { name: 'Team 1', rank: 1, adp: 3, risk_level: 0, scheduleStrength: 5 },
  { name: 'Team 2', rank: 2, adp: 6, risk_level: 0, scheduleStrength: 4 },
  { name: 'Team 1', rank: 1, adp: 3, risk_level: 0, scheduleStrength: 5 },
  { name: 'Team 2', rank: 2, adp: 6, risk_level: 0, scheduleStrength: 4 },
  { name: 'Team 1', rank: 1, adp: 3, risk_level: 0, scheduleStrength: 5 },
  { name: 'Team 2', rank: 2, adp: 6, risk_level: 0, scheduleStrength: 4 },
  { name: 'Team 1', rank: 1, adp: 3, risk_level: 0, scheduleStrength: 5 },
  { name: 'Team 2', rank: 2, adp: 6, risk_level: 0, scheduleStrength: 4 },
  { name: 'Team 1', rank: 1, adp: 3, risk_level: 0, scheduleStrength: 5 },
  { name: 'Team 2', rank: 2, adp: 6, risk_level: 0, scheduleStrength: 4 }
  
];

const getRandomPlayer = (players) => {
  const eligiblePlayers = players.filter(player => player.adp - player.rank > 0 && player.risk_level <= 2 && player.scheduleStrength >= 4);
  return eligiblePlayers[Math.floor(Math.random() * eligiblePlayers.length)];
}

const getRandomPlayers = (players, count) => {
  const eligiblePlayers = players.filter(player => player.adp - player.rank > 0 && player.risk_level <= 2 && player.scheduleStrength >= 4);
  const randomPlayers = [];

  for (let i = 0; i < count; i++) {
    const player = eligiblePlayers[Math.floor(Math.random() * eligiblePlayers.length)];
    randomPlayers.push(player);
  }

  return randomPlayers;
}


const generateLineup = () => {
  const lineup = {
    quarterback: getRandomPlayer(quarterbacks),
    runningBacks: getRandomPlayers(runningBacks, 2),
    wideReceivers: getRandomPlayers(wideReceivers, 3),
    tightEnd: getRandomPlayer(tightEnds),
    kicker: getRandomPlayer(kickers),
    teamDefense: getRandomPlayer(teamDefenses),
  };

  return lineup;
}


const generateLineupMessage = (lineup) => {
  const message = `Your target quarterback needs to be: ${lineup.quarterback.name}\n` +
    `Your target running backs are: ${lineup.runningBacks.map(player => player.name).join(", ")}\n` +
    `Your target wide receivers are: ${lineup.wideReceivers.map(player => player.name).join(", ")}\n` +
    `Your target tight end is: ${lineup.tightEnd.name}\n` +
    `Your target kicker is: ${lineup.kicker.name}\n` +
    `Your target team defense is: ${lineup.teamDefense.name}`;

  return message;
}
// Generate lineup and message function
const generateAndDisplayLineup = () => {
  const lineup = generateLineup();
  const message = generateLineupMessage(lineup);

  const lineupContainer = document.getElementById('lineupContainer');
  lineupContainer.textContent = ''; // Clear previous lineup

  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  lineupContainer.appendChild(messageElement);
}

// Add event listener to the generate button
const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', generateAndDisplayLineup);
