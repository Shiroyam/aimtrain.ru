import { ClassicFrame, ClassicFrameProps } from "./classic";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<ClassicFrameProps> = {
  title: "ClassicFrame",
  component: ClassicFrame,
};

export default meta;

const Template = (args: ClassicFrameProps) => <ClassicFrame {...args} />;

export const Default: StoryFn<ClassicFrameProps> = Template.bind({});
