// JavaScript source code
// Player data and functions (same as before)
const quarterbacks = [
  { name: 'Josh Allen', rank: 1, adp: 2, risk_level: 0, scheduleStrength: 4 },
  { name: 'Patrick Mahomes', rank: 2, adp: 1.8, risk_level: 0, scheduleStrength: 3 },
  { name: 'Jalen Hurts', rank: 3, adp: 2.3, risk_level: 0, scheduleStrength: 4 },
  { name: 'Lamar Jackson', rank: 4, adp: 4.8, risk_level: 1, scheduleStrength: 3 },
  { name: 'Joe Burrow', rank: 5, adp: 4.5, risk_level: 0, scheduleStrength: 4 },
  { name: 'Justin Herbert', rank: 6, adp: 6.8, risk_level: 2, scheduleStrength: 3 },
  { name: 'Justin Fields', rank: 7, adp: 6, risk_level: 0, scheduleStrength: 4 },
  { name: 'Daniel Jones', rank: 8, adp: 12.8, risk_level: 2, scheduleStrength: 3 },
  { name: 'Trevor Lawrence', rank: 9, adp: 8, risk_level: 0, scheduleStrength: 4 },
  { name: 'Deshaun Watson', rank: 10, adp: 9, risk_level: 2, scheduleStrength: 3 },
  { name: 'Geno Smith', rank: 11, adp: 15, risk_level: 0, scheduleStrength: 4 },
  { name: 'Dak Prescott', rank: 12, adp: 10.8, risk_level: 2, scheduleStrength: 3 },
];

const runningBacks = [
  { name: 'Christian McCaffrey', rank: 1, adp: 1, risk_level: 1, scheduleStrength: 5 },
  { name: 'Austin Ekeler', rank: 2, adp: 2, risk_level: 2, scheduleStrength: 4 },
  { name: 'Josh Jacobs', rank: 3, adp: 7, risk_level: 1, scheduleStrength: 5 },
  { name: 'Nick Chubb', rank: 4, adp: 7, risk_level: 0, scheduleStrength: 2 },
  { name: 'Derrick Henry', rank: 5, adp: 8, risk_level: 1, scheduleStrength: 5 },
  { name: 'Tony Pollard', rank: 6, adp: 8.5, risk_level: 0, scheduleStrength: 2 },
  { name: 'Saquon Barkley', rank: 7, adp: 3, risk_level: 1, scheduleStrength: 5 },
  { name: 'Bijan Robinson', rank: 8, adp: 4, risk_level: 0, scheduleStrength: 2 },
  { name: 'Rhamondre Stevenson', rank: 9, adp: 10, risk_level: 1, scheduleStrength: 5 },
  { name: 'Jonathan Taylor', rank: 10, adp: 5, risk_level: 0, scheduleStrength: 2 },
  { name: 'Breece Hall', rank: 11, adp: 12.5, risk_level: 1, scheduleStrength: 5 },
  { name: 'Joe Mixon', rank: 12, adp: 19, risk_level: 0, scheduleStrength: 2 }
];

const wideReceivers = [
  { name: 'Justin Jefferson', rank: 1, adp: 1, risk_level: 0, scheduleStrength: 3 },
  { name: 'Cooper Kupp', rank: 2, adp: 3.5, risk_level: 0, scheduleStrength: 4 },
  { name: 'Ja\'Marr Chase', rank: 3, adp: 2, risk_level: 0, scheduleStrength: 3 },
  { name: 'Tyreek Hill', rank: 4, adp: 3.5, risk_level: 0, scheduleStrength: 4 },
  { name: 'Stefon Diggs', rank: 5, adp: 5.5, risk_level: 0, scheduleStrength: 3 },
  { name: 'A.J. Brown', rank: 6, adp: 7.5, risk_level: 1, scheduleStrength: 4 },
  { name: 'CeeDee Lamb', rank: 7, adp: 6, risk_level: 1, scheduleStrength: 3 },
  { name: 'Davante Adams', rank: 8, adp: 7, risk_level: 0, scheduleStrength: 4 },
  { name: 'Amon-Ra St. Brown', rank: 9, adp: 9.5, risk_level: 0, scheduleStrength: 3 },
  { name: 'Jaylen Waddle', rank: 10, adp: 10.5, risk_level: 1, scheduleStrength: 4 },
  { name: 'Garret Wilson', rank: 11, adp: 10, risk_level: 1, scheduleStrength: 3 },
  { name: 'Chris Olave', rank: 12, adp: 13.5, risk_level: 1, scheduleStrength: 4 }
];

