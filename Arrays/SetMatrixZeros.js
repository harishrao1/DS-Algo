/**
 *
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 */

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

// Brute Force
function setZeros(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  /*
        Traverse and if we find zero then make it -1
  */
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][j] = -1;
      }
    }
  }

  // making row and columns to Zero
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == -1) {
        matrix[i][j] = 0;

        //ROw
        for (let k = 0; k < m; k++) {
          if (matrix[i][k] != -1) {
            matrix[i][k] = 0;
          }
          // Column
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
