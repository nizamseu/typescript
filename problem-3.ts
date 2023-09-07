function arrayReverse<T>(...params: T[]): T[] {
  return params.reverse();
}

const reverseData = arrayReverse("Banglades", "India", "Pakistan", "UK");
console.log(reverseData);
