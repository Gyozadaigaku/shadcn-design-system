import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/Accordion"
import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Data Display/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const _Accordion: Story = {
  args: {
    type: "single",
    collapsible: true,
  },
  render: () => {
    const handleClick = action("clicked")

    return (
      <dl className="m-0 space-y-6 p-4">
        <div>
          <dt className="m-0">Accordion</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                onClick={handleClick}
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it
                    if you prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </dd>
        </div>
      </dl>
    )
  },
}
