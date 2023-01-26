import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";
import "../../index.css";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    theme: {
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div className="w-48">
    <Button {...args}>{args.children}</Button>
  </div>
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  theme: "primary",
  children: "Download",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  theme: "secondary",
  children: "Download",
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  theme: "outline",
  children: "Download",
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  theme: "danger",
  children: "Download",
};

export const Disabled = Template.bind({});
Disabled.args = {
  theme: "secondary",
  children: "Download",
  disabled: true,
};
