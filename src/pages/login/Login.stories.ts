import type { Meta, StoryObj } from "@storybook/react-vite";
import Login from "./LoginPage";
const meta = {
  title: "Pages/Login",
  parameters: {
    layout: "centered",
  },
  component: Login,
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
