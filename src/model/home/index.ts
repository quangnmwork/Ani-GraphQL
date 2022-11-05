import { Media } from '../ani';

export interface HomeAniProps {
  trending: { media: Media[] };
  popularSeason: { media: Media[] };
  nextSeason: { media: Media[] };
  popularAllTime: { media: Media[] };
  topAnime: { media: [] };
}
