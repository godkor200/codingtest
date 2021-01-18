function solution(array, commands) {
  let result = [];
  for (let i = 0; i < commands.length; i++) {
    result.push(
      array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[
        commands[i][2] - 1
      ]
    );
  }
  return result;
}
let s = solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
console.log("🚀 ~ file: k번째수.js ~ line 12 ~ s", s);
