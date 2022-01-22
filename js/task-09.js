function getExtremeElements(array) {
  
  const firstElement = array[0];
    
    const lastElement = array[array.length - 1]

    return [array[0], array[array.length - 1]];

}
getExtremeElements([1, 2, 3, 4, 5])
getExtremeElements(["Earth", "Mars", "Venus"])