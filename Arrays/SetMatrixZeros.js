let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
function setZeros(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][j] = -1;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == -1) {
        matrix[i][j] = 0;

        for (let k = 0; k < m; k++) {
          if (matrix[i][k] != -1) {
            matrix[i][k] = 0;
          }
          for (let k = 0; k < n; k++) {
            if (matrix[k][j] != -1) {
              matrix[k][j] = 0;
            }
          }
        }
      }
    }
  }
  return matrix;
}
console.log(setZeros(matrix));
