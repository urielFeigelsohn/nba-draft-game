// NBA first round players (2003–2022), sample data for demo
// You can expand this list as you like!
const players = [
    {
        name: "LeBron James",
        pick: 1,
        year: 2003,
        wiki: "https://en.wikipedia.org/wiki/2003_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/LeBron_James_Lakers.jpg",
        team: "Cleveland Cavaliers",
        college: "St. Vincent–St. Mary HS (OH)",
        position: "SF/PF",
        nationality: "USA"
    },
    {
        name: "Kevin Durant",
        pick: 2,
        year: 2007,
        wiki: "https://en.wikipedia.org/wiki/2007_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Kevin_Durant_2019.jpg",
        team: "Seattle SuperSonics",
        college: "Texas",
        position: "SF/PF",
        nationality: "USA"
    },
    {
        name: "Stephen Curry",
        pick: 7,
        year: 2009,
        wiki: "https://en.wikipedia.org/wiki/2009_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Stephen_Curry_Shooting_%282021%29.jpg",
        team: "Golden State Warriors",
        college: "Davidson",
        position: "PG",
        nationality: "USA"
    },
    {
        name: "Jalen Green",
        pick: 2,
        year: 2021,
        wiki: "https://en.wikipedia.org/wiki/2021_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Jalen_Green_2022_%28cropped%29.jpg",
        team: "Houston Rockets",
        college: "NBA G League Ignite",
        position: "SG",
        nationality: "USA"
    },
    {
        name: "Cade Cunningham",
        pick: 1,
        year: 2021,
        wiki: "https://en.wikipedia.org/wiki/2021_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Cade_Cunningham_Pistons.jpg",
        team: "Detroit Pistons",
        college: "Oklahoma State",
        position: "PG",
        nationality: "USA"
    },
    {
        name: "Evan Mobley",
        pick: 3,
        year: 2021,
        wiki: "https://en.wikipedia.org/wiki/2021_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Evan_Mobley_Cavs.jpg",
        team: "Cleveland Cavaliers",
        college: "USC",
        position: "PF/C",
        nationality: "USA"
    },
    {
        name: "Scottie Barnes",
        pick: 4,
        year: 2021,
        wiki: "https://en.wikipedia.org/wiki/2021_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Scottie_Barnes_Raptors.jpg",
        team: "Toronto Raptors",
        college: "Florida State",
        position: "SF/PF",
        nationality: "USA"
    },
    {
        name: "Anthony Edwards",
        pick: 1,
        year: 2020,
        wiki: "https://en.wikipedia.org/wiki/2020_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Anthony_Edwards_Timberwolves.jpg",
        team: "Minnesota Timberwolves",
        college: "Georgia",
        position: "SG",
        nationality: "USA"
    },
    {
        name: "Zion Williamson",
        pick: 1,
        year: 2019,
        wiki: "https://en.wikipedia.org/wiki/2019_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Zion_Williamson_Pelicans.jpg",
        team: "New Orleans Pelicans",
        college: "Duke",
        position: "PF",
        nationality: "USA"
    },
    {
        name: "Ja Morant",
        pick: 2,
        year: 2019,
        wiki: "https://en.wikipedia.org/wiki/2019_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Ja_Morant_Grizzlies.jpg",
        team: "Memphis Grizzlies",
        college: "Murray State",
        position: "PG",
        nationality: "USA"
    },
    {
        name: "Luka Dončić",
        pick: 3,
        year: 2018,
        wiki: "https://en.wikipedia.org/wiki/2018_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Luka_Doncic_Mavs.jpg",
        team: "Dallas Mavericks",
        college: "Real Madrid (Spain)",
        position: "PG/SG/SF",
        nationality: "Slovenia"
    },
    {
        name: "Jayson Tatum",
        pick: 3,
        year: 2017,
        wiki: "https://en.wikipedia.org/wiki/2017_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Jayson_Tatum_Celtics.jpg",
        team: "Boston Celtics",
        college: "Duke",
        position: "SF/PF",
        nationality: "USA"
    },
    {
        name: "Ben Simmons",
        pick: 1,
        year: 2016,
        wiki: "https://en.wikipedia.org/wiki/2016_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Ben_Simmons_76ers.jpg",
        team: "Philadelphia 76ers",
        college: "LSU",
        position: "PG/SF",
        nationality: "Australia"
    },
    {
        name: "Karl-Anthony Towns",
        pick: 1,
        year: 2015,
        wiki: "https://en.wikipedia.org/wiki/2015_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Karl-Anthony_Towns_Timberwolves.jpg",
        team: "Minnesota Timberwolves",
        college: "Kentucky",
        position: "C",
        nationality: "Dominican Republic/USA"
    },
    {
        name: "Andrew Wiggins",
        pick: 1,
        year: 2014,
        wiki: "https://en.wikipedia.org/wiki/2014_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Andrew_Wiggins_Warriors.jpg",
        team: "Cleveland Cavaliers",
        college: "Kansas",
        position: "SF",
        nationality: "Canada"
    },
    {
        name: "Kawhi Leonard",
        pick: 15,
        year: 2011,
        wiki: "https://en.wikipedia.org/wiki/2011_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Kawhi_Leonard_2019.jpg",
        team: "Indiana Pacers (traded to San Antonio Spurs)",
        college: "San Diego State",
        position: "SF",
        nationality: "USA"
    },
    {
        name: "Anthony Davis",
        pick: 1,
        year: 2012,
        wiki: "https://en.wikipedia.org/wiki/2012_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Anthony_Davis_Lakers.jpg",
        team: "New Orleans Hornets",
        college: "Kentucky",
        position: "PF/C",
        nationality: "USA"
    },
    {
        name: "Giannis Antetokounmpo",
        pick: 15,
        year: 2013,
        wiki: "https://en.wikipedia.org/wiki/2013_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Giannis_Antetokounmpo_Bucks.jpg",
        team: "Milwaukee Bucks",
        college: "Filathlitikos (Greece)",
        position: "SF/PF",
        nationality: "Greece"
    },
    {
        name: "Joel Embiid",
        pick: 3,
        year: 2014,
        wiki: "https://en.wikipedia.org/wiki/2014_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Joel_Embiid_76ers.jpg",
        team: "Philadelphia 76ers",
        college: "Kansas",
        position: "C",
        nationality: "Cameroon"
    },
    {
        name: "LaMelo Ball",
        pick: 3,
        year: 2020,
        wiki: "https://en.wikipedia.org/wiki/2020_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/LaMelo_Ball_Hornets.jpg",
        team: "Charlotte Hornets",
        college: "Illawarra Hawks (Australia)",
        position: "PG",
        nationality: "USA"
    },
    {
        name: "Paolo Banchero",
        pick: 1,
        year: 2022,
        wiki: "https://en.wikipedia.org/wiki/2022_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Paolo_Banchero_Magic.jpg",
        team: "Orlando Magic",
        college: "Duke",
        position: "PF",
        nationality: "USA"
    },
    {
        name: "Chris Paul",
        pick: 4,
        year: 2005,
        wiki: "https://en.wikipedia.org/wiki/2005_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Chris_Paul_Phoenix_Suns.jpg",
        team: "New Orleans Hornets",
        college: "Wake Forest",
        position: "PG",
        nationality: "USA"
    },
    {
        name: "Brandon Roy",
        pick: 6,
        year: 2006,
        wiki: "https://en.wikipedia.org/wiki/2006_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Brandon_Roy_Trail_Blazers.jpg",
        team: "Portland Trail Blazers",
        college: "Washington",
        position: "SG",
        nationality: "USA"
    },
    {
        name: "Russell Westbrook",
        pick: 4,
        year: 2008,
        wiki: "https://en.wikipedia.org/wiki/2008_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Russell_Westbrook_Clippers.jpg",
        team: "Seattle SuperSonics",
        college: "UCLA",
        position: "PG",
        nationality: "USA"
    },
    {
        name: "Blake Griffin",
        pick: 1,
        year: 2009,
        wiki: "https://en.wikipedia.org/wiki/2009_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Blake_Griffin_Pistons.jpg",
        team: "Los Angeles Clippers",
        college: "Oklahoma",
        position: "PF",
        nationality: "USA"
    },
    {
        name: "James Harden",
        pick: 3,
        year: 2009,
        wiki: "https://en.wikipedia.org/wiki/2009_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/James_Harden_Nets.jpg",
        team: "Oklahoma City Thunder",
        college: "Arizona State",
        position: "SG",
        nationality: "USA"
    },
    {
        name: "Kyrie Irving",
        pick: 1,
        year: 2011,
        wiki: "https://en.wikipedia.org/wiki/2011_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Kyrie_Irving_Mavericks.jpg",
        team: "Cleveland Cavaliers",
        college: "Duke",
        position: "PG",
        nationality: "Australia/USA"
    },
    {
        name: "Damian Lillard",
        pick: 6,
        year: 2012,
        wiki: "https://en.wikipedia.org/wiki/2012_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Damian_Lillard_Trail_Blazers.jpg",
        team: "Portland Trail Blazers",
        college: "Weber State",
        position: "PG",
        nationality: "USA"
    },
    {
        name: "Devin Booker",
        pick: 13,
        year: 2015,
        wiki: "https://en.wikipedia.org/wiki/2015_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Devin_Booker_Suns.jpg",
        team: "Phoenix Suns",
        college: "Kentucky",
        position: "SG",
        nationality: "USA"
    },
    {
        name: "Donovan Mitchell",
        pick: 13,
        year: 2017,
        wiki: "https://en.wikipedia.org/wiki/2017_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Donovan_Mitchell_Cavaliers.jpg",
        team: "Denver Nuggets (traded to Utah Jazz)",
        college: "Louisville",
        position: "SG",
        nationality: "USA"
    },
    {
        name: "Trae Young",
        pick: 5,
        year: 2018,
        wiki: "https://en.wikipedia.org/wiki/2018_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Trae_Young_Hawks.jpg",
        team: "Dallas Mavericks (traded to Atlanta Hawks)",
        college: "Oklahoma",
        position: "PG",
        nationality: "USA"
    },
    {
        name: "Jabari Smith Jr.",
        pick: 3,
        year: 2022,
        wiki: "https://en.wikipedia.org/wiki/2022_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Jabari_Smith_Rockets.jpg",
        team: "Houston Rockets",
        college: "Auburn",
        position: "PF",
        nationality: "USA"
    },
    {
        name: "Jaden Ivey",
        pick: 5,
        year: 2022,
        wiki: "https://en.wikipedia.org/wiki/2022_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Jaden_Ivey_Pistons.jpg",
        team: "Detroit Pistons",
        college: "Purdue",
        position: "SG",
        nationality: "USA"
    },
    {
        name: "Shaedon Sharpe",
        pick: 7,
        year: 2022,
        wiki: "https://en.wikipedia.org/wiki/2022_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Shaedon_Sharpe_Blazers.jpg",
        team: "Portland Trail Blazers",
        college: "Kentucky",
        position: "SG",
        nationality: "Canada"
    },
    {
        name: "Victor Wembanyama",
        pick: 1,
        year: 2023,
        wiki: "https://en.wikipedia.org/wiki/2023_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Victor_Wembanyama_2023.jpg",
        team: "San Antonio Spurs",
        college: "Metropolitans 92 (France)",
        position: "C/PF",
        nationality: "France"
    },
    {
        name: "Brandon Miller",
        pick: 2,
        year: 2023,
        wiki: "https://en.wikipedia.org/wiki/2023_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Brandon_Miller_Alabama.jpg",
        team: "Charlotte Hornets",
        college: "Alabama",
        position: "SF",
        nationality: "USA"
    },
    {
        name: "Scoot Henderson",
        pick: 3,
        year: 2023,
        wiki: "https://en.wikipedia.org/wiki/2023_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Scoot_Henderson_2023.jpg",
        team: "Portland Trail Blazers",
        college: "NBA G League Ignite",
        position: "PG",
        nationality: "USA"
    },
    {
        name: "Amen Thompson",
        pick: 4,
        year: 2023,
        wiki: "https://en.wikipedia.org/wiki/2023_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Amen_Thompson_2023.jpg",
        team: "Houston Rockets",
        college: "Overtime Elite",
        position: "PG/SG",
        nationality: "USA"
    },
    {
        name: "Ausar Thompson",
        pick: 5,
        year: 2023,
        wiki: "https://en.wikipedia.org/wiki/2023_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Ausar_Thompson_2023.jpg",
        team: "Detroit Pistons",
        college: "Overtime Elite",
        position: "SG/SF",
        nationality: "USA"
    },
    {
        name: "Alex Sarr",
        pick: 1,
        year: 2024,
        wiki: "https://en.wikipedia.org/wiki/2024_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Alex_Sarr_2024.jpg",
        team: "Atlanta Hawks",
        college: "Perth Wildcats (Australia)",
        position: "C",
        nationality: "France"
    },
    {
        name: "Zaccharie Risacher",
        pick: 2,
        year: 2024,
        wiki: "https://en.wikipedia.org/wiki/2024_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Zaccharie_Risacher_2024.jpg",
        team: "Washington Wizards",
        college: "JL Bourg (France)",
        position: "SF",
        nationality: "France"
    },
    {
        name: "Reed Sheppard",
        pick: 3,
        year: 2024,
        wiki: "https://en.wikipedia.org/wiki/2024_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Reed_Sheppard_2024.jpg",
        team: "Houston Rockets",
        college: "Kentucky",
        position: "SG",
        nationality: "USA"
    },
    {
        name: "Stephon Castle",
        pick: 4,
        year: 2024,
        wiki: "https://en.wikipedia.org/wiki/2024_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Stephon_Castle_2024.jpg",
        team: "San Antonio Spurs",
        college: "UConn",
        position: "PG/SG",
        nationality: "USA"
    },
    {
        name: "Donovan Clingan",
        pick: 5,
        year: 2024,
        wiki: "https://en.wikipedia.org/wiki/2024_NBA_draft",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Donovan_Clingan_2024.jpg",
        team: "Detroit Pistons",
        college: "UConn",
        position: "C",
        nationality: "USA"
    }
];

