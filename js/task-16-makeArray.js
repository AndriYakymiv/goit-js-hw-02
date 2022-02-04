function makeArray(firstArray, secondArray, maxLength) {
    

    const sumArray = firstArray.concat(secondArray);
    
    if (sumArray.length > maxLength) {

        return sumArray.slice(0, maxLength);
    }

    return (sumArray);
    
  }