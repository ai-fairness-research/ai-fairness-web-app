export const renderArrayField = (array: string[]): string => {
  if (Array.isArray(array)) {
    return array.join(", ");
  } else {
    return "";
  }
};
