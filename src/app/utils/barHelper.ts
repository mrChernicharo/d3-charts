import * as faker from 'faker';
import { IBarData } from '../app.component';

export const createItem = () => {
  const item: IBarData = {
    description: faker.vehicle.vehicle(),
    year: Math.floor(Math.random() * 52) + 1970,
    value: Math.floor(Math.random() * 400_000) + 10_000,
  };
  return item;
};

export const initialBarData = Array(5)
  .fill({})
  .map((item) => createItem());
