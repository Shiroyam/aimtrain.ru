import { Ref } from "react";
import { Button } from "../button";
import { Tab, TabProps, Tabs } from "./tabs";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<Ref<TabProps>> = {
  title: "Tabs",
  component: Tabs,
};

export default meta;

const Template = (args: TabProps) => (
  <Tabs {...args}>
    <Tab>
      <Button variant="subtle">1</Button>
    </Tab>
    <Tab>
      <Button variant="subtle">2</Button>
    </Tab>
    <Tab>
      <Button variant="subtle">3</Button>
    </Tab>
  </Tabs>
);

export const Default: StoryFn<TabProps> = Template.bind({});
