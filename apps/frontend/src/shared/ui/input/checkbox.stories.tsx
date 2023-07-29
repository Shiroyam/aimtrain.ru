import { Ref, RefAttributes } from "react";
import { Input, InputProps } from "./input";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<Ref<InputProps>> = {
  title: "Input",
  component: Input,
  args: {
    placeholder: "Placeholder",
  },
};

export default meta;

const Template = (args: RefAttributes<HTMLInputElement>) => <Input {...args} />;

export const Default: StoryFn<Ref<InputProps>> = Template.bind({});
