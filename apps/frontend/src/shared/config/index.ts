/*
 * Min and max dot size
 */
export const minSizeDot = 1;
export const maxSizeDot = 32;

/*
 * Delay for render dot.
 */
export const DELAY = 500;

/*
 * Color for background dot.
 */
export const COLORS = [
  "#ECDB54",
  "#6F9FD8",
  "#944743",
  "#00A591",
  "#6B5B95",
  "#BFD641",
  "#BC70A4",
];

/*
 * Count of dot render.
 */
export const COUNT = [10, 25, 50, 100];

/*
 * Size frame render.
 */
export const SIZE = {
  X: {
    MIN: 32,
    MAX: 880,
  },
  Y: {
    MIN: 32,
    MAX: 550,
  },
};

/*
 * Mode for game.
 */
export interface Mode {
  id: number;
  name: string;
}

export const MODES: Mode[] = [
  {
    id: 0,
    name: "classic",
  },
  {
    id: 1,
    name: "line",
  },
];
