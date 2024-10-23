import { Button } from "shared/ui";
import { Appearance } from "./appearance";
import { Behavior } from "./behavior";
import { Dots } from "./dots";
import ym from "react-yandex-metrika";

export const Settings = () => {
  return (
    <>
      <Dots />
      <Behavior />
      <Appearance />
      <Button onClick={() => ym("reachGoal", "testclick")} variant="subtle">
        Тест1
      </Button>
    </>
  );
};
