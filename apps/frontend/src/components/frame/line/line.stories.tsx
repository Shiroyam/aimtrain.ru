import { LineFrame, LineFrameProps } from "./line";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<LineFrameProps> = {
  title: "LineFrame",
  component: LineFrame,
};

export default meta;

const Template = (args: LineFrameProps) => <LineFrame {...args} />;

export const Default: StoryFn<LineFrameProps> = Template.bind({});
