function compareObjects(obj1: any, obj2: any): boolean {
  // Check if both objects are null or undefined
  if (obj1 === null || obj1 === undefined || obj2 === null || obj2 === undefined) {
    return obj1 === obj2; // Return true if both are null or undefined, false otherwise
  }

  // Check if both objects are of the same type
  if (typeof obj1 !== typeof obj2) {
    return false; // Objects are of different types
  }

  // Check if both objects have the same number of keys
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false; // Objects have different numbers of keys
  }

  // Check if all keys and values are equal
  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    if (obj1[key] !== obj2[key]) {
      return false; // Objects have different values for the same key
    }
  }

  return true; // Objects are equal
}