export const toggleValueFromArrayByBoolean = <ArrayValueType>(
  array: ArrayValueType[],
  value: ArrayValueType,
  shouldAllow: boolean
) => {
  if (shouldAllow) {
    if (array.includes(value)) {
      return array;
    }

    return [...array, value];
  }

  return array.filter((arrayValue) => arrayValue !== value);
};
