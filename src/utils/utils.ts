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
