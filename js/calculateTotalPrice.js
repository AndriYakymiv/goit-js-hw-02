function calculateTotalPrice(order) {
  let total = 0;

  for (const num of order) {
    total += num;
  }

  return total;
}


calculateTotalPrice([12, 85, 37, 4])