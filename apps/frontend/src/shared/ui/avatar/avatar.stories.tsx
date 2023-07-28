import { Avatar, AvatarProps } from "./avatar";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<AvatarProps> = {
  title: "Avatar",
  component: Avatar,
};

export default meta;

const Template = (args: AvatarProps) => <Avatar {...args} />;

export const Default: StoryFn<AvatarProps> = Template.bind({});
