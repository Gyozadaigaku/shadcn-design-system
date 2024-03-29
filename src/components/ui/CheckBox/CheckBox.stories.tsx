import { ChevronRightIcon, EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"

import { CheckBox } from "./CheckBox"

const meta = {
  title: "Forms/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const _CheckBox: Story = {
  render: () => {
    const handleClick = action("clicked")

    return (
      <dl className="m-0 space-y-6 p-4">
        <div>
          <dt className="m-0">With label</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="flex flex-row items-start space-x-2">
                <CheckBox id="withLabel" onClick={handleClick} />
                <label
                  htmlFor="withLabel"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  CheckBox
                </label>
              </div>
              <div className="flex flex-row items-start space-x-2">
                <CheckBox
                  id="withLabelError"
                  className="border-destructive"
                  onClick={handleClick}
                />
                <label
                  htmlFor="withLabelError"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  CheckBox / error
                </label>
              </div>
              <div className="flex flex-row items-start space-x-2">
                <CheckBox
                  disabled
                  id="withLabelDisabled"
                  onClick={handleClick}
                />
                <label
                  htmlFor="withLabelDisabled"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  CheckBox / disabled
                </label>
              </div>
              <div className="flex flex-row items-start space-x-2">
                <CheckBox
                  checked
                  disabled
                  id="withLabelDisabledChecked"
                  onClick={handleClick}
                />
                <label
                  htmlFor="withLabelDisabledChecked"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  CheckBox / disabled / checked
                </label>
              </div>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">Without label</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="flex flex-row items-start space-x-2">
                <CheckBox id="withoutLabel" onClick={handleClick} />
              </div>
              <div className="flex flex-row items-start space-x-2">
                <CheckBox
                  id="withoutLabelError"
                  className="border-destructive"
                  onClick={handleClick}
                />
              </div>
              <div className="flex flex-row items-start space-x-2">
                <CheckBox
                  disabled
                  id="withoutLabelDisabled"
                  onClick={handleClick}
                />
              </div>
              <div className="flex flex-row items-start space-x-2">
                <CheckBox
                  checked
                  disabled
                  id="withoutLabelDisabledChecked"
                  onClick={handleClick}
                />
              </div>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">With multiline text</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="flex flex-row items-start space-x-2">
                <CheckBox id="terms" onClick={handleClick} />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </label>
              </div>
            </div>
          </dd>
        </div>
      </dl>
    )
  },
}
