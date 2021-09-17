import { date, vehicle, datatype } from 'faker';

export interface IGroupedBarItem {
  day: Date;
  product: { title: string; price: number };
  quantity: number;
}

export const createGroupedBarItem = () => {
  const item: IGroupedBarItem = {
    day: date.between(new Date(2021, 10, 1), new Date()),
    product: { title: vehicle.vehicle(), price: datatype.number({ min: 10_000, max: 200_000 }) },
    quantity: datatype.number(10),
  };

  return item;
};

export const initialGroupedData = Array(4)
  .fill({})
  .map((item) => createGroupedBarItem());
