import gql from 'graphql-tag';
import { MEDIA_FRAGMENT } from '../fragment/Media';

export const GET_OVER_VIEW = gql`
  {
    trending: Page(page: 1, perPage: 6) {
      media(sort: TRENDING_DESC, type: ANIME) {
        ...media
      }
    }
  }
  ${MEDIA_FRAGMENT}
`;
