/**
 *
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 * 
 *  [0, 1, 2, 0],         [0, 0, 0, 0],              
    [3, 4, 5, 2],         [0, 4, 5, 0],
    [1, 3, 1, 5],         [0, 3, 1, 0],
];
 */

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
const matrix1 = [
  [1, 1, 2, 1, 7, 9, 9],
  [3, 4, 0, 2, 0, 7, 5],
  [1, 3, 1, 5, 7, 0, 8],
  [3, 4, 9, 2, 6, 7, 5],
];
console.log("Brute Force Method");
console.log(setMatrix(matrix));
console.log("Better Methiod (Extra Space ->Using 2 Arrays)");
console.log(SetMatrixOptimsed(matrix));
console.log("Optimized Approach using In-Place");
console.log(InPlaceMatrix(matrix1));

// Brute Force
// Time -> O(n*m) + O((n*m)*(n+m))
// Space -> O(1)
function setMatrix(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  // Set -1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][j] = -1;
      }
    }
  }
  // setting the -1 value to 0 in that row and column
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0;

        for (let k = 0; k < n; k++) {
          if (matrix[i][k] !== -1) {
            matrix[i][k] = 0;
          }
        }
        for (let k = 0; k < n; k++) {
          if (matrix[k][j] !== -1) {
            matrix[k][j] = 0;
          }
        }
      }
    }
  }
  return matrix;
}

// Optimised Approach Using 2 Arrays that stores the 0 if we find any 0 in that row or column
// Time -> O(n*m + n*m) => O(2(n*m))
// Space -> O(n+m)
function SetMatrixOptimsed(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  const row = new Array(n).fill(0);
  const column = new Array(m).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        row[i] = -1;
        column[j] = -1;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] !== -1 || column[j] !== -1) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

// Doing it In-Place
// Time -> O(n*m)
// Space -> O(1)
function InPlaceMatrix(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  let firstRow = false;
  let firstCol = false;

  for (let i = 0; i < n; i++) {
    if (matrix[i][0] === 0) {
      firstCol = true;
    }
  }
  for (let i = 0; i < m; i++) {
    if (matrix[0][i] === 0) {
      firstRow = true;
    }
  }

  console.log(firstRow);
  console.log(firstCol);
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }
  for (let i = 1; i < n; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 1; j < m; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  for (let j = 1; j < m; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 1; i < n; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  if (firstRow) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }
  if (firstCol) {
    for (let i = 0; i < m; i++) {
      matrix[0][i] = 0;
    }
  }
  return matrix;
}
