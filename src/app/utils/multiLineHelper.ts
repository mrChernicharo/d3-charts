import { datatype } from 'faker';

export type IMultiLineData = {
  timestamp: number;
  value: number;
};

export type IMultiLineDataset = {
  [key: string]: IMultiLineData[];
};

const timestampsArray = [
  1624453280000, 1624366880000, 1624280480000, 1624194080000, 1624107680000, 1624021280000,
  1623934880000, 1623848480000, 1623762080000, 1623675680000, 1623589280000, 1623502880000,
  1623416480000, 1623330080000, 1623243680000, 1623157280000, 1623070880000, 1622984480000,
  1622898080000, 1622811680000, 1622725280000, 1622638880000, 1622552480000, 1622466080000,
].reverse();

const valuesFactory = (): IMultiLineData[] => {
  return Array(24)
    .fill(0)
    .map((d, i) => ({
      timestamp: timestampsArray[i],
      value: datatype.number({ min: 1_000, max: 470_000 }),
    }));
};

const line1Values = valuesFactory();
const line2Values = valuesFactory();
const line3Values = valuesFactory();
const line4Values = valuesFactory();

export const multiLinesDataset: IMultiLineDataset = {
  line1: line1Values,
  line2: line2Values,
  line3: line3Values,
  line4: line4Values,
};

console.log(multiLinesDataset);
