import { useAppSelector } from "store";
import { Classic } from "./classic";
import { Line } from "./line";

export const Game = () => {
  const mode = useAppSelector((state) => state.settings.activeMode);

  switch (mode) {
    case 0:
      return <Classic />;

    case 1:
      return <Line />;

    default:
      return <Classic />;
  }
};
