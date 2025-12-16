import type { Meta, StoryObj } from "@storybook/react-vite";

import searchIcon from "@/shared/assets/icons/Search.svg?react";

import { AppIcon } from "./AppIcon";

const meta = {
  title: "shared/AppIcon",
  component: AppIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    Icon: searchIcon,
  },
} satisfies Meta<typeof AppIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clean: Story = {
  args: {
    them: "clean",
  },
};
export const Background: Story = {
  args: {
    them: "background",
  },
};
export const Filled: Story = {
  args: {
    filled: true,
  },
};
