import type { Preview } from "@storybook/react-vite";

import "../src/app/styles/index.scss";
import {
  ThemDecorator,
  RouterDecorator,
  LanguageDecorator,
} from "../src/shared/config/StoryBook";

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "App Theme",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "blue-theme", title: "Blue" },
          { value: "pink-theme", title: "Pink" },
        ],
        dynamicTitle: true,
      },
      defaultValue: "pink-theme",
    },
    locale: {
      name: "locale",
      description: "App locale",
      toolbar: {
        icon: "global",
        items: [
          { value: "en", title: "English" },
          { value: "ar", title: "Arabic" },
        ],
        dynamicTitle: true,
      },
      defaultValue: "en",
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [ThemDecorator, LanguageDecorator, RouterDecorator],
};

export default preview;
