import { useState } from "react"
import { Button } from "@/src/components/ui/Button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/src/components/ui/Command"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/src/components/ui/Drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/src/components/ui/DropdownMenu"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/Form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/Popover"
import { toast } from "@/src/components/ui/Toast"
import { useMediaQuery } from "@/src/hooks/use-media-query"
import { cn } from "@/src/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"
import {
  ArrowUpCircle,
  Calendar,
  Check,
  CheckCircle2,
  ChevronsUpDown,
  Circle,
  HelpCircle,
  LucideIcon,
  MoreHorizontal,
  Tags,
  Trash,
  User,
  XCircle,
} from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Combobox } from "./Combobox"

const meta = {
  title: "Forms/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

type Status = {
  value: string
  label: string
  icon: LucideIcon
}

const statuses: Status[] = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: ArrowUpCircle,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle2,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircle,
  },
]

const labels = [
  "feature",
  "bug",
  "enhancement",
  "documentation",
  "design",
  "question",
  "maintenance",
]

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const

const FormSchema = z.object({
  language: z.string({
    required_error: "Please select a language.",
  }),
})

export const _Combobox: Story = {
  render: () => {
    const handleClick = action("clicked")
    const [open, setOpen] = useState(false)
    const [comboboxOpen, setComboboxOpen] = useState(false)
    const [popoverOpen, setPopoverOpen] = useState(false)
    const [value, setValue] = useState("")
    const [selectedStatus, setSelectedStatus] = useState<Status | null>(null)
    const [label, setLabel] = useState("feature")
    const [dropdownMenuopen, setDropdownMenuOpen] = useState(false)
    const [responsiveOpen, setResponsiveOpen] = useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")
    // const [selectedStatus, setSelectedStatus] = useState<Status | null>(
    //   null
    // )

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
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                    onClick={handleClick}
                  >
                    {value
                      ? frameworks.find(
                          (framework) => framework.value === value
                        )?.label
                      : "Select framework..."}
                    <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            handleClick()
                            setValue(currentValue === value ? "" : currentValue)
                            setOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 size-4",
                              value === framework.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">Combobox</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <Popover open={comboboxOpen} onOpenChange={setComboboxOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={comboboxOpen}
                    className="w-[200px] justify-between"
                    onClick={handleClick}
                  >
                    {value
                      ? frameworks.find(
                          (framework) => framework.value === value
                        )?.label
                      : "Select framework..."}
                    <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            handleClick()
                            setValue(currentValue === value ? "" : currentValue)
                            setComboboxOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 size-4",
                              value === framework.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">Popover</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="flex flex-row items-start space-x-2">
                <p className="text-sm text-muted-foreground">Status</p>
                <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-[150px] justify-start"
                    >
                      {selectedStatus ? (
                        <>
                          <selectedStatus.icon className="mr-2 size-4 shrink-0" />
                          {selectedStatus.label}
                        </>
                      ) : (
                        <>+ Set status</>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0" side="right" align="start">
                    <Command>
                      <CommandInput placeholder="Change status..." />
                      <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                          {statuses.map((status) => (
                            <CommandItem
                              key={status.value}
                              value={status.value}
                              onSelect={(value) => {
                                setSelectedStatus(
                                  statuses.find(
                                    (priority) => priority.value === value
                                  ) || null
                                )
                                setOpen(false)
                              }}
                            >
                              <status.icon
                                className={cn(
                                  "mr-2 size-4",
                                  status.value === selectedStatus?.value
                                    ? "opacity-100"
                                    : "opacity-40"
                                )}
                              />
                              <span>{status.label}</span>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">Dropdown menu</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="flex items-center space-x-4">
                <p className="text-sm text-muted-foreground">Status</p>
                <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
                  <p className="text-sm font-medium leading-none">
                    <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
                      {label}
                    </span>
                    <span className="text-muted-foreground">
                      Create a new project
                    </span>
                  </p>
                  <DropdownMenu
                    open={dropdownMenuopen}
                    onOpenChange={setDropdownMenuOpen}
                  >
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px]">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <User className="mr-2 size-4" />
                          Assign to...
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Calendar className="mr-2 size-4" />
                          Set due date...
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>
                            <Tags className="mr-2 size-4" />
                            Apply label
                          </DropdownMenuSubTrigger>
                          <DropdownMenuSubContent className="p-0">
                            <Command>
                              <CommandInput
                                placeholder="Filter label..."
                                autoFocus={true}
                              />
                              <CommandList>
                                <CommandEmpty>No label found.</CommandEmpty>
                                <CommandGroup>
                                  {labels.map((label) => (
                                    <CommandItem
                                      key={label}
                                      value={label}
                                      onSelect={(value) => {
                                        setLabel(value)
                                        setDropdownMenuOpen(false)
                                      }}
                                    >
                                      {label}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="mr-2 size-4" />
                          Delete
                          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">Responsive</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="flex flex-row items-start space-x-2">
                <p className="text-sm text-muted-foreground">Status</p>
                {isDesktop ? (
                  <Popover
                    open={responsiveOpen}
                    onOpenChange={setResponsiveOpen}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-[150px] justify-start"
                      >
                        {selectedStatus ? (
                          <>{selectedStatus.label}</>
                        ) : (
                          <>+ Set status</>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0" align="start">
                      <StatusList
                        setOpen={setResponsiveOpen}
                        setSelectedStatus={setSelectedStatus}
                      />
                    </PopoverContent>
                  </Popover>
                ) : (
                  <Drawer
                    open={responsiveOpen}
                    onOpenChange={setResponsiveOpen}
                  >
                    <DrawerTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-[150px] justify-start"
                      >
                        {selectedStatus ? (
                          <>{selectedStatus.label}</>
                        ) : (
                          <>+ Set status</>
                        )}
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <div className="mt-4 border-t">
                        <StatusList
                          setOpen={setResponsiveOpen}
                          setSelectedStatus={setSelectedStatus}
                        />
                      </div>
                    </DrawerContent>
                  </Drawer>
                )}
              </div>
            </div>
          </dd>
        </div>

        <div>
          <dt className="m-0">Form</dt>
          <dd className="mx-0 mt-2">
            <div className="flex flex-row justify-start gap-x-8 gap-y-4">
              <div className="flex flex-row items-start space-x-2">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="language"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Language</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  className={cn(
                                    "w-[200px] justify-between",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value
                                    ? languages.find(
                                        (language) =>
                                          language.value === field.value
                                      )?.label
                                    : "Select language"}
                                  <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                              <Command>
                                <CommandInput placeholder="Search language..." />
                                <CommandEmpty>No language found.</CommandEmpty>
                                <CommandGroup>
                                  {languages.map((language) => (
                                    <CommandItem
                                      value={language.label}
                                      key={language.value}
                                      onSelect={() => {
                                        form.setValue(
                                          "language",
                                          language.value
                                        )
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 size-4",
                                          language.value === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                      {language.label}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          <FormDescription>
                            This is the language that will be used in the
                            dashboard.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Submit</Button>
                  </form>
                </Form>
              </div>
            </div>
          </dd>
        </div>
      </dl>
    )
  },
}

function StatusList({
  setOpen,
  setSelectedStatus,
}: {
  setOpen: (open: boolean) => void
  setSelectedStatus: (status: Status | null) => void
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {statuses.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                setSelectedStatus(
                  statuses.find((priority) => priority.value === value) || null
                )
                setOpen(false)
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
