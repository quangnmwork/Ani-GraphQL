import gql from 'graphql-tag';
import { MEDIA_FRAGMENT } from '../fragment';

export const GET_OVERVIEW = gql`
  ${MEDIA_FRAGMENT}
  {
    trending: Page(page: 1, perPage: 6) {
      media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
        ...media
      }
    }
  }
`;
