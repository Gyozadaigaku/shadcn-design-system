import { useEffect, useState } from "react"
import type { StoryObj } from "@storybook/react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./Command"

const meta = {
  title: "Data Display/Command",
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const _Command: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen((open) => !open)
        }
      }

      document.addEventListener("keydown", down)
      return () => document.removeEventListener("keydown", down)
    }, [])

    return (
      <dl className="m-0 space-y-6 p-4">
        <div>
          <dt className="m-0">Default</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <Calendar className="mr-2 size-4" />
                      <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                      <Smile className="mr-2 size-4" />
                      <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                      <Calculator className="mr-2 size-4" />
                      <span>Calculator</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>
                      <User className="mr-2 size-4" />
                      <span>Profile</span>
                      <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <CreditCard className="mr-2 size-4" />
                      <span>Billing</span>
                      <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Settings className="mr-2 size-4" />
                      <span>Settings</span>
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">CommandDialog</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <p className="text-sm text-muted-foreground">
                Press{" "}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>J
                </kbd>
              </p>
              <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <Calendar className="mr-2 size-4" />
                      <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                      <Smile className="mr-2 size-4" />
                      <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                      <Calculator className="mr-2 size-4" />
                      <span>Calculator</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>
                      <User className="mr-2 size-4" />
                      <span>Profile</span>
                      <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <CreditCard className="mr-2 size-4" />
                      <span>Billing</span>
                      <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Settings className="mr-2 size-4" />
                      <span>Settings</span>
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </CommandDialog>
            </div>
          </dd>
        </div>
      </dl>
    )
  },
}
