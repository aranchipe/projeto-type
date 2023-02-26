type MapStringCallback = (item: string) => string; // tipar funcao

export function mapStrings(
  array: string[],
  callbackfn: MapStringCallback,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => {
  return item.toUpperCase();
});

console.log(abcMapped);
