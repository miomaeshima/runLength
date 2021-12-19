"use strict";

function runLength(string) {
  const memo = [];
  let result = "";

  for (const ch of string) {
    let lastPair = memo[memo.length - 1];

    //Cannot use null. Need to use "undefined" as lastPair is just not yet defined

    if (lastPair === undefined) {
      let pair = {};
      pair[ch] = 1;
      memo.push(pair);
    } else {
      let lastCh = Object.keys(lastPair)[0];
      if (lastCh !== ch) {
        let pair = {};
        pair[ch] = 1;
        memo.push(pair);
      } else {
        lastPair[lastCh]++;
      }
    }
  }
  for (const pair of memo) {
    let character = Object.keys(pair)[0];
    let number = pair[character];
    //To avoid adding unnecessary 1 for a single character (to avoid e.g "a1" or "b1")
    if (number === 1) {
      result = result + character;
    } else {
      result = result + character + number;
    }
  }
  return result;
}

console.log("ssstsss".length, runLength("ssstsss").length);

const ipsumLorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
//space含めて574文字

console.log(ipsumLorem.length, runLength(ipsumLorem).length);

console.log(
  runLength(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  )
);

//ipsumLoremの場合は同じ長さ。同じ文字が3回続いて初めて圧縮できるがそんなことはほとんどないから。
