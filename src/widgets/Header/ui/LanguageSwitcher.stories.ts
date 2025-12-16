import type { Meta, StoryObj } from "@storybook/react-vite";

import { LangageSwitcher } from "./LangageSwitcher";

const meta = {
  title: "widget/LangageSwitcher",
  component: LangageSwitcher,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LangageSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
