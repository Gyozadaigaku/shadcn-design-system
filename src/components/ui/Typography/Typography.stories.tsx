import type { StoryObj } from "@storybook/react"

const meta = {
  title: "Forms/Typography",
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const _Typography: Story = {
  render: () => {
    return (
      <dl className="m-0 space-y-6 p-4">
        <div>
          <dt className="m-0">h1</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Taxing Laughter: The Joke Tax Chronicles
              </h1>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">h2</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                The People of the Kingdom
              </h2>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">h3</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                The Joke Tax
              </h3>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">h4</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                People stopped telling jokes
              </h4>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">p</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                The king, seeing how much happier his subjects were, realized
                the error of his ways and repealed the joke tax.
              </p>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">blockquote</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <blockquote className="mt-6 border-l-2 pl-6 italic">
                "After all," he said, "everyone enjoys a good joke, so it's only
                fair that they should pay for the privilege."
              </blockquote>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">table</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="my-6 w-full overflow-y-auto">
                <table className="w-full">
                  <thead>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                      <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                        King's Treasury
                      </th>
                      <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                        People's happiness
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Empty
                      </td>
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Overflowing
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Modest
                      </td>
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Satisfied
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Full
                      </td>
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Ecstatic
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">list</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>1st level of puns: 5 gold coins</li>
                <li>2nd level of jokes: 10 gold coins</li>
                <li>3rd level of one-liners : 20 gold coins</li>
              </ul>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">Inline code</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                @radix-ui/react-alert-dialog
              </code>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">Lead</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <p className="text-xl text-muted-foreground">
                A modal dialog that interrupts the user with important content
                and expects a response.
              </p>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">Large</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="text-lg font-semibold">
                Are you absolutely sure?
              </div>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">Small</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <small className="text-sm font-medium leading-none">
                Email address
              </small>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">Muted</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <p className="text-sm text-muted-foreground">
                Enter your email address.
              </p>
            </div>
          </dd>
        </div>
      </dl>
    )
  },
}
