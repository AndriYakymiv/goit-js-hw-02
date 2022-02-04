function getEvenNumbers(start, end) {

   const evenNubers = [];

  for (let i = start; i <= end; i++) {
     
     if (i % 2 === 0) {
       evenNubers.push(i);
       
     }
     console.log(evenNubers)
   }
   return evenNubers;  
  }
  

getEvenNumbers(2, 5)
getEvenNumbers(3, 11)