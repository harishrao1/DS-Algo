let arr = [2, 0, 1, 1, 0, 2];
let n = arr.length;

// Better Approach ->
// Time -> O(n) + O(n)
// Space -> O(1)
function sort(arr, n) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < n; i++) {
    //n
    if (arr[i] === 0) {
      count0++;
    } else if (arr[i] === 1) {
      count1++;
    } else {
      count2++;
    }
  }
  let j = 0;
  for (let i = count0; i > 0; i--) {
    arr[j] = 0;
    j++;
  }
  for (let i = count1; i > 0; i--) {
    arr[j] = 1;
    j++;
  }
  for (let i = count2; i > 0; i--) {
    arr[j] = 2;
    j++;
  }
}
sort(arr, n);
console.log(arr);

// Dutch National Flag Algoritm

/**
 *
 * Intution :
 *         using 3 pointers, by using 3 pointer to move around the values
 * Goal is to move 0s to the left
 *                 2s to the right of the array and 1s will be in the middle
 * and hence array is sorted.
 *
 *
 * Approach:
 * 3 pointers -> low and mid point to 0th index and high pointer will point to last index(n-1)
 * arr[0.. low-1] -> contains 0(left)
 * arr[low, mid-1] -> contains 1
 * arr[high ...n-1] -> right part
 *
 *
 * if(arr[mid] === 0) then swap(arr[low] and arr[mid])
 * if(arr[mid] === 1) then increment mid++
 * if(arr[mid] === 2) then swap(arr[high] and arr[mid])
 * */

function DNF() {
  let arr = [2, 0, 1, 1, 0, 2];
  let n = arr.length;
  let low = 0;
  let mid = 0;
  let high = n - 1;
  let temp;
  while (mid <= high) {
    switch (arr[mid]) {
      case 0: {
        // swapping mid and low
        temp = arr[low];
        arr[low] = arr[mid];
        arr[mid] = temp;
        mid++;
        low++;
        break;
      }
      case 1: {
        mid++;
        break;
      }
      case 2: {
        // swaping high and mid
        temp = arr[mid];
        arr[mid] = arr[high];
        arr[high] = temp;
        high--;
        break;
      }
    }
  }
  console.log(arr);
}
console.log("Using Dutch National Flag Algo");
DNF(arr, n);