let currentPlayer = null;
let attemptsLeft = 3;
let timer = null;
let timeLeft = 60;
let shownPlayerIndices = [];
let score = 0;
let total = 0;
let filteredIndices = [];
let currentDifficulty = 'easy';

function updateScoreDisplay() {
    document.getElementById('score').textContent = `Score: ${score}/${total}`;
}

function filterPlayersByDifficulty() {
    let maxPick = 10;
    if (currentDifficulty === 'medium') maxPick = 20;
    if (currentDifficulty === 'hard') maxPick = 30;
    filteredIndices = players
        .map((p, idx) => ({p, idx}))
        .filter(obj => obj.p.pick <= maxPick)
        .map(obj => obj.idx);
}

function getRandomPlayer() {
    // If all filtered players have been shown, reset the session
    if (shownPlayerIndices.length === filteredIndices.length) {
        shownPlayerIndices = [];
        alert('All players for this difficulty have been shown! The pool will now reset.');
    }
    // Get available indices
    const availableIndices = filteredIndices.filter(idx => !shownPlayerIndices.includes(idx));
    // Pick a random available index
    const idx = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    shownPlayerIndices.push(idx);
    return players[idx];
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('timer');
    if (timerEl) {
        timerEl.textContent = `Time left: ${timeLeft}s`;
    }
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 60;
    updateTimerDisplay();
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleGuessTimeout();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function handleGuessTimeout() {
    attemptsLeft--;
    if (attemptsLeft > 0) {
        document.getElementById('result').innerHTML = `⏰ Time's up for this guess! You have ${attemptsLeft} trial${attemptsLeft === 1 ? '' : 's'} left.`;
        startTimer();
    } else {
        document.getElementById('result').innerHTML = `⏰ Out of time! ${currentPlayer.name} was pick #${currentPlayer.pick} in ${currentPlayer.year}. <a href="${currentPlayer.wiki}" target="_blank" rel="noopener">See draft</a>`;
        document.getElementById('next-btn').style.display = 'inline-block';
        document.getElementById('pick-input').disabled = true;
        document.getElementById('year-input').disabled = true;
        document.getElementById('guess-form').querySelector('button[type="submit"]').disabled = true;
        document.getElementById('skip-btn').disabled = true;
        stopTimer();
    }
}

function showPlayer() {
    currentPlayer = getRandomPlayer();
    attemptsLeft = 3;
    document.getElementById('player-name').textContent = `Player: ${currentPlayer.name}`;
    document.getElementById('result').textContent = '';
    document.getElementById('guess-form').reset();
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('pick-input').disabled = false;
    document.getElementById('year-input').disabled = false;
    document.getElementById('guess-form').querySelector('button[type="submit"]').disabled = false;
    document.getElementById('skip-btn').disabled = false;
    document.getElementById('player-details').style.display = 'none';
    startTimer();
}

function showPlayerDetails() {
    const details = document.getElementById('player-details');
    details.innerHTML = `
        <strong>Team:</strong> ${currentPlayer.team || 'N/A'}<br>
        <strong>College:</strong> ${currentPlayer.college || 'N/A'}<br>
        <strong>Position:</strong> ${currentPlayer.position || 'N/A'}<br>
        <strong>Nationality:</strong> ${currentPlayer.nationality || 'N/A'}
    `;
    details.style.display = 'block';
}

document.getElementById('guess-form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (timeLeft <= 0) return;
    const pick = parseInt(document.getElementById('pick-input').value, 10);
    const year = parseInt(document.getElementById('year-input').value, 10);

    let resultMsg = '';
    total++;
    if (pick === currentPlayer.pick && year === currentPlayer.year) {
        score++;
        resultMsg = `✅ Correct! ${currentPlayer.name} was pick #${currentPlayer.pick} in ${currentPlayer.year}.`;
        document.getElementById('next-btn').style.display = 'inline-block';
        document.getElementById('pick-input').disabled = true;
        document.getElementById('year-input').disabled = true;
        document.getElementById('guess-form').querySelector('button[type="submit"]').disabled = true;
        document.getElementById('skip-btn').disabled = true;
        stopTimer();
        showPlayerDetails();
    } else {
        attemptsLeft--;
        let hints = [];
        if (pick !== currentPlayer.pick) {
            hints.push(`Pick: ${pick < currentPlayer.pick ? 'Higher' : 'Lower'}`);
        }
        if (year !== currentPlayer.year) {
            hints.push(`Year: ${year < currentPlayer.year ? 'Higher' : 'Lower'}`);
        }
        if (attemptsLeft > 0) {
            resultMsg = `❌ Not quite! ${hints.join(' | ')}<br>You have ${attemptsLeft} trial${attemptsLeft === 1 ? '' : 's'} left.`;
            startTimer(); // reset timer for next guess
        } else {
            resultMsg = `❌ Out of trials! ${currentPlayer.name} was pick #${currentPlayer.pick} in ${currentPlayer.year}. <a href="${currentPlayer.wiki}" target="_blank" rel="noopener">See draft</a>`;
            document.getElementById('next-btn').style.display = 'inline-block';
            document.getElementById('pick-input').disabled = true;
            document.getElementById('year-input').disabled = true;
            document.getElementById('guess-form').querySelector('button[type="submit"]').disabled = true;
            document.getElementById('skip-btn').disabled = true;
            stopTimer();
            showPlayerDetails();
        }
    }
    document.getElementById('result').innerHTML = resultMsg;
    updateScoreDisplay();
});

