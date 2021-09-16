import { datatype } from 'faker';

export type IMultiLineData = {
  timestamp: number;
  value: number;
};

export type IMultiLineDataset = {
  line1: IMultiLineData[];
  line2: IMultiLineData[];
  line3: IMultiLineData[];
  line4: IMultiLineData[];
};

const timestampsArray = [
  1623416480000, 1623330080000, 1623243680000, 1623157280000, 1623070880000, 1622984480000,
  1622898080000, 1622811680000, 1622725280000, 1622638880000, 1622552480000, 1622466080000,
].reverse();

const valuesFactory = (min: number, max: number): IMultiLineData[] => {
  return Array(timestampsArray.length)
    .fill(0)
    .map((d, i) => ({
      timestamp: timestampsArray[i],
      value: datatype.number({ min, max }),
    }));
};

export const lineMinMax = {
  line1: { min: 10_000, max: 100_000 },
  line2: { min: 100_000, max: 200_000 },
  line3: { min: 200_000, max: 400_000 },
  line4: { min: 400_000, max: 500_000 },
};

const line1Values = valuesFactory(lineMinMax.line1.min, lineMinMax.line1.max);
const line2Values = valuesFactory(lineMinMax.line2.min, lineMinMax.line2.max);
const line3Values = valuesFactory(lineMinMax.line3.min, lineMinMax.line3.max);
const line4Values = valuesFactory(lineMinMax.line4.min, lineMinMax.line4.max);

export const multiLinesDataset: IMultiLineDataset = {
  line1: line1Values,
  line2: line2Values,
  line3: line3Values,
  line4: line4Values,
};

console.log(multiLinesDataset);
