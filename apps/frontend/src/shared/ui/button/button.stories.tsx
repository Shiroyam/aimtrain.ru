import { Ref, RefAttributes } from "react";
import { Button, ButtonProps } from "./button";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<Ref<ButtonProps>> = {
  title: "Button",
  component: Button,
};

export default meta;

const Template = (args: RefAttributes<HTMLButtonElement>) => (
  <Button {...args}>Button</Button>
);

export const Default: StoryFn<Ref<ButtonProps>> = Template.bind({});
