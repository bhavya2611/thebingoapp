import w1 from "../assets/gifs/w1.gif";
import w2 from "../assets/gifs/w2.gif";
import w3 from "../assets/gifs/w3.gif";
import w4 from "../assets/gifs/w4.gif";
import w5 from "../assets/gifs/w5.gif";
import w6 from "../assets/gifs/w6.gif";
import w7 from "../assets/gifs/w7.gif";
import w8 from "../assets/gifs/w8.gif";
import w9 from "../assets/gifs/w9.gif";
import w10 from "../assets/gifs/w10.gif";

import l1 from "../assets/gifs/l1.gif";
import l2 from "../assets/gifs/l2.gif";
import l3 from "../assets/gifs/l3.gif";
import l4 from "../assets/gifs/l4.gif";
import l5 from "../assets/gifs/l5.gif";
import l6 from "../assets/gifs/l6.gif";
import l7 from "../assets/gifs/l7.gif";
import l8 from "../assets/gifs/l8.gif";
import l9 from "../assets/gifs/l9.gif";
import l10 from "../assets/gifs/l10.gif";

import a1 from "../assets/gifs/a1.gif";
import a2 from "../assets/gifs/a2.gif";
import a3 from "../assets/gifs/a3.gif";
import a4 from "../assets/gifs/a4.gif";
import a5 from "../assets/gifs/a5.gif";
import a6 from "../assets/gifs/a6.gif";
import a7 from "../assets/gifs/a7.gif";
import a8 from "../assets/gifs/a8.gif";
import a9 from "../assets/gifs/a9.gif";
import a10 from "../assets/gifs/a10.gif";

import { data } from "../assets/captionData";

const bingoArray = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [5, 10, 15, 20, 25],
  [1, 7, 13, 19, 25],
  [5, 9, 13, 17, 21],
];

const winArr = [false, false, false, false, false, false, false, false, false];

export const checkPlayerWon = (currentGameObj) => {
  let winArrIndex = [];
  for (let i = 0; i < bingoArray.length; i++) {
    if (
      bingoArray[i].every((j) => {
        return currentGameObj[j].flag === true;
      })
    ) {
      if (!winArr[i]) {
        winArr[i] = true;
        const allWin = winArr.map((item, index) => {
          if (item) {
            return bingoArray[index];
          }
        });
        allWin.forEach((item) => {
          if (item) {
            winArrIndex = [...winArrIndex, ...allWin];
          }
        });
      }
    } else {
      winArr[i] = false;
    }
  }
  return winArrIndex.flat();
};

export const gifArrW = [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10];
export const gifArrL = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10];
export const gifArrA = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];

export const getData = () => {
  let shuffledData = data
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a, index) => {
      return {
        flag: false,
        caption: a.value,
        key: index + 1,
      };
    });

  shuffledData = shuffledData.slice(0, 25);

  shuffledData = shuffledData.reduce(function (map, obj) {
    map[obj.key] = obj;
    return map;
  }, {});

  shuffledData[13] = {
    flag: true,
    caption: "FIND THEM",
    key: 13,
  };

  return shuffledData;
};
