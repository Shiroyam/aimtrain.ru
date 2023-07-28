import { Accordion, Input, Select } from "shared/ui";
import { Article } from "components";
import { settingsActions, useAppDispatch, useAppSelector } from "store";
import { COLORS, maxSizeDot, minSizeDot } from "shared/config";

const colors = [
  {
    id: 0,
    name: "all 🔵🔴🟣🟡",
    value: COLORS,
  },
  {
    id: 1,
    name: "yellow 🟡",
    value: "#ECDB54",
  },
  {
    id: 2,
    name: "purple 🟣",
    value: "6B5B95",
  },
  {
    id: 3,
    name: "blue 🔵",
    value: "#6F9FD8",
  },
  {
    id: 4,
    name: "red 🔴",
    value: "#944743",
  },
];

export const Dots = () => {
  const settings = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const handleChangeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(minSizeDot, Math.min(maxSizeDot, Number(e.target.value)));

    dispatch(settingsActions.onChangeSizeDot(value));
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value: string | string[] = JSON.parse(e.target.value);
    dispatch(settingsActions.onChangeColor(value));
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
        <Select value={JSON.stringify(settings.colors)} onChange={handleChangeSelect}>
          {colors.map(({ id, name, value }) => (
            <option key={id} value={JSON.stringify(value)}>
              {name}
            </option>
          ))}
        </Select>
      </Article>
    </Accordion>
  );
};
