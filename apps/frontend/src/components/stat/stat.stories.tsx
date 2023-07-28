import { Stat, StatProps } from "./stat";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<StatProps> = {
  title: "Stat",
  component: Stat,
  args: {
    hits: 5,
    miss: 5,
    time: 10,
  },
};

export default meta;

const Template = (args: StatProps) => <Stat {...args} />;

export const Default: StoryFn<StatProps> = Template.bind({});
