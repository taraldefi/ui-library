// Generated with util/create-component.js
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import StatusWidget from "./Widgets";
import { ArrowUp } from "react-feather";

export default {
  title: "Status Widget",
  component: StatusWidget,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StatusWidget>;

const Template: ComponentStory<typeof StatusWidget> = (args) => (
  <StatusWidget {...args} />
);

export const Widget = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Widget.args = {
  type: "Active",
  icon: <ArrowUp />,
  showIcon: true,
};
