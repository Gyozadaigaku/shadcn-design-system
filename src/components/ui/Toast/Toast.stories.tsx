import { Button } from "@/src/components/ui/Button"
import { useToast } from "@/src/components/ui/Toast/use-toast"
import { cn } from "@/src/lib/utils"
import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"

import { Toast, ToastAction } from "./Toast"

const meta = {
  title: "Data Display/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const _Toast: Story = {
  render: () => {
    const handleClick = action("clicked")
    const { toast } = useToast()

    return (
      <dl className="m-0 space-y-6 p-4">
        <div>
          <dt className="m-0">Toast</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="flex flex-row items-start space-x-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    toast({
                      title: "Scheduled: Catch up ",
                      description: "Friday, February 10, 2023 at 5:57 PM",
                      action: (
                        <ToastAction altText="Goto schedule to undo">
                          Undo
                        </ToastAction>
                      ),
                    })
                  }}
                  onClickCapture={handleClick}
                >
                  Add to calendar
                </Button>
              </div>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">Simple</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="flex flex-row items-start space-x-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    toast({
                      description: "Your message has been sent.",
                    })
                  }}
                >
                  Show Toast
                </Button>
              </div>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">With title</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="flex flex-row items-start space-x-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    toast({
                      title: "Uh oh! Something went wrong.",
                      description: "There was a problem with your request.",
                    })
                  }}
                >
                  Show Toast
                </Button>
              </div>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">With Action</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="flex flex-row items-start space-x-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    toast({
                      title: "Uh oh! Something went wrong.",
                      description: "There was a problem with your request.",
                      action: (
                        <ToastAction altText="Try again">Try again</ToastAction>
                      ),
                    })
                  }}
                >
                  Show Toast
                </Button>
              </div>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">Destructive</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="flex flex-row items-start space-x-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    toast({
                      variant: "destructive",
                      title: "Uh oh! Something went wrong.",
                      description: "There was a problem with your request.",
                      action: (
                        <ToastAction altText="Try again">Try again</ToastAction>
                      ),
                    })
                  }}
                >
                  Show Toast
                </Button>
              </div>
            </div>
          </dd>
        </div>
      </dl>
    )
  },
}