document.getElementById('next-btn').addEventListener('click', showPlayer);
document.getElementById('skip-btn').addEventListener('click', function() {
    total++;
    document.getElementById('result').innerHTML = `⏩ Skipped! ${currentPlayer.name} was pick #${currentPlayer.pick} in ${currentPlayer.year}. <a href="${currentPlayer.wiki}" target="_blank" rel="noopener">See draft</a>`;
    document.getElementById('next-btn').style.display = 'inline-block';
    document.getElementById('pick-input').disabled = true;
    document.getElementById('year-input').disabled = true;
    document.getElementById('guess-form').querySelector('button[type="submit"]').disabled = true;
    document.getElementById('skip-btn').disabled = true;
    stopTimer();
    showPlayerDetails();
    updateScoreDisplay();
});

document.getElementById('difficulty').addEventListener('change', function(e) {
    currentDifficulty = e.target.value;
    filterPlayersByDifficulty();
    shownPlayerIndices = [];
    score = 0;
    total = 0;
    updateScoreDisplay();
    showPlayer();
});

// Add timer display to the DOM if not present
if (!document.getElementById('timer')) {
    const timerDiv = document.createElement('div');
    timerDiv.id = 'timer';
    timerDiv.style.textAlign = 'center';
    timerDiv.style.fontWeight = 'bold';
    timerDiv.style.marginBottom = '10px';
    document.getElementById('game').insertBefore(timerDiv, document.getElementById('player-name'));
}

// Initialize game on load
filterPlayersByDifficulty();
updateScoreDisplay();
showPlayer();

async function fetchDraftPlayers(year) {
    const url = `https://en.wikipedia.org/w/api.php?action=parse&page=${year}_NBA_draft&format=json&origin=*`;
    const response = await fetch(url);
    const data = await response.json();
    // Parse data.parse.text to extract player info (may need DOMParser)
    // Return array of player objects
}