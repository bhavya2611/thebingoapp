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
  var winArrIndex = [];
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
          } else {
            return null;
          }
        });
        // eslint-disable-next-line
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
