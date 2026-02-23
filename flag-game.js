/**
 * Flag Guessing Game
 * Levels: 5 Easy, 3 Medium, 2 Hard, 1 Impossible
 * Timer: ~12 seconds per level
 */

const DIFFICULTIES = {
  easy: { levels: 5, points: 100, pointsWithHint: 50, timer: 15 },
  medium: { levels: 3, points: 200, pointsWithHint: 100, timer: 12 },
  hard: { levels: 2, points: 300, pointsWithHint: 150, timer: 12 },
  impossible: { levels: 1, points: 500, pointsWithHint: 250, timer: 10 },
};

const COUNTRIES = {
  easy: [
    { code: 'us', name: 'United States', region: 'North America' },
    { code: 'gb', name: 'United Kingdom', region: 'Europe' },
    { code: 'fr', name: 'France', region: 'Europe' },
    { code: 'de', name: 'Germany', region: 'Europe' },
    { code: 'jp', name: 'Japan', region: 'Asia' },
    { code: 'it', name: 'Italy', region: 'Europe' },
    { code: 'es', name: 'Spain', region: 'Europe' },
    { code: 'br', name: 'Brazil', region: 'South America' },
    { code: 'cn', name: 'China', region: 'Asia' },
    { code: 'ru', name: 'Russia', region: 'Europe' },
    { code: 'in', name: 'India', region: 'Asia' },
    { code: 'au', name: 'Australia', region: 'Oceania' },
    { code: 'ca', name: 'Canada', region: 'North America' },
    { code: 'mx', name: 'Mexico', region: 'North America' },
    { code: 'kr', name: 'South Korea', region: 'Asia' },
    { code: 'nl', name: 'Netherlands', region: 'Europe' },
    { code: 'pl', name: 'Poland', region: 'Europe' },
    { code: 'ar', name: 'Argentina', region: 'South America' },
    { code: 'za', name: 'South Africa', region: 'Africa' },
    { code: 'tr', name: 'Turkey', region: 'Europe' },
    { code: 'pt', name: 'Portugal', region: 'Europe' },
    { code: 'se', name: 'Sweden', region: 'Europe' },
    { code: 'ch', name: 'Switzerland', region: 'Europe' },
    { code: 'be', name: 'Belgium', region: 'Europe' },
    { code: 'gr', name: 'Greece', region: 'Europe' },
    { code: 'at', name: 'Austria', region: 'Europe' },
    { code: 'eg', name: 'Egypt', region: 'Africa' },
    { code: 'ph', name: 'Philippines', region: 'Asia' },
    { code: 'id', name: 'Indonesia', region: 'Asia' },
    { code: 'al', name: 'Albania', region: 'Europe' },
  ],
  medium: [
    { code: 'no', name: 'Norway', region: 'Europe' },
    { code: 'fi', name: 'Finland', region: 'Europe' },
    { code: 'dk', name: 'Denmark', region: 'Europe' },
    { code: 'ie', name: 'Ireland', region: 'Europe' },
    { code: 'nz', name: 'New Zealand', region: 'Oceania' },
    { code: 'sg', name: 'Singapore', region: 'Asia' },
    { code: 'th', name: 'Thailand', region: 'Asia' },
    { code: 'my', name: 'Malaysia', region: 'Asia' },
    { code: 'sa', name: 'Saudi Arabia', region: 'Asia' },
    { code: 'il', name: 'Israel', region: 'Asia' },
    { code: 'ro', name: 'Romania', region: 'Europe' },
    { code: 'ua', name: 'Ukraine', region: 'Europe' },
    { code: 'cz', name: 'Czech Republic', region: 'Europe' },
    { code: 'hu', name: 'Hungary', region: 'Europe' },
    { code: 'hr', name: 'Croatia', region: 'Europe' },
    { code: 'cl', name: 'Chile', region: 'South America' },
    { code: 'co', name: 'Colombia', region: 'South America' },
    { code: 'pe', name: 'Peru', region: 'South America' },
    { code: 'vn', name: 'Vietnam', region: 'Asia' },
    { code: 'pk', name: 'Pakistan', region: 'Asia' },
    { code: 'bd', name: 'Bangladesh', region: 'Asia' },
    { code: 'ng', name: 'Nigeria', region: 'Africa' },
    { code: 'ke', name: 'Kenya', region: 'Africa' },
    { code: 'ma', name: 'Morocco', region: 'Africa' },
    { code: 'ec', name: 'Ecuador', region: 'South America' },
    { code: 've', name: 'Venezuela', region: 'South America' },
    { code: 'gh', name: 'Ghana', region: 'Africa' },
    { code: 'tz', name: 'Tanzania', region: 'Africa' },
    { code: 'et', name: 'Ethiopia', region: 'Africa' },
  ],
  hard: [
    { code: 'sk', name: 'Slovakia', region: 'Europe' },
    { code: 'bg', name: 'Bulgaria', region: 'Europe' },
    { code: 'rs', name: 'Serbia', region: 'Europe' },
    { code: 'lt', name: 'Lithuania', region: 'Europe' },
    { code: 'ee', name: 'Estonia', region: 'Europe' },
    { code: 'lv', name: 'Latvia', region: 'Europe' },
    { code: 'si', name: 'Slovenia', region: 'Europe' },
    { code: 'by', name: 'Belarus', region: 'Europe' },
    { code: 'ge', name: 'Georgia', region: 'Asia' },
    { code: 'az', name: 'Azerbaijan', region: 'Asia' },
    { code: 'kz', name: 'Kazakhstan', region: 'Asia' },
    { code: 'uz', name: 'Uzbekistan', region: 'Asia' },
    { code: 'ir', name: 'Iran', region: 'Asia' },
    { code: 'iq', name: 'Iraq', region: 'Asia' },
    { code: 'ae', name: 'United Arab Emirates', region: 'Asia' },
    { code: 'qa', name: 'Qatar', region: 'Asia' },
    { code: 'kw', name: 'Kuwait', region: 'Asia' },
    { code: 'jo', name: 'Jordan', region: 'Asia' },
    { code: 'lb', name: 'Lebanon', region: 'Asia' },
    { code: 'lk', name: 'Sri Lanka', region: 'Asia' },
    { code: 'np', name: 'Nepal', region: 'Asia' },
    { code: 'mm', name: 'Myanmar', region: 'Asia' },
    { code: 'kh', name: 'Cambodia', region: 'Asia' },
    { code: 'bo', name: 'Bolivia', region: 'South America' },
    { code: 'py', name: 'Paraguay', region: 'South America' },
    { code: 'uy', name: 'Uruguay', region: 'South America' },
    { code: 'cr', name: 'Costa Rica', region: 'North America' },
    { code: 'pa', name: 'Panama', region: 'North America' },
    { code: 'cu', name: 'Cuba', region: 'North America' },
    { code: 'jm', name: 'Jamaica', region: 'North America' },
    { code: 'do', name: 'Dominican Republic', region: 'North America' },
    { code: 'pr', name: 'Puerto Rico', region: 'North America' },
    { code: 'cm', name: 'Cameroon', region: 'Africa' },
    { code: 'ci', name: 'Ivory Coast', region: 'Africa' },
    { code: 'sn', name: 'Senegal', region: 'Africa' },
    { code: 'zw', name: 'Zimbabwe', region: 'Africa' },
    { code: 'ug', name: 'Uganda', region: 'Africa' },
    { code: 'al', name: 'Albania', region: 'Europe' },
    { code: 'mk', name: 'North Macedonia', region: 'Europe' },
    { code: 'ba', name: 'Bosnia and Herzegovina', region: 'Europe' },
  ],
  impossible: [
    { code: 'tv', name: 'Tuvalu', region: 'Oceania' },
    { code: 'nr', name: 'Nauru', region: 'Oceania' },
    { code: 'ki', name: 'Kiribati', region: 'Oceania' },
    { code: 'vu', name: 'Vanuatu', region: 'Oceania' },
    { code: 'sm', name: 'San Marino', region: 'Europe' },
    { code: 'mc', name: 'Monaco', region: 'Europe' },
    { code: 'ad', name: 'Andorra', region: 'Europe' },
    { code: 'li', name: 'Liechtenstein', region: 'Europe' },
    { code: 'mt', name: 'Malta', region: 'Europe' },
    { code: 'cy', name: 'Cyprus', region: 'Europe' },
    { code: 'ls', name: 'Lesotho', region: 'Africa' },
    { code: 'bw', name: 'Botswana', region: 'Africa' },
    { code: 'mz', name: 'Mozambique', region: 'Africa' },
    { code: 'mu', name: 'Mauritius', region: 'Africa' },
    { code: 'fj', name: 'Fiji', region: 'Oceania' },
    { code: 'pg', name: 'Papua New Guinea', region: 'Oceania' },
    { code: 'tl', name: 'Timor-Leste', region: 'Asia' },
    { code: 'bt', name: 'Bhutan', region: 'Asia' },
    { code: 'mn', name: 'Mongolia', region: 'Asia' },
    { code: 'ws', name: 'Samoa', region: 'Oceania' },
    { code: 'to', name: 'Tonga', region: 'Oceania' },
    { code: 'sb', name: 'Solomon Islands', region: 'Oceania' },
    { code: 'fm', name: 'Federated States of Micronesia', region: 'Oceania' },
    { code: 'mh', name: 'Marshall Islands', region: 'Oceania' },
    { code: 'pw', name: 'Palau', region: 'Oceania' },
    { code: 'dm', name: 'Dominica', region: 'North America' },
    { code: 'gd', name: 'Grenada', region: 'North America' },
    { code: 'lc', name: 'Saint Lucia', region: 'North America' },
    { code: 'vc', name: 'Saint Vincent and the Grenadines', region: 'North America' },
    { code: 'ag', name: 'Antigua and Barbuda', region: 'North America' },
    { code: 'kn', name: 'Saint Kitts and Nevis', region: 'North America' },
    { code: 'bb', name: 'Barbados', region: 'North America' },
    { code: 'tt', name: 'Trinidad and Tobago', region: 'North America' },
    { code: 'bs', name: 'Bahamas', region: 'North America' },
    { code: 'bz', name: 'Belize', region: 'North America' },
    { code: 'gy', name: 'Guyana', region: 'South America' },
    { code: 'sr', name: 'Suriname', region: 'South America' },
    { code: 'ga', name: 'Gabon', region: 'Africa' },
    { code: 'cg', name: 'Republic of the Congo', region: 'Africa' },
    { code: 'cd', name: 'Democratic Republic of the Congo', region: 'Africa' },
    { code: 'rw', name: 'Rwanda', region: 'Africa' },
    { code: 'bj', name: 'Benin', region: 'Africa' },
    { code: 'tg', name: 'Togo', region: 'Africa' },
    { code: 'ne', name: 'Niger', region: 'Africa' },
    { code: 'ml', name: 'Mali', region: 'Africa' },
    { code: 'bf', name: 'Burkina Faso', region: 'Africa' },
    { code: 'gn', name: 'Guinea', region: 'Africa' },
    { code: 'sl', name: 'Sierra Leone', region: 'Africa' },
    { code: 'lr', name: 'Liberia', region: 'Africa' },
    { code: 'gm', name: 'Gambia', region: 'Africa' },
    { code: 'gw', name: 'Guinea-Bissau', region: 'Africa' },
    { code: 'cv', name: 'Cape Verde', region: 'Africa' },
    { code: 'km', name: 'Comoros', region: 'Africa' },
    { code: 'sc', name: 'Seychelles', region: 'Africa' },
    { code: 'dj', name: 'Djibouti', region: 'Africa' },
    { code: 'er', name: 'Eritrea', region: 'Africa' },
    { code: 'ss', name: 'South Sudan', region: 'Africa' },
    { code: 'sy', name: 'Syria', region: 'Asia' },
    { code: 'ye', name: 'Yemen', region: 'Asia' },
    { code: 'om', name: 'Oman', region: 'Asia' },
    { code: 'bh', name: 'Bahrain', region: 'Asia' },
    { code: 'af', name: 'Afghanistan', region: 'Asia' },
    { code: 'tm', name: 'Turkmenistan', region: 'Asia' },
    { code: 'tj', name: 'Tajikistan', region: 'Asia' },
    { code: 'kg', name: 'Kyrgyzstan', region: 'Asia' },
    { code: 'la', name: 'Laos', region: 'Asia' },
    { code: 'bn', name: 'Brunei', region: 'Asia' },
    { code: 'mv', name: 'Maldives', region: 'Asia' },
    { code: 'am', name: 'Armenia', region: 'Asia' },
  ],
};

