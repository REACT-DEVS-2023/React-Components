import "../../index.css";
import Button from "./Button";
import { btn } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    theme: {
      control: { type: "select" },
    },
  },
};

export const template = (args: btn) => (
  <Button {...args}>{args.children}</Button>
);

template.args = {
  children: "Download",
  theme: "primary",
};
