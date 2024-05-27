import { Eye } from 'lucide-react'

import type { Meta, StoryObj } from '@storybook/react'

import { args } from '../../utilities/stories'
import { Icon } from './'

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Display/Icon',
  argTypes: args({
    icon: {
      table: {
        disable: true
      }
    },
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
    }
  })
}

export default meta
type Story = StoryObj<typeof Icon>

export const Primary: Story = {
  args: {
    icon: Eye,
    variant: 'primary',
    size: 'md'
  }
}