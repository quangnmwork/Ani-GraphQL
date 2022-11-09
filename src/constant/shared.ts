export const FROM_YEAR = 1940;
export const SEASON = ['WINTER', 'SPRING', 'SUMMER', 'FALL'];
export const FORMAT = ['TV Show', 'Movie', 'TV Short', 'Special', 'OVA', 'ONA', 'Music'];
export const AIRING_STATUS = ['Airing', 'Finished', 'Not Yet Aired', 'Cancelled'];
export const COUNTRY = ['Japan', 'South Korea', 'China', 'Taiwan'];

export const YEAR_CATEGORY = Array.from(
  { length: new Date().getFullYear() - FROM_YEAR + 2 },
  (_, i) => (FROM_YEAR + i).toString()
);
export interface DynamicObject {
  [key: string]: any;
}
