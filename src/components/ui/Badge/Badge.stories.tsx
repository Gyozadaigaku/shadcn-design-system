import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"

import { Badge } from "./Badge"

const meta = {
  title: "Data Display/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const _Badge: Story = {
  render: () => {
    const handleClick = action("clicked")

    return (
      <dl className="m-0 space-y-6 p-4">
        <div>
          <dt className="m-0">Default</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="flex flex-row items-start space-x-2">
                <Badge>Badge</Badge>
              </div>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">Variants</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-col justify-start space-y-4 [&_>_*]:my-0">
              <div className="flex flex-wrap gap-2 [&:empty]:gap-0">
                <Badge variant="default" onClick={handleClick}>
                  Default
                </Badge>
                <Badge variant="secondary" onClick={handleClick}>
                  Secondary
                </Badge>
                <Badge variant="outline" onClick={handleClick}>
                  Outline
                </Badge>
                <Badge variant="destructive" onClick={handleClick}>
                  Destructive
                </Badge>
              </div>
            </div>
          </dd>
        </div>
      </dl>
    )
  },
}
