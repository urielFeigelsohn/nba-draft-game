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
        wiki: "https://en.wikipedia.org/wiki/2012_NBA_draft"
    },
    {
        name: "Giannis Antetokounmpo",
        pick: 15,
        year: 2013,
        wiki: "https://en.wikipedia.org/wiki/2013_NBA_draft"
    },
    {
        name: "Joel Embiid",
        pick: 3,
        year: 2014,
        wiki: "https://en.wikipedia.org/wiki/2014_NBA_draft"
    },
    {
        name: "Karl-Anthony Towns",
        pick: 1,
        year: 2015,
        wiki: "https://en.wikipedia.org/wiki/2015_NBA_draft"
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
        name: "LaMelo Ball",
        pick: 3,
        year: 2020,
        wiki: "https://en.wikipedia.org/wiki/2020_NBA_draft"
    },
    {
        name: "Paolo Banchero",
        pick: 1,
        year: 2022,
        wiki: "https://en.wikipedia.org/wiki/2022_NBA_draft"
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
        wiki: "https://en.wikipedia.org/wiki/2006_NBA_draft"
    },
    {
        name: "Russell Westbrook",
        pick: 4,
        year: 2008,
        wiki: "https://en.wikipedia.org/wiki/2008_NBA_draft"
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
        name: "Donovan Mitchell",
        pick: 13,
        year: 2017,
        wiki: "https://en.wikipedia.org/wiki/2017_NBA_draft"
    },
    {
        name: "Trae Young",
        pick: 5,
        year: 2018,
        wiki: "https://en.wikipedia.org/wiki/2018_NBA_draft"
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
        name: "Jabari Smith Jr.",
        pick: 3,
        year: 2022,
        wiki: "https://en.wikipedia.org/wiki/2022_NBA_draft"
    },
    {
        name: "Jaden Ivey",
        pick: 5,
        year: 2022,
        wiki: "https://en.wikipedia.org/wiki/2022_NBA_draft"
    },
    {
        name: "Shaedon Sharpe",
        pick: 7,
        year: 2022,
        wiki: "https://en.wikipedia.org/wiki/2022_NBA_draft"
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