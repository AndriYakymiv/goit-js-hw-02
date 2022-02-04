function getCommonElements(array1, array2) {

let arr = [];
     for (const el of array1) {
         if (array2.includes(el))
              arr.push(el)
     };
     console.log(arr)
return arr;
}

getCommonElements([1, 2, 3], [2, 3])
getCommonElements([1, 2, 3], [2, 1, 17, 19])