const tightEnds = [
  { name: 'Travis Kelce', rank: 1, adp: 1, risk_level: 0, scheduleStrength: 5 },
  { name: 'Mark Andrews', rank: 2, adp: 2, risk_level: 0, scheduleStrength: 2 },
  { name: 'T.J. Hockenson', rank: 3, adp: 3, risk_level: 1, scheduleStrength: 5 },
  { name: 'Kyle Pitts', rank: 4, adp: 5, risk_level: 2, scheduleStrength: 2 },
  { name: 'George Kittle', rank: 5, adp: 4, risk_level: 2, scheduleStrength: 5 },
  { name: 'Dallas Goedert', rank: 6, adp: 6.5, risk_level: 1, scheduleStrength: 2 },
  { name: 'Pat Freiermuth', rank: 7, adp: 9, risk_level: 2, scheduleStrength: 5 },
  { name: 'Darren Waller', rank: 8, adp: 6.5, risk_level: 1, scheduleStrength: 2 },
  { name: 'David Njoku', rank: 9, adp: 10, risk_level: 2, scheduleStrength: 5 },
  { name: 'Evan Engram', rank: 10, adp: 8, risk_level: 1, scheduleStrength: 2 },
  { name: 'Tyler Higbee', rank: 11, adp: 15, risk_level: 1, scheduleStrength: 5 },
  { name: 'Chigoziem Okonkwo', rank: 12, adp: 12.5, risk_level: 2, scheduleStrength: 2 }
];

const kickers = [
  { name: 'Player 9', rank: 1, adp: 22, risk_level: 0, scheduleStrength: 4 },
  { name: 'Player 10', rank: 2, adp: 30, risk_level: 0, scheduleStrength: 3 },
  { name: 'Player 9', rank: 3, adp: 22, risk_level: 0, scheduleStrength: 4 },
  { name: 'Player 10', rank: 4, adp: 30, risk_level: 0, scheduleStrength: 3 },
  { name: 'Player 9', rank: 5, adp: 22, risk_level: 0, scheduleStrength: 4 },
  { name: 'Player 10', rank: 6, adp: 30, risk_level: 0, scheduleStrength: 3 },
  { name: 'Player 9', rank: 7, adp: 22, risk_level: 0, scheduleStrength: 4 },
  { name: 'Player 10', rank: 8, adp: 30, risk_level: 0, scheduleStrength: 3 },
  { name: 'Player 9', rank: 9, adp: 22, risk_level: 0, scheduleStrength: 4 },
  { name: 'Player 10', rank: 10, adp: 30, risk_level: 0, scheduleStrength: 3 },
  { name: 'Player 9', rank: 11, adp: 22, risk_level: 0, scheduleStrength: 4 },
  { name: 'Player 10', rank: 12, adp: 30, risk_level: 0, scheduleStrength: 3 }
];

const teamDefenses = [
  { name: '49ers', rank: 1, adp: 1, risk_level: 0, scheduleStrength: 5 },
  { name: 'Cowboys', rank: 2, adp: 2.5, risk_level: 0, scheduleStrength: 4 },
  { name: 'Eagles', rank: 3, adp: 2.5, risk_level: 0, scheduleStrength: 5 },
  { name: 'Patriots', rank: 4, adp: 4, risk_level: 0, scheduleStrength: 4 },
  { name: 'Bills', rank: 5, adp: 5, risk_level: 0, scheduleStrength: 5 },
  { name: 'Jets', rank: 6, adp: 6.5, risk_level: 0, scheduleStrength: 4 },
  { name: 'Ravens', rank: 7, adp: 7.5, risk_level: 0, scheduleStrength: 5 },
  { name: 'Jaguars', rank: 8, adp: 8, risk_level: 0, scheduleStrength: 4 },
  { name: 'Steelers', rank: 9, adp: 8.5, risk_level: 0, scheduleStrength: 5 },
  { name: 'Chiefs', rank: 10, adp: 10.5, risk_level: 0, scheduleStrength: 4 },
  { name: 'Dolphins', rank: 11, adp: 11, risk_level: 0, scheduleStrength: 5 },
  { name: 'Broncos', rank: 12, adp: 11, risk_level: 0, scheduleStrength: 4 }
];

