export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://sleeper-api.rythm.co'
// export const BASE_URL = 'https://sleeper-api.rythm.co'

export const clusterNames = [
  'geniusSleepers',
  'wiseSleepers',
  'flakySleepers',
  'foolishSleepers',
  'helplessSleepers'
]

function newLang (en, fr) {
  return {en, fr}
}

export const clusterNamesCopy = {
  geniusSleepers: newLang('The Maestros', 'Les Maestros'),
  wiseSleepers: newLang('The Sages', 'Les Sages'),
  flakySleepers: newLang('The Dynamos', 'Les Dynamiques'),
  foolishSleepers: newLang('The Hyperactives', 'Les Hyperactifs'),
  helplessSleepers: newLang('The Seekers', ' Les Insatisfaits')
}
