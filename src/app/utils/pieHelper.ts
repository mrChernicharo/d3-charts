export interface ICity {
  name: string;
  country: string;
  population: number;
  flag: string;
  // ageGroups: { _0_14: number; _15_24: number; _25_44: number; _45_64: number; _65: number }; // 0 - 14 / 15 - 24 / 25 - 44 / 45 - 64 / 65+
  ageGroups: number[];
}

export const cities: ICity[] = [
  {
    name: 'Rio de Janeiro',
    country: 'Brazil',
    population: 6_093_472,
    flag: 'π§π·',
    ageGroups: [21.8, 16.3, 33.8, 19.3, 8.6],
  },
  {
    name: 'New York',
    country: 'USA',
    population: 8_336_817,
    flag: 'πΊπΈ',
    ageGroups: [17.36, 11.74, 30.66, 24.76, 15.48],
  },
  {
    name: 'Berlin',
    country: 'Germany',
    population: 3_788_170,
    flag: 'π©πͺ',
    ageGroups: [13.7, 9.4, 31.6, 26.1, 19.2],
  },
  {
    name: 'Moscow',
    country: 'Russia',
    population: 12_593_000,
    flag: 'π·πΊ',
    ageGroups: [18.15, 12.25, 28.51, 25.2, 15.89],
  },
  {
    name: 'Sydney',
    country: 'Australia',
    population: 5_005_400,
    flag: 'π¦πΊ',
    ageGroups: [6.82, 18.1, 48.38, 18.1, 8.6],
  },
  {
    name: 'Bangkok',
    country: 'Thailand',
    population: 7_234_478,
    flag: 'πΉπ­',
    ageGroups: [7.82, 19.1, 46.38, 26.7],
  },
  {
    name: 'Bogota',
    country: 'Colombia',
    population: 8_123_000,
    flag: 'π¨π΄',
    ageGroups: [11.82, 54.48, 23.7],
  },
];
