import { Button } from "@/src/components/ui/Button"
import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip"

const meta = {
  title: "Data Display/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    onOpenChange: { action: "clicked" },
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const _Tooltip: Story = {
  render: () => {
    const handleClick = action("clicked")

    return (
      <dl className="m-0 space-y-6 p-4">
        <div>
          <dt className="m-0">Default</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <TooltipProvider>
                <Tooltip onOpenChange={handleClick}>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to library</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </dd>
        </div>
      </dl>
    )
  },
}
