// Generated with util/create-component.js
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { StatusWidget, ProgressBar, MetricRange } from "./Widgets";
import { ArrowUp } from "react-feather";

export default {
  title: "Widgets",
};

const Template: ComponentStory<typeof StatusWidget> = (args) => (
  <StatusWidget {...args} />
);

const ProgressBarWidgetTemplate: ComponentStory<typeof ProgressBar> = (
  args
) => <ProgressBar {...args} />;

const MetricRangeWidgetTemplate: ComponentStory<typeof MetricRange> = (
  args
) => <MetricRange {...args} />;

export const statusWidget = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
statusWidget.args = {
  type: "Active",
  icon: <ArrowUp />,
  showIcon: true,
};

export const progressBarWidget = ProgressBarWidgetTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
progressBarWidget.args = {
  progress: 40,
  color: "#04C1DE",
  showText: false,
};

export const metricWidget = MetricRangeWidgetTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
metricWidget.args = {
  value: 30,
};