// DOM elements
const levelDisplay = document.getElementById('level-display');
const scoreDisplay = document.getElementById('score-display');
const timerDisplay = document.getElementById('timer-display');
const flagImage = document.getElementById('flag-image');
const countryInput = document.getElementById('country-input');
const submitBtn = document.getElementById('submit-btn');
const hintBtn = document.getElementById('hint-btn');
const hintText = document.getElementById('hint-text');
const messageEl = document.getElementById('message');
const gameOverSection = document.getElementById('game-over');
const finalScoreEl = document.getElementById('final-score');
const playAgainBtn = document.getElementById('play-again-btn');
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const gameArea = document.querySelector('.game-area');
const gameHeader = document.getElementById('game-header');
const timerStat = document.querySelector('.timer-stat');

// Game state
let currentLevel = 0;
let score = 0;
let currentCountry = null;
let hintUsed = false;
let timerInterval = null;
let gameQueue = [];
let totalLevels = 11;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getDifficultyForLevel(level) {
  if (level <= 5) return 'easy';
  if (level <= 8) return 'medium';
  if (level <= 10) return 'hard';
  return 'impossible';
}

function buildGameQueue() {
  const queue = [];
  const easyPool = shuffle(COUNTRIES.easy);
  const mediumPool = shuffle(COUNTRIES.medium);
  const hardPool = shuffle(COUNTRIES.hard);
  const impossiblePool = shuffle(COUNTRIES.impossible);

  for (let i = 0; i < 5; i++) queue.push(easyPool[i]);
  for (let i = 0; i < 3; i++) queue.push(mediumPool[i]);
  for (let i = 0; i < 2; i++) queue.push(hardPool[i]);
  queue.push(impossiblePool[0]);

  return queue;
}

