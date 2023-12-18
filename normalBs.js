function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor(right + left / 2);

  while (right > left) {
    console.log(mid, left, right);
    if (target == arr[mid]) return mid;
    if (arr[mid] < target) left = mid + 1;
    if (arr[mid] > target) right = mid - 1;
    mid = Math.floor(right + left / 2);
  }
  return -1;
}

// 1 2 3 4 5 6 7 8 9 10

console.log(
  binarySearch(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    5
  )
);
