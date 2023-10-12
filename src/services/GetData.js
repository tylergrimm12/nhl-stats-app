import { nhlTeams } from "../utils";

export async function getPlayerDetails(id) {
  const response = await fetch('https://statsapi.web.nhl.com/api/v1/people/' + id)
  const result = await response.json()
  const player = result.people[0]
  let newResult = {
    id: player.id,
    name: player.fullName,
    age: player.currentAge,
    birthDate: player.birthDate,
    birthCity: player.birthCity,
    birthCountry: player.birthCountry,
    nationality: player.nationality,
    height: player.height,
    weight: player.weight,
    AltCaptain: player.alternateCaptain,
    captain: player.captain,
    rookie: player.rookie,
    shoots: player.shootsCatches,
    currentTeam: player.currentTeam,
    position: player.primaryPosition.type
  };
  return newResult;
}

export async function getPlayerStats(id) {
  const response = await fetch('https://statsapi.web.nhl.com/api/v1/people/' + id + '/stats?stats=statsSingleSeason&season=20232024')
  const result = await response.json()
  const data = result?.stats[0]?.splits[0]?.stat
  let newResult = {
    assists: data?.assists || '0',
    goals: data?.goals || '0',
    blocked: data?.blocked || '0',
    timeOnIce: data?.timeOnIce || '0',
    gwg: data?.gameWinningGoals || '0',
    games: data?.games || '0',
    hits: data?.hits || '0',
    otg: data?.overTimeGoals || '0',
    pims: data?.penaltyMinutes || '0',
    plusMinus: data?.plusMinus || '0',
    powerPlayGoals: data?.powerPlayGoals || '0',
    powerPlayPoints: data?.powerPlayPoints || '0',
    shifts: data?.shifts || '0',
    timeOnIcePerGame: data?.timeOnIcePerGame || '0',
    points: data?.points || '0',
  }
  return newResult;
}



export async function fetchTeam(value) {
  const index = nhlTeams.indexOf(value) + 1;
  const response = await fetch('https://statsapi.web.nhl.com/api/v1/teams/' + index +'/roster')
  const result = await response.json();
  const newResult = []
  result.roster?.forEach(async player => {
    newResult.push({
      id: player.person.id || '-',
      name: player.person.fullName || '-',
      number: player.jerseyNumber || '-',
      position: player.position.type || '-',
      positionAbbr: player.position.abbreviation || '-'
    })
  })
  return newResult;
};


export async function fetchTeams() {
  const response = await fetch('https://statsapi.web.nhl.com/api/v1/teams/')
  const result = await response.json();
  console.log(result)
  return result.teams
}

export async function fetchTeamData(value) {
  const index = nhlTeams.indexOf(value) + 1;
  const response = await fetch('https://statsapi.web.nhl.com/api/v1/teams/' + index +'/stats')
  const result = await response.json();
  const data = result?.stats[0]?.splits[0]?.stat
  const name = result?.stats[0]?.splits[0]?.team.name
  let newResult = {
    name: name,
    games: data?.gamesPlayed || '-',
    wins: data?.wins || '-',
    losses: data?.losses || '-',
    ot: data?.ot || '-',
    pts: data?.pts || '-',
    goalPerGame: data?.goalsPerGame || '-',
    goalsAgainst: data?.goalsAgainstPerGame || '-',
    powerPlayPct: data?.powerPlayPercentage || '-',
    powerPlayGoals: data?.powerPlayGoals || '-',
    powerPlayGoalsAgaints: data?.powerPlayGoalsAgainst || '-',
    powerPlays: data?.powerPlayOpportunities || '-',
    penaltyKill: data?.penaltyKillPercentage || '-',
  }
  return newResult
}

export async function fetchTeamRankings(value) {
  const index = nhlTeams.indexOf(value) + 1;
  const response = await fetch('https://statsapi.web.nhl.com/api/v1/teams/' + index +'/stats')
  const result = await response.json();
  const data = result.stats[1].splits[0]?.stat
  const name = result.stats[1].splits[0]?.team.name
  let newResult = {
    name: name,
    games: data?.gamesPlayed || '-',
    wins: data?.wins || '-',
    losses: data?.losses || '-',
    ot: data?.ot || '-',
    pts: data?.pts || '-',
    goalPerGame: data?.goalsPerGame || '-',
    goalsAgainst: data?.goalsAgainstPerGame || '-',
    powerPlayPct: data?.powerPlayPercentage || '-',
    powerPlayGoals: data?.powerPlayGoals || '-',
    powerPlayGoalsAgaints: data?.powerPlayGoalsAgainst || '-',
    powerPlays: data?.powerPlayOpportunities || '-',
    penaltyKill: data?.penaltyKillPercentage || '-',
  }
  return newResult
}

export async function fetchAwards() {
  const response = await fetch('https://statsapi.web.nhl.com/api/v1/awards')
  const result = await response.json()
  return result.awards
}


export const generatePlayerImage = (player) => {
  const url = 'http://nhl.bamcontent.com/images/headshots/current/168x168/' + player + '.jpg';
  return url;
}

export const generateTeamImage = (team) => {
  const url = 'https://assets.nhle.com/logos/nhl/svg/' + team + '_light.svg';
  return url;
}
