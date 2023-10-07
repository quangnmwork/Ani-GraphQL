import { capitalize } from 'lodash';
import { defineStore } from 'pinia';

export interface FilterBarState {
  search: string;
  genres: string;
  years: number;
  season: string;
  format: string;
  airing: string;
  country: string;
  stream: string;
  episodes: {
    min: number;
    max: number;
  };
  duration: {
    min: number;
    max: number;
  };
  yearRange: {
    min: number;
    max: number;
  };
}

export const formatTags = (value: any, type: keyof FilterBarState) => {
  if (!value) return;
  if (type == 'duration' || type == 'yearRange' || type == 'episodes') {
    return `${capitalize(type)}: ${value['0']} - ${value['1']}`;
  } else {
    if (type == 'search') return `Search : ${value}`;
    else return value;
  }
};

export const useFilterBar = defineStore('useFilterBar', {
  state: (): Partial<FilterBarState> => {
    return {};
  },
  getters: {},
});

