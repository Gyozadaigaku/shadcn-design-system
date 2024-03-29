import { ChevronRightIcon, EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "./Button"

const meta = {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const _Button: Story = {
  render: () => {
    const handleClick = action("clicked")

    return (
      <dl className="m-0 p-4">
        <dt className="mx-0 mb-4 mt-0">Default</dt>
        <dd className="mx-0 mb-4 mt-0">
          <div className="flex flex-col justify-start space-y-4 [&_>_*]:my-0">
            <div className="flex flex-wrap gap-2 [&:empty]:gap-0">
              <Button variant="default" onClick={handleClick}>
                Button
              </Button>
              <Button variant="default" onClick={handleClick}>
                <EnvelopeOpenIcon className="mr-2 size-4" />
                Login with Email
              </Button>
              <Button variant="default" onClick={handleClick}>
                Login with Email
                <EnvelopeOpenIcon className="ml-2 size-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={handleClick}>
                <ChevronRightIcon className="size-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 [&:empty]:gap-0">
              <Button disabled variant="default" onClick={handleClick}>
                Button
              </Button>
              <Button disabled variant="default" onClick={handleClick}>
                <EnvelopeOpenIcon className="mr-2 size-4" />
                Login with Email
              </Button>
              <Button disabled variant="default" onClick={handleClick}>
                Login with Email
                <EnvelopeOpenIcon className="ml-2 size-4" />
              </Button>
              <Button
                disabled
                variant="outline"
                size="icon"
                onClick={handleClick}
              >
                <ChevronRightIcon className="size-4" />
              </Button>
            </div>
          </div>
        </dd>

        <dt className="mx-0 mb-4 mt-0">Variants</dt>
        <dd className="mx-0 mb-4 mt-0">
          <div className="flex flex-col justify-start space-y-4 [&_>_*]:my-0">
            <div className="flex flex-wrap gap-2 [&:empty]:gap-0">
              <Button variant="default" onClick={handleClick}>
                Button
              </Button>
              <Button variant="default" disabled onClick={handleClick}>
                Button
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 [&:empty]:gap-0">
              <Button variant="outline" onClick={handleClick}>
                Button
              </Button>
              <Button variant="outline" disabled onClick={handleClick}>
                Button
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 [&:empty]:gap-0">
              <Button variant="secondary" onClick={handleClick}>
                Button
              </Button>
              <Button variant="secondary" disabled onClick={handleClick}>
                Button
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 [&:empty]:gap-0">
              <Button variant="ghost" onClick={handleClick}>
                Button
              </Button>
              <Button variant="ghost" disabled onClick={handleClick}>
                Button
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 [&:empty]:gap-0">
              <Button variant="link" onClick={handleClick}>
                Button
              </Button>
              <Button variant="link" disabled onClick={handleClick}>
                Button
              </Button>
            </div>
          </div>
        </dd>

        <dt className="mx-0 mb-4 mt-0">Small</dt>
        <dd className="mx-0 mb-4 mt-0">
          <div className="flex flex-col justify-start space-y-4 [&_>_*]:my-0">
            <div className="flex flex-wrap gap-2 [&:empty]:gap-0">
              <Button variant="default" size="sm" onClick={handleClick}>
                Button
              </Button>
              <Button variant="default" size="sm" onClick={handleClick}>
                <EnvelopeOpenIcon className="mr-2 size-4" />
                Login with Email
              </Button>
              <Button variant="default" size="sm" onClick={handleClick}>
                Login with Email
                <EnvelopeOpenIcon className="ml-2 size-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 [&:empty]:gap-0">
              <Button
                disabled
                variant="default"
                size="sm"
                onClick={handleClick}
              >
                Button
              </Button>
              <Button
                disabled
                variant="default"
                size="sm"
                onClick={handleClick}
              >
                <EnvelopeOpenIcon className="mr-2 size-4" />
                Login with Email
              </Button>
              <Button
                disabled
                variant="default"
                size="sm"
                onClick={handleClick}
              >
                Login with Email
                <EnvelopeOpenIcon className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </dd>

        <dt className="mx-0 mb-4 mt-0">Large</dt>
        <dd className="mx-0 mb-4 mt-0">
          <div className="flex flex-col justify-start space-y-4 [&_>_*]:my-0">
            <div className="flex flex-wrap gap-2 [&:empty]:gap-0">
              <Button variant="default" size="lg" onClick={handleClick}>
                Button
              </Button>
              <Button variant="default" size="lg" onClick={handleClick}>
                <EnvelopeOpenIcon className="mr-2 size-4" />
                Login with Email
              </Button>
              <Button variant="default" size="lg" onClick={handleClick}>
                Login with Email
                <EnvelopeOpenIcon className="ml-2 size-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 [&:empty]:gap-0">
              <Button
                disabled
                variant="default"
                size="lg"
                onClick={handleClick}
              >
                Button
              </Button>
              <Button
                disabled
                variant="default"
                size="lg"
                onClick={handleClick}
              >
                <EnvelopeOpenIcon className="mr-2 size-4" />
                Login with Email
              </Button>
              <Button
                disabled
                variant="default"
                size="lg"
                onClick={handleClick}
              >
                Login with Email
                <EnvelopeOpenIcon className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </dd>
      </dl>
    )
  },
}
