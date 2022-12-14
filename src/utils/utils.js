export function extendForSelect (obj, label = 'title', value = 'id') {
  return { ...obj, label: obj[label], value: obj[value] }
}


export function removeDuplicates(arr) {
  const result = [];
  const duplicatesIndices = [];

  arr.forEach((current, index) => {
    if (duplicatesIndices.includes(index)) return;

    result.push(current);

    for (
      let comparisonIndex = index + 1;
      comparisonIndex < arr.length;
      comparisonIndex++
    ) {
      const comparison = arr[comparisonIndex];
      const currentKeys = Object.keys(current);
      const comparisonKeys = Object.keys(comparison);

      if (currentKeys.length !== comparisonKeys.length) continue;

      const currentKeysString = currentKeys.sort().join("").toLowerCase();
      const comparisonKeysString = comparisonKeys.sort().join("").toLowerCase();
      if (currentKeysString !== comparisonKeysString) continue;

      let valuesEqual = true;
      for (let i = 0; i < currentKeys.length; i++) {
        const key = currentKeys[i];
        if (current[key] !== comparison[key]) {
          valuesEqual = false;
          break;
        }
      }
      if (valuesEqual) duplicatesIndices.push(comparisonIndex);
    } 
  });
  return result;
}

export function hasString(item, searchText) {
  return item.toLowerCase().includes(searchText.toLowerCase());
}

export function searhToId(item, searchId) {
  return item === searchId
}

export function getLibraryById (lib, id) {
  return Object.values(lib)
          .filter(item => item.id === id)[0]
}