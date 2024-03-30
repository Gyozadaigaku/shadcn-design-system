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

import { Textarea } from "./Textarea"

const FormSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
})

const meta = {
  title: "Forms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const _Textarea: Story = {
  render: () => {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
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
              <Textarea placeholder="Type your message here." />
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">Disabled</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <Textarea placeholder="Type your message here." disabled />
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">With Label</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Your message</Label>
                <Textarea placeholder="Type your message here." id="message" />
              </div>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">With Text</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message-2">Your Message</Label>
                <Textarea
                  placeholder="Type your message here."
                  id="message-2"
                />
                <p className="text-sm text-muted-foreground">
                  Your message will be copied to the support team.
                </p>
              </div>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">With Button</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="grid w-full gap-2">
                <Textarea placeholder="Type your message here." />
                <Button>Send message</Button>
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
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us a little bit about yourself"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          You can <span>@mention</span> other users and
                          organizations.
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
