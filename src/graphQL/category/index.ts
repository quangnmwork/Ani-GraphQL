import gql from 'graphql-tag';

export const GET_ALL_GENRES = gql`
  {
    genres: GenreCollection
    tags: MediaTagCollection {
      name
    }
  }
`;
