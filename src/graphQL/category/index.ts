import gql from 'graphql-tag';

export const GET_ALL_GENRES = gql`
  query getAllGenres($type: ExternalLinkMediaType) {
    genres: GenreCollection
    tags: MediaTagCollection {
      name
      description
      category
      isAdult
    }
    externalLink: ExternalLinkSourceCollection(mediaType: $type, type: STREAMING) {
      id
      url
      site
      type
      language
      color
      icon
    }
  }
`;
