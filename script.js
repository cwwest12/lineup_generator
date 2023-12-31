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
  { name: 'Dak Prescott', rank: 12, adp: 10.8, risk_level: 2, scheduleStrength: 3 }
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
  { name: 'Garrett Wilson', rank: 11, adp: 10, risk_level: 1, scheduleStrength: 3 },
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
  { name: 'Justin Tucker', rank: 1, adp: 22, risk_level: 0, scheduleStrength: 4 },
  { name: 'Tyler Bass', rank: 2, adp: 30, risk_level: 0, scheduleStrength: 3 },
  { name: 'Daniel Carlson', rank: 3, adp: 22, risk_level: 0, scheduleStrength: 4 },
  { name: 'Harrison Butker', rank: 4, adp: 30, risk_level: 0, scheduleStrength: 3 },
  { name: 'Younghoe Koo', rank: 5, adp: 22, risk_level: 0, scheduleStrength: 4 },
  { name: 'Nick Folk', rank: 6, adp: 30, risk_level: 0, scheduleStrength: 3 },
  { name: 'Jason Sanders', rank: 7, adp: 22, risk_level: 0, scheduleStrength: 4 },
  { name: 'Robbie Gould', rank: 8, adp: 30, risk_level: 0, scheduleStrength: 3 },
  { name: 'Brandon McManus', rank: 9, adp: 22, risk_level: 0, scheduleStrength: 4 },
  { name: 'Ryan Succop', rank: 10, adp: 30, risk_level: 0, scheduleStrength: 3 },
  { name: 'Matt Gay', rank: 11, adp: 22, risk_level: 0, scheduleStrength: 4 },
  { name: 'Jake Elliott', rank: 12, adp: 30, risk_level: 0, scheduleStrength: 3 }
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

let quarterbacksCopy = JSON.parse(JSON.stringify(quarterbacks));
let runningBacksCopy = JSON.parse(JSON.stringify(runningBacks));
let wideReceiversCopy = JSON.parse(JSON.stringify(wideReceivers));
let tightEndsCopy = JSON.parse(JSON.stringify(tightEnds));
let kickersCopy = JSON.parse(JSON.stringify(kickers));
let teamDefensesCopy = JSON.parse(JSON.stringify(teamDefenses));

const generateLineup = () => {
  const lineup = {};
  
  lineup.quarterback = getRandomPlayer(quarterbacksCopy)
  lineup.runningBacks = []
  lineup.wideReceivers = []
  lineup.tightEnd = getRandomPlayer(tightEndsCopy)
  lineup.kicker = getRandomPlayer(kickersCopy)
  lineup.teamDefense = getRandomPlayer(teamDefensesCopy)

  const selectedRunningBacks = new Set();
  const selectedWideReceivers = new Set();

  let availableRunningBacks = runningBacksCopy.length > 0 ? [...runningBacksCopy] : [];
  let availableWideReceivers = wideReceiversCopy.length > 0 ? [...wideReceiversCopy] : [];

  while (selectedRunningBacks.size < 2 && availableRunningBacks.length > 0) {
    let player = getRandomPlayer(availableRunningBacks);
    if (!selectedRunningBacks.has(player.name)) {
      lineup.runningBacks.push(player);
      selectedRunningBacks.add(player.name);
    }
    availableRunningBacks = availableRunningBacks.filter(p => p.name !== player.name);
  }
  while (selectedWideReceivers.size < 3 && availableWideReceivers.length > 0) {
    let player = getRandomPlayer(availableWideReceivers);
    if (!selectedWideReceivers.has(player.name)) {
      lineup.wideReceivers.push(player);
      selectedWideReceivers.add(player.name);
    }
    availableWideReceivers = availableWideReceivers.filter(p => p.name !== player.name);
  }

  return lineup;
}
  */


/*const generateLineupMessage = (lineup) => {
  const message = `Your target quarterback is: ${lineup.quarterback.name}. \n` +
    `Your target running backs are: ${lineup.runningBacks.map(player => player.name).join(", ")}. \n` +
    `Your target wide receivers are: ${lineup.wideReceivers.map(player => player.name).join(", ")}. \n` +
    `Your target tight end is: ${lineup.tightEnd.name}. \n` +
    `Your target kicker is: ${lineup.kicker.name}. \n` +
    `Your target team defense is: ${lineup.teamDefense.name}.`;

  return message;
}*/

