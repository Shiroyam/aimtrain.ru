import { statAction, useAppDispatch, useAppSelector } from "store";
import { useAim } from "../hooks";
import { useEffect } from "react";
import { LineFrame, Dot, Stat } from "components";
import { Button } from "shared/ui";
import styles from "./line.module.scss";

export const Line = () => {
  const settings = useAppSelector((state) => state.settings);

  const dispatch = useAppDispatch();

  const { dots, miss, result, start, time, onHit, onMiss, onStart, onReset } = useAim(
    settings.activeCount,
    settings.delay,
    settings.colors,
    settings.sizeDot,
  );

  useEffect(() => {
    if (start) {
      dispatch(statAction.setStat({ hits: result, miss, time }));
    }
  }, [dispatch, miss, result, time, start]);

  return (
    <>
      <Stat hits={result} miss={miss} time={time} />

      <LineFrame onMiss={onMiss}>
        {dots.map((params, index) => (
          <Dot
            onClick={(e: React.MouseEvent) => onHit(index, e)}
            key={index}
            color={params.color}
            x={params.x}
            size={params.size}
          />
        ))}
      </LineFrame>

      {!start ? (
        <Button className={styles.button} onClick={onStart} variant="default">
          Start
        </Button>
      ) : (
        <Button className={styles.button} onClick={onReset} variant="filled">
          Reset
        </Button>
      )}
    </>
  );
};
