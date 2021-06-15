import * as faker from 'faker';

export interface ICar {
  year: number;
  value: number;
  description: string;
}

export const createItem = () => {
  const item: ICar = {
    description: faker.vehicle.vehicle(),
    year: Math.floor(Math.random() * 52) + 1970, // 1970 - 2021
    value: Math.floor(Math.random() * 400_001) + 10_000, // 10_000 - 410_000
  };
  return item;
};

export const initialCars = Array(5)
  .fill({})
  .map((item) => createItem());
