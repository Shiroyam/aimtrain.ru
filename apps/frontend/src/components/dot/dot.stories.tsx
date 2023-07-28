import { COLORS } from "shared/config";
import { Dot, DotProps } from "./dot";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<DotProps> = {
  title: "Dot",
  component: Dot,
  args: {
    color: COLORS[0],
    size: 16,
  },
};

export default meta;

const Template = (args: DotProps) => <Dot {...args} />;

export const Default: StoryFn<DotProps> = Template.bind({});
