function calculateEngravingPrice(message, pricePerWord) {
   

   const fillWord = message.split(" ");
    const lengtArray = fillWord.length;
    const costWord = lengtArray * pricePerWord;

      return (costWord);
}

calculateEngravingPrice("JavaScript is in my blood", 10)