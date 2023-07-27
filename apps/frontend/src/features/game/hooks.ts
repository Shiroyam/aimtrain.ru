import { useState } from "react";
import { getRandom } from "shared/utils";
import { SIZE } from "shared/config";

interface Dots {
  x: number;
  y: number;
  color: string;
  size: number;
}

const initDots: Dots[] = [];

export const useAim = (
  count: number,
  delay: number,
  colors: string | string[],
  size: number,
) => {
  //State for dots rendering
  const [dots, setDots] = useState(initDots);

  //The state is needed to store the number of misses
  const [miss, setMiss] = useState(0);

  //Number of dots
  const [result, setResult] = useState(0);

  //The flag that indicates whether the game is running or not.
  const [start, setStart] = useState(false);

  //In-game time
  const [time, setTime] = useState(0);

  //The state is needed to store the id interval to clear it when stopped
  const [intervalRenderId, setIntervalRenderId] = useState<undefined | number>();

  //The state is needed to store the id stopwatch to clear it when stopped
  const [intervalTimeId, setIntervalTimerId] = useState<undefined | number>();

  /**
   * The function starts the stopwatch
   * */
  const startStopwatch = () => {
    const interval = setInterval(() => setTime((prev) => prev + 1), 1000);

    setIntervalTimerId(interval);
  };

  /**
   * The function tracks clicks that do not hit the dot.
   * */
  const onMiss = () => {
    setMiss((prev) => prev + 1);
  };

  /**
   * The function tracks clicks on dot
   * */
  const onHit = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();

    setDots(dots.filter((_, index) => index !== id));

    setResult((prev) => prev + 1);

    if (result === count - 1) {
      onReset();
    }
  };

  /**
   * This function generates dot and allows you to adjust their quantity using "count"
   * and control the delay in generation using "delay"
   * */
  const generatorDots = () => {
    let i = 0;

    const interval = setInterval(() => {
      setDots((prev) => [
        ...prev,
        {
          x: getRandom(SIZE.X.MIN, SIZE.X.MAX),
          y: getRandom(SIZE.Y.MIN, SIZE.Y.MAX),
          size,
          color:
            typeof colors === "object" ? colors[getRandom(0, colors.length - 1)] : colors,
        },
      ]);

      i++;

      if (i === count) {
        clearInterval(interval);
      }
    }, delay);

    setIntervalRenderId(interval);
  };

  /**
   * Stop game
   * */
  const onReset = () => {
    setStart(false);
    setDots(initDots);

    clearInterval(intervalRenderId);
    clearInterval(intervalTimeId);
  };

  /**
   * Start game
   * */
  const onStart = () => {
    setDots(initDots);
    setStart(true);
    setMiss(0);
    setResult(0);
    setTime(0);

    startStopwatch();
    generatorDots();
  };

  return { start, dots, result, miss, time, onStart, onReset, onMiss, onHit };
};
