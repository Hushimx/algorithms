// ZigZag
var convert = function (s, numRows) {
  let arrays = Array.from({ length: numRows }, () => []);
  let pointer = 0;
  let level = 0;
  while (pointer != s.length) {
    if (numRows == 1) {
      for (let i of s) {
        arrays[level].push(i);
      }
      return [].concat(...arrays).join("");
    }
    if (level == 0) {
      for (let i = 0; i < numRows; i++) {
        if (s[pointer] == undefined) break;
        arrays[level].push(s[pointer]);

        level++;
        pointer++;
      }
      level = numRows - 2;
    } else {
      arrays[level].push(s[pointer]);
      pointer++;
      level--;
    }
  }
  return [].concat(...arrays).join("");
};

// Tweaked BS
