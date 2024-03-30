import { Button } from "@/src/components/ui/Button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/Form"
import { Label } from "@/src/components/ui/Label"
import { toast } from "@/src/components/ui/Toast"
import { zodResolver } from "@hookform/resolvers/zod"
import type { Meta, StoryObj } from "@storybook/react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Input } from "./Input"

const meta = {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export const _Input: Story = {
  render: () => {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        username: "",
      },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      })
    }

    return (
      <dl className="m-0 space-y-6 p-4">
        <div>
          <dt className="m-0">Default</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <Input type="email" placeholder="Email" />
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">File</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Picture</Label>
                <Input id="picture" type="file" />
              </div>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">Disabled</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <Input disabled type="email" placeholder="Email" />
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">With Label</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">With Button</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Email" />
                <Button type="submit">Subscribe</Button>
              </div>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">Form</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-2/3 space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </div>
          </dd>
        </div>
      </dl>
    )
  },
}
