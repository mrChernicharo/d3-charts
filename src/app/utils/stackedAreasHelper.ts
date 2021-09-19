export interface IStackedAreaItem {
  pizzas: number;
  shakes: number;
  burgers: number;
  salads: number;
  time: Date;
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

// export const initialGroupedData = [
//   {
//     product: 'Pizza',
//     price: 50,
//     quantity: 10,
//     time: new Date(2021, 7, 31),
//   },
//   {
//     product: 'Shake',
//     price: 10,
//     quantity: 20,
//     time: new Date(2021, 7, 31),
//   },
//   {
//     product: 'Burger',
//     price: 20,
//     quantity: 27,
//     time: new Date(2021, 7, 31),
//   },
//   {
//     product: 'Pizza',
//     price: 50,
//     quantity: 9,
//     time: new Date(2021, 8, 1),
//   },
//   {
//     product: 'Shake',
//     price: 10,
//     quantity: 24,
//     time: new Date(2021, 8, 1),
//   },
//   {
//     product: 'Burger',
//     price: 20,
//     quantity: 32,
//     time: new Date(2021, 8, 1),
//   },
//   {
//     product: 'Pizza',
//     price: 50,
//     quantity: 11,
//     time: new Date(2021, 8, 2),
//   },
//   {
//     product: 'Shake',
//     price: 10,
//     quantity: 17,
//     time: new Date(2021, 8, 2),
//   },
//   {
//     product: 'Burger',
//     price: 20,
//     quantity: 34,
//     time: new Date(2021, 8, 2),
//   },
//   {
//     product: 'Pizza',
//     price: 50,
//     quantity: 14,
//     time: new Date(2021, 8, 3),
//   },
//   {
//     product: 'Shake',
//     price: 10,
//     quantity: 20,
//     time: new Date(2021, 8, 3),
//   },
//   {
//     product: 'Burger',
//     price: 20,
//     quantity: 39,
//     time: new Date(2021, 8, 3),
//   },
//   {
//     product: 'Pizza',
//     price: 50,
//     quantity: 7,
//     time: new Date(2021, 8, 4),
//   },
//   {
//     product: 'Shake',
//     price: 10,
//     quantity: 22,
//     time: new Date(2021, 8, 4),
//   },
//   {
//     product: 'Burger',
//     price: 20,
//     quantity: 28,
//     time: new Date(2021, 8, 4),
//   },
//   {
//     product: 'Pizza',
//     price: 50,
//     quantity: 14,
//     time: new Date(2021, 8, 5),
//   },
//   {
//     product: 'Shake',
//     price: 10,
//     quantity: 19,
//     time: new Date(2021, 8, 5),
//   },
//   {
//     product: 'Burger',
//     price: 20,
//     quantity: 30,
//     time: new Date(2021, 8, 5),
//   },

//   {
//     product: 'Pizza',
//     price: 50,
//     quantity: 5,
//     time: new Date(2021, 8, 6),
//   },
//   {
//     product: 'Shake',
//     price: 10,
//     quantity: 25,
//     time: new Date(2021, 8, 6),
//   },
//   {
//     product: 'Burger',
//     price: 20,
//     quantity: 27,
//     time: new Date(2021, 8, 6),
//   },
//   {
//     product: 'Pizza',
//     price: 50,
//     quantity: 6,
//     time: new Date(2021, 8, 7),
//   },
//   {
//     product: 'Shake',
//     price: 10,
//     quantity: 21,
//     time: new Date(2021, 8, 7),
//   },
//   {
//     product: 'Burger',
//     price: 20,
//     quantity: 22,
//     time: new Date(2021, 8, 7),
//   },
//   {
//     product: 'Pizza',
//     price: 50,
//     quantity: 10,
//     time: new Date(2021, 8, 8),
//   },
//   {
//     product: 'Shake',
//     price: 10,
//     quantity: 33,
//     time: new Date(2021, 8, 8),
//   },
//   {
//     product: 'Burger',
//     price: 20,
//     quantity: 28,
//     time: new Date(2021, 8, 8),
//   },
// ];
