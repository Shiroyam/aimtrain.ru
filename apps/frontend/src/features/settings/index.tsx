import { Button } from "shared/ui";
import { Appearance } from "./appearance";
import { Behavior } from "./behavior";
import { Dots } from "./dots";

export const Settings = () => {
  const onClick = () => {
    // eslint-disable-next-line
    //@ts-ignore
    window.ym(98707984, "reachGoal", "testclick");
  };

  return (
    <>
      <Dots />
      <Behavior />
      <Appearance />
      <Button onClick={onClick} variant="subtle">
        Тест12
      </Button>
    </>
  );
};
