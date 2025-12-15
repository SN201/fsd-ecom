import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";
import { AppIcon } from "../../Icons/ui/AppIcon";
import searchIcon from "@/shared/assets/icons/Search.svg?react"
const meta = {
  title: "shared/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
   value:"",placeholder:"Enter text here ..."
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "default",
  },
};
export const WithValue: Story = {
  args: {
    value: "some value",
  },
};
export const WithIcon: Story = {
  args: {
    Icon: <AppIcon size={20} Icon={searchIcon}/>,
  },
};


export const Password: Story = {
  args: {
      type: "password",
      value:"123"
  },
};
export const Text: Story = {
  args: {
      type: "text",
      value:"ABCD"
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
