import { Ref, RefAttributes } from "react";
import { Checkbox, CheckboxProps } from "./checkbox";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<Ref<CheckboxProps>> = {
  title: "Checkbox",
  component: Checkbox,
};

export default meta;

const Template = (args: RefAttributes<HTMLInputElement>) => <Checkbox {...args} />;

export const Default: StoryFn<Ref<CheckboxProps>> = Template.bind({});
