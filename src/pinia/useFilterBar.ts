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
}

export const useFilterBar = defineStore('useFilterBar', {
  state: (): Partial<FilterBarState> => {
    return {};
  },
});
