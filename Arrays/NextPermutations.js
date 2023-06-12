/**
 *
 * A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
 */

// Input -> arr = [1,2,3]
//  -> arr : [1,2,3],[1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

/*

class Solution {
    public void setZeroes(int[][] matrix) {
        
        boolean firstCol = false;
        boolean firstRow = false;
        
        for(int i=0; i<matrix.length; i++){
            if(matrix[i][0] == 0){
                firstCol = true;
                break;
            }
        }
        
        for(int i=0; i<matrix[0].length; i++){
            if(matrix[0][i] == 0){
                firstRow = true;
                break;
            }
        }
        
        for(int i=1; i<matrix.length; i++){
            for(int j=1; j<matrix[i].length; j++){
                if(matrix[i][j] == 0){
                    matrix[0][j] = 0;
                    matrix[i][0] = 0;
                }
            }
        }
        
        for(int i=1; i<matrix.length; i++){
            for(int j=1; j<matrix[i].length; j++){
                if(matrix[i][0] == 0 || matrix[0][j] == 0){
                    matrix[i][j] = 0;
                }
            }
        }
        
        if(firstCol){
            for(int i=0; i<matrix.length; i++){
                matrix[i][0] = 0;
            }
        }
        
        if(firstRow){
            for(int j=0; j<matrix[0].length; j++){
                matrix[0][j] = 0;
            }
        }
        
    }
}

*/
const arr = [1, 5, 8, 4, 7, 6, 5, 3, 1];
const arr1 = [1, 2, 3, 4];
let pivotIndex = -1;
const n = arr.length;
nextPermutations(arr1);
console.log(arr1);

function nextPermutations(arr, n) {
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      pivotIndex = i;
      //   console.log(i);
      break;
    }
  }
  //

  if (pivotIndex === -1) {
    arr.reverse();
    return;
  }

  for (let i = n - 1; i > pivotIndex; i--) {
    if (arr[i] > arr[pivotIndex]) {
      // swap
      let temp = arr[i];
      arr[i] = arr[pivotIndex];
      arr[pivotIndex] = temp;
      break;
    }
  }
  arr.splice(
    pivotIndex + 1,
    n - pivotIndex - 1,
    ...arr.slice(pivotIndex + 1).reverse()
  );
}
