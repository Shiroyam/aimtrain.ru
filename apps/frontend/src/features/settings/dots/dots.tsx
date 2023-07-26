import { Accordion, Input, Select } from "shared/ui";
import { Article } from "components";
import { settingsActions, useAppDispatch, useAppSelector } from "store";
import { maxSizeDot, minSizeDot } from "shared/config";

export const Dots = () => {
  const settings = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const handleChangeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(minSizeDot, Math.min(maxSizeDot, Number(e.target.value)));

    dispatch(settingsActions.onChangeSizeDot(value));
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(settingsActions.onChangeColor(e.target.value));
  };

  return (
    <Accordion state={true} title="dots">
      <Article title="size">
        <span>Change the dot size</span>
        <Input
          max={maxSizeDot}
          min={minSizeDot}
          type="number"
          onChange={handleChangeSize}
          value={settings.sizeDot}
        />
      </Article>

      <Article title="color">
        <span>Change the dot color</span>
        <Select onChange={handleChangeSelect}>
          <option value={settings.colors}>all 🔵🔴🟣🟡</option>
          <option value="#ECDB54">yellow 🟡</option>
          <option value="#6B5B95">purple 🟣</option>
          <option value="#6F9FD8">blue 🔵</option>
          <option value="#944743">red 🔴</option>
        </Select>
      </Article>
    </Accordion>
  );
};
