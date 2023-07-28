import { statAction, useAppDispatch, useAppSelector } from "store";
import { useAim } from "../hooks";
import { useEffect } from "react";
import { ClassicFrame, Dot, Stat } from "components";
import { Button } from "shared/ui";
import styles from "./classic.module.scss";

export const Classic = () => {
  const settings = useAppSelector((state) => state.settings);

  const dispatch = useAppDispatch();

  const { dots, result, miss, start, time, onHit, onMiss, onStart, onReset } = useAim(
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

      <ClassicFrame onMiss={onMiss}>
        {dots.map((params, index) => (
          <Dot
            onClick={(e: React.MouseEvent) => onHit(index, e)}
            key={index}
            color={params.color}
            x={params.x}
            y={params.y}
            size={params.size}
          />
        ))}
      </ClassicFrame>

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