/* let selectedPlayers = [];

const getMaxScorePlayer = (players, selectedPlayers) => {
  let maxScore = Number.NEGATIVE_INFINITY;
  let selectedPlayer;

  players.forEach(player => {
    if (!selectedPlayers.includes(player)) {
      let score = 0;

    if (player.scheduleStrength >= 4) {
      score++;
    }
    if (player.rank <= 5) {
      score += 10;
    }
    if (player.adp - player.rank > 0) {
      score += player.adp - player.rank;
    }
    if (player.risk_level > 2) {
      score -= 3;
    }

    if (score >= maxScore) {
      maxScore = score;
      selectedPlayer = player;
    }
  });

  return selectedPlayer;
}

const getMaxScorePlayers = (players, count, selectedPlayers) => {
  const selected = [];

  for (let i = 0; i < count; i++) {
    let maxScore = Number.NEGATIVE_INFINITY;
    let selectedPlayer;

    players.forEach(player => {
      if (!selectedPlayers.includes(player)) {
        let score = 0;

        if (player.scheduleStrength >= 4) {
          score += 2;
        }
        if (player.rank <= 5) {
          score += 10;
        }
        if (player.adp - player.rank >= 0) {
          score += player.adp - player.rank;
        }
        if (player.risk_level >= 3) {
          score -= 5;
        }

        if (score >= maxScore) {
          maxScore = score;
          selectedPlayer = player;
        }
      }
  });

  selected.push(selectedPlayer);
  selectedPlayers.push(selectedPlayer);
  
  }
  return selected;
}
*/
let quarterbacksCopy = JSON.parse(JSON.stringify(quarterbacks));
let runningBacksCopy = JSON.parse(JSON.stringify(runningBacks));
let wideReceiversCopy = JSON.parse(JSON.stringify(wideReceivers));
let tightEndsCopy = JSON.parse(JSON.stringify(tightEnds));
let kickersCopy = JSON.parse(JSON.stringify(kickers));
let teamDefensesCopy = JSON.parse(JSON.stringify(teamDefenses));


const getRandomPlayer = (players) => {
  const index = Math.floor(Math.random() * players.length);
  return players.slice(index, 1)[0];

const generateLineup = () => {
  const lineup = {};
  
  lineup.quarterback = getRandomPlayer(quarterbacksCopy);
  lineup.runningBacks = [];
  lineup.wideReceivers = [];
  lineup.tightEnd = getRandomPlayer(tightEndsCopy);
  lineup.kicker = getRandomPlayer(kickersCopy);
  lineup.teamDefense = getRandomPlayer(teamDefensesCopy);

  for (let i = 0; i < 2; i++) {
    lineup.runningBacks.push(getRandomPlayer(runningBacksCopy));
  }
  for (let i = 0; i < 3; i++) {
    lineup.wideReceivers.push(getRandomPlayer(wideReceiversCopy);
  }

  return lineup;
}


const generateLineupMessage = (lineup) => {
  const message = `Your target quarterback is: ${lineup.quarterback.name}. \n` +
    `Your target running backs are: ${lineup.runningBacks.map(player => player.name).join(", ")}. \n` +
    `Your target wide receivers are: ${lineup.wideReceivers.map(player => player.name).join(", ")}. \n` +
    `Your target tight end is: ${lineup.tightEnd.name}. \n` +
    `Your target kicker is: ${lineup.kicker.name}. \n` +
    `Your target team defense is: ${lineup.teamDefense.name}.`;

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
