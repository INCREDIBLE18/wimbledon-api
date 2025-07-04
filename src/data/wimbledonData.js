/**
 * Wimbledon Men's Singles Finals Data (Open Era: 1968-2024)
 * Data includes champion, runner-up, score, number of sets, and tiebreak information
 */

const wimbledonFinals = {
  2024: {
    year: 2024,
    champion: 'Carlos Alcaraz',
    runner_up: 'Novak Djokovic',
    score: '6–2, 6–2, 7–6(7–4)',
    sets: 3,
    tiebreak: true
  },
  2023: {
    year: 2023,
    champion: 'Novak Djokovic',
    runner_up: 'Carlos Alcaraz',
    score: '1–6, 7–6(8–6), 6–1, 3–6, 6–4',
    sets: 5,
    tiebreak: true
  },
  2022: {
    year: 2022,
    champion: 'Novak Djokovic',
    runner_up: 'Nick Kyrgios',
    score: '4–6, 6–3, 6–4, 7–6(7–3)',
    sets: 4,
    tiebreak: true
  },
  2021: {
    year: 2021,
    champion: 'Novak Djokovic',
    runner_up: 'Matteo Berrettini',
    score: '6–7(4–7), 6–4, 6–4, 6–3',
    sets: 4,
    tiebreak: true
  },
  2020: {
    year: 2020,
    champion: 'Tournament Cancelled',
    runner_up: 'Due to COVID-19',
    score: 'N/A',
    sets: 0,
    tiebreak: false
  },
  2019: {
    year: 2019,
    champion: 'Novak Djokovic',
    runner_up: 'Roger Federer',
    score: '7–6(7–5), 1–6, 7–6(7–4), 4–6, 13–12(7–3)',
    sets: 5,
    tiebreak: true
  },
  2018: {
    year: 2018,
    champion: 'Novak Djokovic',
    runner_up: 'Kevin Anderson',
    score: '6–2, 6–2, 7–6(7–3)',
    sets: 3,
    tiebreak: true
  },
  2017: {
    year: 2017,
    champion: 'Roger Federer',
    runner_up: 'Marin Čilić',
    score: '6–3, 6–1, 6–4',
    sets: 3,
    tiebreak: false
  },
  2016: {
    year: 2016,
    champion: 'Andy Murray',
    runner_up: 'Milos Raonic',
    score: '6–4, 7–6(7–3), 7–6(7–2)',
    sets: 3,
    tiebreak: true
  },
  2015: {
    year: 2015,
    champion: 'Novak Djokovic',
    runner_up: 'Roger Federer',
    score: '7–6(7–1), 6–7(10–12), 6–4, 6–3',
    sets: 4,
    tiebreak: true
  },
  2014: {
    year: 2014,
    champion: 'Novak Djokovic',
    runner_up: 'Roger Federer',
    score: '6–7(7–9), 6–4, 7–6(7–4), 5–7, 6–4',
    sets: 5,
    tiebreak: true
  },
  2013: {
    year: 2013,
    champion: 'Andy Murray',
    runner_up: 'Novak Djokovic',
    score: '6–4, 7–5, 6–4',
    sets: 3,
    tiebreak: false
  },
  2012: {
    year: 2012,
    champion: 'Roger Federer',
    runner_up: 'Andy Murray',
    score: '4–6, 7–5, 6–3, 6–4',
    sets: 4,
    tiebreak: false
  },
  2011: {
    year: 2011,
    champion: 'Novak Djokovic',
    runner_up: 'Rafael Nadal',
    score: '6–4, 6–1, 1–6, 6–3',
    sets: 4,
    tiebreak: false
  },
  2010: {
    year: 2010,
    champion: 'Rafael Nadal',
    runner_up: 'Tomáš Berdych',
    score: '6–3, 7–5, 6–4',
    sets: 3,
    tiebreak: false
  },
  2009: {
    year: 2009,
    champion: 'Roger Federer',
    runner_up: 'Andy Roddick',
    score: '5–7, 7–6(8–6), 7–6(7–5), 3–6, 16–14',
    sets: 5,
    tiebreak: true
  },
  2008: {
    year: 2008,
    champion: 'Rafael Nadal',
    runner_up: 'Roger Federer',
    score: '6–4, 6–4, 6–7(5–7), 6–7(8–10), 9–7',
    sets: 5,
    tiebreak: true
  },
  2007: {
    year: 2007,
    champion: 'Roger Federer',
    runner_up: 'Rafael Nadal',
    score: '7–6(9–7), 4–6, 7–6(7–3), 2–6, 6–2',
    sets: 5,
    tiebreak: true
  },
  2006: {
    year: 2006,
    champion: 'Roger Federer',
    runner_up: 'Rafael Nadal',
    score: '6–0, 7–6(7–5), 6–7(2–7), 6–3',
    sets: 4,
    tiebreak: true
  },
  2005: {
    year: 2005,
    champion: 'Roger Federer',
    runner_up: 'Andy Roddick',
    score: '6–2, 7–6(7–2), 6–4',
    sets: 3,
    tiebreak: true
  },
  2004: {
    year: 2004,
    champion: 'Roger Federer',
    runner_up: 'Andy Roddick',
    score: '4–6, 7–5, 7–6(7–3), 6–4',
    sets: 4,
    tiebreak: true
  },
  2003: {
    year: 2003,
    champion: 'Roger Federer',
    runner_up: 'Mark Philippoussis',
    score: '7–6(7–5), 6–2, 7–6(7–3)',
    sets: 3,
    tiebreak: true
  },
  2002: {
    year: 2002,
    champion: 'Lleyton Hewitt',
    runner_up: 'David Nalbandian',
    score: '6–1, 6–3, 6–2',
    sets: 3,
    tiebreak: false
  },
  2001: {
    year: 2001,
    champion: 'Goran Ivanišević',
    runner_up: 'Pat Rafter',
    score: '6–3, 3–6, 6–3, 2–6, 9–7',
    sets: 5,
    tiebreak: false
  },
  2000: {
    year: 2000,
    champion: 'Pete Sampras',
    runner_up: 'Pat Rafter',
    score: '6–7(10–12), 7–6(7–5), 6–4, 6–2',
    sets: 4,
    tiebreak: true
  },
  1999: {
    year: 1999,
    champion: 'Pete Sampras',
    runner_up: 'Andre Agassi',
    score: '6–3, 6–4, 7–5',
    sets: 3,
    tiebreak: false
  },
  1998: {
    year: 1998,
    champion: 'Pete Sampras',
    runner_up: 'Goran Ivanišević',
    score: '6–7(2–7), 7–6(11–9), 6–4, 3–6, 6–2',
    sets: 5,
    tiebreak: true
  },
  1997: {
    year: 1997,
    champion: 'Pete Sampras',
    runner_up: 'Cédric Pioline',
    score: '6–4, 6–2, 6–4',
    sets: 3,
    tiebreak: false
  },
  1996: {
    year: 1996,
    champion: 'Richard Krajicek',
    runner_up: 'MaliVai Washington',
    score: '6–3, 6–4, 6–3',
    sets: 3,
    tiebreak: false
  },
  1995: {
    year: 1995,
    champion: 'Pete Sampras',
    runner_up: 'Boris Becker',
    score: '6–7(5–7), 6–2, 6–4, 6–2',
    sets: 4,
    tiebreak: true
  },
  1994: {
    year: 1994,
    champion: 'Pete Sampras',
    runner_up: 'Goran Ivanišević',
    score: '7–6(7–2), 7–6(7–5), 6–0',
    sets: 3,
    tiebreak: true
  },
  1993: {
    year: 1993,
    champion: 'Pete Sampras',
    runner_up: 'Jim Courier',
    score: '7–6(7–3), 7–6(8–6), 3–6, 6–3',
    sets: 4,
    tiebreak: true
  },
  1992: {
    year: 1992,
    champion: 'Andre Agassi',
    runner_up: 'Goran Ivanišević',
    score: '6–7(8–10), 6–4, 6–4, 1–6, 6–4',
    sets: 5,
    tiebreak: true
  },
  1991: {
    year: 1991,
    champion: 'Michael Stich',
    runner_up: 'Boris Becker',
    score: '6–4, 7–6(7–4), 6–4',
    sets: 3,
    tiebreak: true
  },
  1990: {
    year: 1990,
    champion: 'Stefan Edberg',
    runner_up: 'Boris Becker',
    score: '6–2, 6–2, 3–6, 3–6, 6–4',
    sets: 5,
    tiebreak: false
  },
  1989: {
    year: 1989,
    champion: 'Boris Becker',
    runner_up: 'Stefan Edberg',
    score: '6–0, 7–6(7–1), 6–4',
    sets: 3,
    tiebreak: true
  },
  1988: {
    year: 1988,
    champion: 'Stefan Edberg',
    runner_up: 'Boris Becker',
    score: '4–6, 7–6(7–2), 6–4, 6–2',
    sets: 4,
    tiebreak: true
  },
  1987: {
    year: 1987,
    champion: 'Pat Cash',
    runner_up: 'Ivan Lendl',
    score: '7–6(7–5), 6–2, 7–5',
    sets: 3,
    tiebreak: true
  },
  1986: {
    year: 1986,
    champion: 'Boris Becker',
    runner_up: 'Ivan Lendl',
    score: '6–4, 6–3, 7–5',
    sets: 3,
    tiebreak: false
  },
  1985: {
    year: 1985,
    champion: 'Boris Becker',
    runner_up: 'Kevin Curren',
    score: '6–3, 6–7(4–7), 7–6(7–3), 6–4',
    sets: 4,
    tiebreak: true
  },
  1984: {
    year: 1984,
    champion: 'John McEnroe',
    runner_up: 'Jimmy Connors',
    score: '6–1, 6–1, 6–2',
    sets: 3,
    tiebreak: false
  },
  1983: {
    year: 1983,
    champion: 'John McEnroe',
    runner_up: 'Chris Lewis',
    score: '6–2, 6–2, 6–2',
    sets: 3,
    tiebreak: false
  },
  1982: {
    year: 1982,
    champion: 'Jimmy Connors',
    runner_up: 'John McEnroe',
    score: '3–6, 6–3, 6–7(2–7), 7–6(7–5), 6–4',
    sets: 5,
    tiebreak: true
  },
  1981: {
    year: 1981,
    champion: 'John McEnroe',
    runner_up: 'Björn Borg',
    score: '4–6, 7–6(7–1), 7–6(7–4), 6–4',
    sets: 4,
    tiebreak: true
  },
  1980: {
    year: 1980,
    champion: 'Björn Borg',
    runner_up: 'John McEnroe',
    score: '1–6, 7–5, 6–3, 6–7(16–18), 8–6',
    sets: 5,
    tiebreak: true
  },
  1979: {
    year: 1979,
    champion: 'Björn Borg',
    runner_up: 'Roscoe Tanner',
    score: '6–7(4–7), 6–1, 3–6, 6–3, 6–4',
    sets: 5,
    tiebreak: true
  },
  1978: {
    year: 1978,
    champion: 'Björn Borg',
    runner_up: 'Jimmy Connors',
    score: '6–2, 6–2, 6–3',
    sets: 3,
    tiebreak: false
  },
  1977: {
    year: 1977,
    champion: 'Björn Borg',
    runner_up: 'Jimmy Connors',
    score: '3–6, 6–2, 6–1, 5–7, 6–4',
    sets: 5,
    tiebreak: false
  },
  1976: {
    year: 1976,
    champion: 'Björn Borg',
    runner_up: 'Ilie Năstase',
    score: '6–4, 6–2, 9–7',
    sets: 3,
    tiebreak: false
  },
  1975: {
    year: 1975,
    champion: 'Arthur Ashe',
    runner_up: 'Jimmy Connors',
    score: '6–1, 6–1, 5–7, 6–4',
    sets: 4,
    tiebreak: false
  },
  1974: {
    year: 1974,
    champion: 'Jimmy Connors',
    runner_up: 'Ken Rosewall',
    score: '6–1, 6–1, 6–4',
    sets: 3,
    tiebreak: false
  },
  1973: {
    year: 1973,
    champion: 'Jan Kodeš',
    runner_up: 'Alex Metreveli',
    score: '6–1, 9–8, 6–3',
    sets: 3,
    tiebreak: false
  },
  1972: {
    year: 1972,
    champion: 'Stan Smith',
    runner_up: 'Ilie Năstase',
    score: '4–6, 6–3, 6–3, 4–6, 7–5',
    sets: 5,
    tiebreak: false
  },
  1971: {
    year: 1971,
    champion: 'John Newcombe',
    runner_up: 'Stan Smith',
    score: '6–3, 5–7, 2–6, 6–4, 6–4',
    sets: 5,
    tiebreak: false
  },
  1970: {
    year: 1970,
    champion: 'John Newcombe',
    runner_up: 'Ken Rosewall',
    score: '5–7, 6–3, 6–2, 3–6, 6–1',
    sets: 5,
    tiebreak: false
  },
  1969: {
    year: 1969,
    champion: 'Rod Laver',
    runner_up: 'John Newcombe',
    score: '6–4, 5–7, 6–4, 6–4',
    sets: 4,
    tiebreak: false
  },
  1968: {
    year: 1968,
    champion: 'Rod Laver',
    runner_up: 'Tony Roche',
    score: '6–3, 6–4, 6–2',
    sets: 3,
    tiebreak: false
  }
};

/**
 * Get Wimbledon final data by year
 * @param {number} year - The year to get data for
 * @returns {Object|null} Final data or null if not found
 */
const getFinalByYear = (year) => {
  return wimbledonFinals[year] || null;
};

/**
 * Get all available years
 * @returns {number[]} Array of years with data
 */
const getAvailableYears = () => {
  return Object.keys(wimbledonFinals).map(year => parseInt(year)).sort((a, b) => b - a);
};

/**
 * Get champions by decade
 * @param {number} decade - The decade (e.g., 2020, 2010, 2000)
 * @returns {Object[]} Array of finals from that decade
 */
const getFinalsByDecade = (decade) => {
  return Object.values(wimbledonFinals)
    .filter(final => Math.floor(final.year / 10) * 10 === decade)
    .sort((a, b) => b.year - a.year);
};

module.exports = {
  getFinalByYear,
  getAvailableYears,
  getFinalsByDecade,
  wimbledonFinals
};