const getRandomPlayer = (players) => {
  const randomIndex = Math.floor(Math.random() * players.length);
  return players[randomIndex].name;
};


/*const generateRandomPlayers = (players, count) => {
  const availablePlayers = players.map(player => player.name);
  const randomPlayers = [];

  for (let i = 0; i < count; i++) {
    if (availablePlayers.length === 0) {
      availablePlayers.push(...players.map(player => player.name));
    }
    const randomPlayerIndex = Math.floor(Math.random() * availablePlayers.length);
    const randomPlayer = availablePlayers[randomPlayerIndex];
    randomPlayers.push(randomPlayer);

    availablePlayers.splice(randomPlayerIndex, 1);
  }

  return randomPlayers;
};
*/

const generateRandomPlayers = (players, count) => {
  const availablePlayers = [];
  const randomPlayers = [];
  
  for (let i = 0; i < players.length; i++) {
    availablePlayers.push(players[i].name)
  }

  let j = 0;
  
  while (j < count) {
    const randomIndex = Math.floor(Math.random() * availablePlayers.length);
    let randomPlayer = availablePlayers[randomIndex];
    
    randomPlayers.push(randomPlayer);
    availablePlayers.splice(randomIndex, 1);
    j++;
  }
  
  return randomPlayers;
}
  
  
//player name changing functions

const clearValue = (element) => {
  element.value = '';
};

const addValue = (element, input) => {
  element.value = input;
};







//find quarterback url for logo update

const findQbUrl = (player) => {

  let url;
  
  switch (player) {
    case 'Josh Allen':
      url = "./bills.png";
      break;

    case 'Patrick Mahomes':
      url = "./chiefs.png";
      break;

    case 'Jalen Hurts':
      url = "./philadelphia-eagles-logo.png";
      break;

    case 'Lamar Jackson':
      url = "./ravens.png";
      break;

    case 'Joe Burrow':
      url = "./bengals.png";
      break;

    case 'Justin Herbert':
      url = "./chargers.png";
      break;

    case 'Justin Fields':
      url = "./bears.png";
      break;

    case 'Daniel Jones':
      url = "./giants.png";
      break;

    case 'Trevor Lawrence':
      url = "./jaguars.png";
      break;

    case 'Deshaun Watson':
      url = "./browns.png";
      break;

    case 'Geno Smith':
      url = "./seahawks.png";
      break;

    case 'Dak Prescott':
      url = "./cowboys.png";
      break;

    default:
      url = "./nfl-nike-logo-logodownload-download-logotipos-21.png";
      break;
    }
    
    return url;
  }

//find running back url for logo

const findRbUrl = (player) => {

  let url;
  
  switch (player) {
    case 'Christian McCaffrey':
      url = "./49ers.png";
      break;

    case 'Austin Ekeler':
      url = "./chargers.png";
      break;

    case 'Josh Jacobs':
      url = "./raiders.png";
      break;

    case 'Nick Chubb':
      url = "./browns.png";
      break;

    case 'Derrick Henry':
      url = "./titans.png";
      break;

    case 'Tony Pollard':
      url = "./cowboys.png";
      break;

    case 'Saquon Barkley':
      url = "./giants.png";
      break;

    case 'Bijan Robinson':
      url = "./falcons.png";
      break;

    case 'Rhamondre Stevenson':
      url = "./patriots.png";
      break;

    case 'Jonathan Taylor':
      url = "./colts.png";
      break;

    case 'Breece Hall':
      url = "./jets.png";
      break;

    case 'Joe Mixon':
      url = "./bengals.png";
      break;

    default:
      url = "./nfl-nike-logo-logodownload-download-logotipos-21.png";
      break;
    }
    
    return url;
  }

//find wide receiver url for logo

const findWrUrl = (player) => {

  let url;
  
  switch (player) {
    case 'Justin Jefferson':
      url = "./vikings.png";
      break;

    case 'Cooper Kupp':
      url = "./rams.png";
      break;

    case 'Ja\'Marr Chase':
      url = "./bengals.png";
      break;

    case 'Tyreek Hill':
      url = "./dolphins.png";
      break;

    case 'Stefon Diggs':
      url = "./bills.png";
      break;

    case 'A.J. Brown':
      url = "./philadelphia-eagles-logo.png";
      break;

    case 'CeeDee Lamb':
      url = "./cowboys.png";
      break;

    case 'Davante Adams':
      url = "./raiders.png";
      break;

    case 'Amon-Ra St. Brown':
      url = "./lions.png";
      break;

    case 'Jaylen Waddle':
      url = "./dolphins.png";
      break;

    case 'Garrett Wilson':
      url = "./jets.png";
      break;

    case 'Chris Olave':
      url = "./saints.png";
      break;

    default:
      url = "./nfl-nike-logo-logodownload-download-logotipos-21.png";
      break;
    }
    
    return url;
  }