function normalizeAnswer(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/^(the)\s+/i, '');
}

function answersMatch(user, correct) {
  const u = normalizeAnswer(user);
  const c = normalizeAnswer(correct);
  if (u === c) return true;
  const aliases = {
    'united states': ['usa', 'america', 'united states of america'],
    'united kingdom': ['uk', 'great britain', 'britain', 'england'],
    'south korea': ['korea', 'republic of korea'],
    'czech republic': ['czechia', 'czech'],
    'turkey': ['türkiye', 'turkiye'],
    'timor-leste': ['east timor', 'timor leste'],
    'ivory coast': ['côte d\'ivoire', 'cote d\'ivoire', 'cote divoire'],
    'north macedonia': ['macedonia'],
    'republic of the congo': ['congo', 'republic of congo'],
    'democratic republic of the congo': ['drc', 'democratic republic of congo'],
    'federated states of micronesia': ['micronesia'],
    'laos': ['lao', 'lao pdr'],
    'myanmar': ['burma'],
    'cape verde': ['cabo verde'],
  };
  const canon = Object.keys(aliases).find(k => normalizeAnswer(k) === c);
  if (canon && aliases[canon].some(a => a === u)) return true;
  return false;
}

function startTimer(seconds) {
  if (timerInterval) clearInterval(timerInterval);
  let remaining = seconds;
  timerDisplay.textContent = remaining;
  timerStat.classList.remove('warning', 'danger');
  if (remaining <= 5) timerStat.classList.add('danger');
  else if (remaining <= 7) timerStat.classList.add('warning');

  timerInterval = setInterval(() => {
    remaining--;
    timerDisplay.textContent = remaining;
    timerStat.classList.remove('warning', 'danger');
    if (remaining <= 5) timerStat.classList.add('danger');
    else if (remaining <= 7) timerStat.classList.add('warning');
    if (remaining <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      endGame('Time\'s up!');
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function showLevel() {
  const diff = getDifficultyForLevel(currentLevel);
  const config = DIFFICULTIES[diff];
  currentCountry = gameQueue[currentLevel - 1];
  hintUsed = false;

  flagImage.src = `https://flagcdn.com/w320/${currentCountry.code}.png`;
  flagImage.alt = 'Country flag';
  countryInput.value = '';
  countryInput.focus();
  hintText.textContent = '';
  hintText.classList.add('hidden');
  hintBtn.disabled = false;
  messageEl.textContent = '';
  messageEl.classList.remove('error', 'win-message');

  levelDisplay.textContent = currentLevel;
  scoreDisplay.textContent = score;
  startTimer(config.timer);
}

function showHint() {
  if (hintUsed) return;
  hintUsed = true;
  hintBtn.disabled = true;
  hintText.textContent = `This country is in ${currentCountry.region}.`;
  hintText.classList.remove('hidden');
}

function awardPoints() {
  const diff = getDifficultyForLevel(currentLevel);
  const config = DIFFICULTIES[diff];
  const pts = hintUsed ? config.pointsWithHint : config.points;
  score += pts;
  scoreDisplay.textContent = score;
}

function nextLevel() {
  stopTimer();
  awardPoints();
  messageEl.textContent = 'Correct!';
  messageEl.classList.add('win-message');
  messageEl.classList.remove('error');

  if (currentLevel >= totalLevels) {
    setTimeout(() => {
      messageEl.textContent = 'You won!';
      endGame('You completed all levels!', true);
    }, 800);
    return;
  }

  currentLevel++;
  setTimeout(showLevel, 1000);
}

function endGame(reason, won = false) {
  stopTimer();
  gameHeader.classList.add('hidden');
  gameArea.classList.add('hidden');
  gameOverSection.classList.remove('hidden');
  finalScoreEl.textContent = score;
  const h2 = gameOverSection.querySelector('h2');
  h2.textContent = won ? 'You Won!' : 'Game Over';
  h2.style.color = won ? 'var(--success)' : 'var(--danger)';

  const answerTable = document.getElementById('answer-table');
  const gameOverFlag = document.getElementById('game-over-flag');
  const correctAnswerCell = document.getElementById('correct-answer-cell');

  if (won) {
    answerTable.classList.add('hidden');
  } else {
    answerTable.classList.remove('hidden');
    if (currentCountry) {
      gameOverFlag.src = `https://flagcdn.com/w320/${currentCountry.code}.png`;
      gameOverFlag.alt = currentCountry.name;
      correctAnswerCell.textContent = currentCountry.name;
    }
  }
}

function checkAnswer() {
  const answer = countryInput.value.trim();
  if (!answer) return;

  stopTimer();
  if (answersMatch(answer, currentCountry.name)) {
    nextLevel();
  } else {
    messageEl.textContent = `Wrong! It was ${currentCountry.name}.`;
    messageEl.classList.add('error');
    setTimeout(() => endGame('Wrong answer'), 1200);
  }
}

function resetGame() {
  currentLevel = 1;
  score = 0;
  gameQueue = buildGameQueue();
  gameOverSection.classList.add('hidden');
  startScreen.classList.add('hidden');
  gameHeader.classList.remove('hidden');
  gameArea.classList.remove('hidden');
  showLevel();
}

function init() {
  startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    gameArea.classList.remove('hidden');
    resetGame();
  });

  playAgainBtn.addEventListener('click', () => {
    resetGame();
  });

  submitBtn.addEventListener('click', checkAnswer);

  countryInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkAnswer();
  });

  hintBtn.addEventListener('click', showHint);
}

init();
