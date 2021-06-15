import * as faker from 'faker';

export interface ICity {
  name: string;
  country: string;
  population: number;
  flag: string;
}

export const cities: ICity[] = [
  { name: 'Rio de Janeiro', country: 'Brazil', population: 6_000_000, flag: '🇧🇷' },
  { name: 'New York', country: 'USA', population: 10_000_000, flag: '🇺🇸' },
  { name: 'Berlin', country: 'Germany', population: 3_600_000, flag: '🇩🇪' },
  { name: 'Moscow', country: 'Russia', population: 6_200_000, flag: '🇷🇺' },
  { name: 'Sydney', country: 'Australia', population: 2_700_000, flag: '🇦🇺' },
];
