import type { Preview } from "@storybook/react"

import { ThemeProvider } from "../src/components/theme-provider"
import { Toaster } from "../src/components/ui/Toast"
import "../src/styles/globals.css"
import React from "react"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Toaster />
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
