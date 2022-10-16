export const getNextEpisode = (timeUntilAiring: number) => {
  if (
    Math.floor(timeUntilAiring / (24 * 3600)) > 0 &&
    Math.floor(timeUntilAiring / (24 * 3600)) <= 7
  )
    return `${Math.floor(timeUntilAiring / (24 * 3600))} days`;
  else if (
    Math.floor(timeUntilAiring / 3600) > 0 &&
    Math.floor(timeUntilAiring / (24 * 3600)) <= 24
  )
    return `${Math.floor(timeUntilAiring / 3600)} hours`;
  else return undefined;
};
export function getSeason(nextSeason?: boolean) {
  const SEASON = ['SPRING', 'SUMMER', 'FALL', 'WINTER'];
  const month = new Date().getMonth() + 1;

  let seasonIndex = 3;
  if (3 <= month && month <= 5) {
    seasonIndex = 0;
  }

  if (6 <= month && month <= 8) {
    seasonIndex = 1;
  }

  if (9 <= month && month <= 11) {
    seasonIndex = 2;
  }
  if (nextSeason) {
    seasonIndex = seasonIndex == 3 ? 1 : seasonIndex + 1;
  }
  return SEASON[seasonIndex];
}
