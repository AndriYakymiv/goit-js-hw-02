function calculateTotalPrice(order) {
  let total = 0;

  for (const ord of order ) {
    total += ord;
  }

  return total;
}