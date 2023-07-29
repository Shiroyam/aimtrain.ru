import { Ref, RefAttributes } from "react";
import { Select, SelectProps } from "./select";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<Ref<SelectProps>> = {
  title: "Select",
  component: Select,
};

export default meta;

const Template = (args: RefAttributes<HTMLSelectElement>) => (
  <Select {...args}>
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </Select>
);

export const Default: StoryFn<Ref<SelectProps>> = Template.bind({});
