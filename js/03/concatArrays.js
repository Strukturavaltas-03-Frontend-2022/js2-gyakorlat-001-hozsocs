const concatArrays = (string, ...[...array]) => {
    const mergedArray = [string, ...[...array]].flat();
  
    const trimmedMergedArray = mergedArray.map((array) => array.trim());
  
    const uniqueTrimmedMergedArray = new Set(trimmedMergedArray);
  
    uniqueTrimmedMergedArray.forEach((array) => {
      if (array.includes(string)) {
        uniqueTrimmedMergedArray.delete(array);
      }
    });
    const finalArray = Array.from(uniqueTrimmedMergedArray);
  
    return finalArray;
  };
  
  export default concatArrays;