//find tight end url for logo

const findTeUrl = (player) => {

  let url;
  
  switch (player) {
    case 'Travis Kelce':
      url = "./chiefs.png";
      break;

    case 'Mark Andrews':
      url = "./ravens.png";
      break;

    case 'T.J. Hockenson':
      url = "./lions.png";
      break;

    case 'Kyle Pitts':
      url = "./falcons.png";
      break;

    case 'George Kittle':
      url = "./49ers.png";
      break;

    case 'Dallas Goedert':
      url = "./philadelphia-eagles-logo.png";
      break;

    case 'Pat Freiermuth':
      url = "./steelers.png";
      break;

    case 'Darren Waller':
      url = "./raiders.png";
      break;

    case 'David Njoku':
      url = "./browns.png";
      break;

    case 'Evan Engram':
      url = "./giants.png";
      break;

    case 'Tyler Higbee':
      url = "./rams.png";
      break;

    case 'Chigoziem Okonkwo':
      url = "./titans.png";
      break;

    default:
      url = "./nfl-nike-logo-logodownload-download-logotipos-21.png";
      break;
    }
    
    return url;
  }

//find kicker url for logo

const findKickerUrl = (player) => {

  let url;
  
  switch (player) {
    case 'Justin Tucker':
      url = "./ravens.png";
      break;

    case 'Tyler Bass':
      url = "./bills.png";
      break;

    case 'Daniel Carlson':
      url = "./raiders.png";
      break;

    case 'Harrison Butker':
      url = "./chiefs.png";
      break;

    case 'Younghoe Koo':
      url = "./falcons.png";
      break;

    case 'Nick Folk':
      url = "./patriots.png";
      break;

    case 'Jason Sanders':
      url = "./dolphins.png";
      break;

    case 'Robbie Gould':
      url = "./49ers.png";
      break;

    case 'Brandon McManus':
      url = "./jaguars.png";
      break;

    case 'Ryan Succop':
      url = "./bucs.png";
      break;

    case 'Matt Gay':
      url = "./colts.png";
      break;

    case 'Jake Elliott':
      url = "./philadelphia-eagles-logo.png";
      break;

    default:
      url = "./nfl-nike-logo-logodownload-download-logotipos-21.png";
      break;
    }
    
    return url;
  }

//find team defense url for logo


const findDefUrl = (player) => {

  let url;
  
  switch (player) {
    case '49ers':
      url = "./49ers.png";
      break;

    case 'Cowboys':
      url = "./cowboys.png";
      break;

    case 'Eagles':
      url = "./philadelphia-eagles-logo.png";
      break;

    case 'Patriots':
      url = "./patriots.png";
      break;

    case 'Bills':
      url = "./bills.png";
      break;

    case 'Jets':
      url = "./jets.png";
      break;

    case 'Ravens':
      url = "./ravens.png";
      break;

    case 'Jaguars':
      url = "./jaguars.png";
      break;

    case 'Steelers':
      url = "./steelers.png";
      break;

    case 'Chiefs':
      url = "./chiefs.png";
      break;

    case 'Dolphins':
      url = "./dolphins.png";
      break;

    case 'Broncos':
      url = "./broncos.png";
      break;

    default:
      url = "./nfl-nike-logo-logodownload-download-logotipos-21.png";
      break;
    }
    
    return url;
  }

//image changing functions

const rollbackImg = (element) => {
  element.src = "./nfl-nike-logo-logodownload-download-logotipos-21.png";
}

//img adding functions

const newImgQb = (element, player) => {
  const url = findQbUrl(player);
  element.src = url;
}

const newImgRb = (element, player) => {
  const url = findRbUrl(player);
  element.src = url;
}

const newImgWr = (element, player) => {
  const url = findWrUrl(player);
  element.src = url;
}

