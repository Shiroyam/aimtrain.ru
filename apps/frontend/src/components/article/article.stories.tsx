import { Article, ArticleProps } from "./article";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<ArticleProps> = {
  title: "Article",
  component: Article,
  args: {
    title: "Article",
  },
};

export default meta;

const Template = (args: ArticleProps) => (
  <Article {...args}>
    <div>children</div>
    <div>children</div>
  </Article>
);

export const Default: StoryFn<ArticleProps> = Template.bind({});
