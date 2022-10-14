export interface Media {
  id: number;
  title: {
    userPreferred: string;
  };
  coverImage: {
    extraLarge: string;
    large: string;
    color: string;
  };
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  endDate: {
    year: number;
    month: number;
    day: number;
  };
  bannerImage: string;
  season: string;
  seasonYear: number;
  description: string;
  type: string;
  format: string;
  status: string;
  episodes: number;
  duration: number;
  chapters: any;
  volumes: any;
  genres: string[];
  isAdult: boolean;
  averageScore: number;
  popularity: number;
  mediaListEntry: any;
  nextAiringEpisode: {
    airingAt: number;
    timeUntilAiring: number;
    episode: number;
  };
  studios: {
    edges: [
      {
        isMain: boolean;
        node: {
          id: number;
          name: string;
        };
      }
    ];
  };
}
