import { Plus } from 'lucide-react'

import { TooltipProvider } from '@radix-ui/react-tooltip'
import type { Meta, StoryObj } from '@storybook/react'

import { args } from '../../utilities/stories'
import { ActionIcon } from './'

const meta: Meta<typeof ActionIcon> = {
  component: ActionIcon,
  title: 'Inputs/ActionIcon',
  argTypes: args({
    variant: {
      control: {
        type: 'select'
      },
      options: ['primary', 'secondary', 'subtle']
    },
    size: {
      control: {
        type: 'select'
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    tooltip: {
      control: 'text'
    },
    icon: {
      table: {
        disable: true
      }
    }
  }),
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    )
  ]
}

export default meta
type Story = StoryObj<typeof ActionIcon>

export const Primary: Story = {
  args: {
    icon: Plus,
    tooltip: 'Add new item'
  }
}