const newImgTe = (element, player) => {
  const url = findTeUrl(player);
  element.src = url;
}

const newImgK = (element, player) => {
  const url = findKickerUrl(player);
  element.src = url;
}

const newImgD = (element, player) => {
  const url = findDefUrl(player);
  element.src = url;
}

// Generate lineup and image function

const generateAndDisplayLineup = () => {

  const randomQbsArr = [getRandomPlayer(quarterbacks)];
  const randomRbsArr = generateRandomPlayers(runningBacks, 2);
  const randomWrsArr = generateRandomPlayers(wideReceivers, 3);
  const randomTesArr = [getRandomPlayer(tightEnds)];
  const randomKickerArr = [getRandomPlayer(kickers)];
  const randomDefenseArr = [getRandomPlayer(teamDefenses)];

  const qbBox = document.getElementById('qbBox');
  const rbOneBox = document.getElementById('rbOneBox');
  const rbTwoBox = document.getElementById('rbTwoBox');
  const wrOneBox = document.getElementById('wrOneBox');
  const wrTwoBox = document.getElementById('wrTwoBox');
  const wrThreeBox = document.getElementById('wrThreeBox');
  const teBox = document.getElementById('teBox');
  const kickerBox = document.getElementById('kickerBox');
  const defenseBox = document.getElementById('defenseBox');

  clearValue(qbBox); // Clear previous quarterback
  clearValue(rbOneBox); // Clear previous running back 2
  clearValue(rbTwoBox); // Clear previous running back 2
  clearValue(wrOneBox); // Clear previous wide receiver 1
  clearValue(wrTwoBox); // Clear previous wide receiver 2
  clearValue(wrThreeBox); // Clear previous wide receiver 3
  clearValue(teBox); // Clear previous tight end
  clearValue(kickerBox); // Clear previous kicker
  clearValue(defenseBox); // Clear previous defense
  
  addValue(qbBox, randomQbsArr[0]); // add new quarterback
  addValue(rbOneBox, randomRbsArr[0]); // add new running back 1
  addValue(rbTwoBox, randomRbsArr[1]); // add new running back 2
  addValue(wrOneBox, randomWrsArr[0]); // add new wide receiver 1
  addValue(wrTwoBox, randomWrsArr[1]); // add new wide receiver 2
  addValue(wrThreeBox, randomWrsArr[2]); // add new wide receiver 3
  addValue(teBox, randomTesArr[0]); // add new tight end
  addValue(kickerBox, randomKickerArr[0]); // add new kicker
  addValue(defenseBox, randomDefenseArr[0]); // add new defense

  //image changing

  const qbBoxImg = document.getElementById('qbBoxImg');
  const rbBoxOneImg = document.getElementById('rbBoxOneImg');
  const rbBoxTwoImg = document.getElementById('rbBoxTwoImg');
  const wrBoxOneImg = document.getElementById('wrBoxOneImg');
  const wrBoxTwoImg = document.getElementById('wrBoxTwoImg');
  const wrBoxThreeImg = document.getElementById('wrBoxThreeImg');
  const teBoxImg = document.getElementById('teBoxImg');
  const kickerBoxImg = document.getElementById('kickerBoxImg');
  const defenseBoxImg = document.getElementById('defenseBoxImg');

  rollbackImg(qbBoxImg);
  rollbackImg(rbBoxOneImg);
  rollbackImg(rbBoxTwoImg);
  rollbackImg(wrBoxOneImg);
  rollbackImg(wrBoxTwoImg);
  rollbackImg(wrBoxThreeImg);
  rollbackImg(teBoxImg);
  rollbackImg(kickerBoxImg);
  rollbackImg(defenseBoxImg);

  newImgQb(qbBoxImg, randomQbsArr[0]);
  newImgRb(rbBoxOneImg, randomRbsArr[0]);
  newImgRb(rbBoxTwoImg, randomRbsArr[1]);
  newImgWr(wrBoxOneImg, randomWrsArr[0]);
  newImgWr(wrBoxTwoImg, randomWrsArr[1]);
  newImgWr(wrBoxThreeImg, randomWrsArr[2]);
  newImgTe(teBoxImg, randomTesArr[0]);
  newImgK(kickerBoxImg, randomKickerArr[0]);
  newImgD(defenseBoxImg, randomDefenseArr[0]);
  
};

  

// Add event listener to the generate button
const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', generateAndDisplayLineup);
