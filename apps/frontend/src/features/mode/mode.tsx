import { Button, Tab, Tabs } from "shared/ui";
import { settingsActions, useAppDispatch, useAppSelector } from "store";
import styles from "./mode.module.scss";
import ym from "react-yandex-metrika";

export const Mode = () => {
  const settings = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const handleChangeMode = (id: number) => {
    dispatch(settingsActions.onChangeMode(id));
    ym("reachGoal", "click-line");
    ym("reachGoal", "click-classic");
  };

  const handleChangeCount = (count: number) => {
    dispatch(settingsActions.onChangeCount(count));
  };

  return (
    <div className={styles.menu}>
      <Tabs className={styles.tabs} spacing={20} active={settings.activeMode}>
        {settings.modes.map(({ id, name }) => (
          <Tab key={id}>
            <Button onClick={() => handleChangeMode(id)} variant="subtle">
              {name}
            </Button>
          </Tab>
        ))}
      </Tabs>
      <div className={styles.wall} />
      <Tabs className={styles.tabs} spacing={20} active={settings.activeCountIndex}>
        {settings.count.map((value) => (
          <Tab className={styles.tab} key={value}>
            <Button onClick={() => handleChangeCount(value)} variant="subtle">
              {value}
            </Button>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};
