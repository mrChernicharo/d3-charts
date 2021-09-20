import { datatype } from 'faker';

export type IDatum = { [key: string]: number };
export type ISeries = d3.Series<IDatum, string>[];

export interface IStackedAreaItem {
  pizzas: number;
  shakes: number;
  burgers: number;
  salads: number;
  time?: Date;
}

export const initialStackedData: IStackedAreaItem[] = [
  { pizzas: 6, shakes: 20, burgers: 35, salads: 12, time: new Date(2021, 7, 29) },
  { pizzas: 11, shakes: 24, burgers: 30, salads: 16, time: new Date(2021, 7, 30) },
  { pizzas: 9, shakes: 22, burgers: 37, salads: 19, time: new Date(2021, 7, 31) },
  { pizzas: 12, shakes: 18, burgers: 28, salads: 20, time: new Date(2021, 8, 1) },
  { pizzas: 13, shakes: 20, burgers: 20, salads: 12, time: new Date(2021, 8, 2) },
  { pizzas: 16, shakes: 20, burgers: 24, salads: 13, time: new Date(2021, 8, 3) },
  { pizzas: 10, shakes: 21, burgers: 25, salads: 16, time: new Date(2021, 8, 4) },
  { pizzas: 12, shakes: 19, burgers: 35, salads: 22, time: new Date(2021, 8, 5) },
  { pizzas: 8, shakes: 16, burgers: 39, salads: 11, time: new Date(2021, 8, 6) },
  { pizzas: 9, shakes: 24, burgers: 32, salads: 17, time: new Date(2021, 8, 7) },
  { pizzas: 16, shakes: 28, burgers: 40, salads: 22, time: new Date(2021, 8, 8) },
  { pizzas: 18, shakes: 23, burgers: 36, salads: 20, time: new Date(2021, 8, 9) },
];
const minMax = (min: number, max: number) => ({ min, max });

let offset = 0;
const latterDate = (offset: number) =>
  new Date(new Date(2021, 8, 9).getTime() + 24 * 3600 * 1000 * offset);

export const stackedDataFactory = () => {
  offset++;

  const dataItem = {
    pizzas: datatype.number(minMax(20, 50)),
    shakes: datatype.number(minMax(10, 32)),
    burgers: datatype.number(minMax(16, 46)),
    salads: datatype.number(minMax(8, 28)),
    time: latterDate(offset),
  } as IStackedAreaItem;

  return dataItem;
};
