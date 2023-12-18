function bs(arr, target, left = 0, right = arr.length) {
  let itemsCount = right - (left ? left : left + 1);
  let mid = left + Math.floor(itemsCount / 2);
  console.log("workds");
  if (itemsCount == 1) {
    return arr[mid] == target ? mid : -1;
  }
  if (itemsCount) {
    if (target == arr[mid]) return mid;
    else if (arr[mid] > target) return bs(arr, target, left, mid);
    else if (arr[mid] < target) return bs(arr, target, mid, right);
  }
}