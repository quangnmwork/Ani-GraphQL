import gql from 'graphql-tag';
import { MEDIA_FRAGMENT } from '../fragment/Media';

export const GET_OVER_VIEW = gql`
  query ($season: MediaSeason, $seasonYear: Int, $nextSeason: MediaSeason, $nextYear: Int) {
    trending: Page(page: 1, perPage: 6) {
      media(sort: TRENDING_DESC, type: ANIME) {
        ...media
      }
    }
    popularSeason: Page(page: 1, perPage: 6) {
      media(
        season: $season
        seasonYear: $seasonYear
        sort: POPULARITY_DESC
        type: ANIME
        isAdult: false
      ) {
        ...media
      }
    }
    nextSeason: Page(page: 1, perPage: 6) {
      media(season: $nextSeason, seasonYear: $nextYear, sort: POPULARITY_DESC, type: ANIME) {
        ...media
      }
    }
    popularAllTime: Page(page: 1, perPage: 6) {
      media(sort: POPULARITY_DESC, type: ANIME) {
        ...media
      }
    }
  }
  ${MEDIA_FRAGMENT}
`;
