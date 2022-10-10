function flippingMatrix(matrix) {
    // Write your code here
    let n = matrix.length / 2;
    let max;
    let total = 0;
    for (let x = 0; x < n; x++) {
      for (let y = 0; y < n; y++) {
        max = Math.max(
          matrix[x][y],
          matrix[x][matrix.length - 1 - y],
          matrix[matrix.length - 1 - x][y],
          matrix[matrix.length - 1 - x][matrix.length - 1 - y]
        );
  
        total += max;
      }
    }
    return total;
  }