export interface ICity {
  name: string;
  country: string;
  population: number;
  flag: string;
  ageGroups: { _0_14: number; _15_24: number; _25_44: number; _45_64: number; _65: number }; // 0 - 14 / 15 - 24 / 25 - 44 / 45 - 64 / 65+
}

export const cities: ICity[] = [
  {
    name: 'Rio de Janeiro',
    country: 'Brazil',
    population: 6_093_472,
    flag: '🇧🇷',
    ageGroups: {
      _0_14: 21.8,
      _15_24: 16.3,
      _25_44: 33.8,
      _45_64: 19.3,
      _65: 8.6,
    },
  },
  {
    name: 'New York',
    country: 'USA',
    population: 8_336_817,
    flag: '🇺🇸',
    ageGroups: {
      _0_14: 17.36,
      _15_24: 11.74,
      _25_44: 30.66,
      _45_64: 24.76,
      _65: 15.48,
    },
  },
  {
    name: 'Berlin',
    country: 'Germany',
    population: 3_788_170,
    flag: '🇩🇪',
    ageGroups: {
      _0_14: 13.7,
      _15_24: 9.4,
      _25_44: 31.6,
      _45_64: 26.1,
      _65: 19.2,
    },
  },
  {
    name: 'Moscow',
    country: 'Russia',
    population: 12_593_000,
    flag: '🇷🇺',
    ageGroups: {
      _0_14: 18.15,
      _15_24: 12.25,
      _25_44: 28.51,
      _45_64: 25.2,
      _65: 15.89,
    },
  },
  {
    name: 'Sydney',
    country: 'Australia',
    population: 5_005_400,
    flag: '🇦🇺',
    ageGroups: {
      _0_14: 6.82,
      _15_24: 18.1,
      _25_44: 48.38,
      _45_64: 18.1,
      _65: 8.6,
    },
  },
];
