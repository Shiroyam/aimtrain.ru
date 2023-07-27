import { Accordion, AccordionProps } from "./accordion";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<AccordionProps> = {
  title: "Accordion",
  component: Accordion,
  args: {
    state: true,
    title: "accordion",
  },
};

export default meta;

const Template = (args: AccordionProps) => (
  <Accordion {...args}>
    <div>children</div>
  </Accordion>
);

export const Default: StoryFn<AccordionProps> = Template.bind({});
