import { forwardRef } from 'react'

import { cva } from 'class-variance-authority'

import { cn } from '../../utilities'
import { Icon } from '../Icon'
import { Tooltip } from '../Tooltip'
import { ActionIconProps } from './ActionIcon.types'

const variants = cva<
  Variants<{
    size: SlateSize
    variant: SlateVariant
  }>
>(
  [
    'flex items-center justify-center rounded-lg border focus:outline-none',
    'focus:ring-2 focus:ring-primary hover:shadow-inner'
  ],
  {
    variants: {
      size: {
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
      },
      variant: {
        primary: 'text-primary bg-transparent',
        secondary: 'text-white bg-primary',
        subtle:
          'text-primary border-transparent border-transparent hover:shadow-none'
      }
    }
  }
)

export const ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>(
  (
    { icon, variant = 'primary', size = 'md', className, tooltip, ...props },
    ref
  ) => (
    <Tooltip content={tooltip}>
      <button
        ref={ref}
        className={cn(variants({ size, variant }), className)}
        {...props}
      >
        <Icon icon={icon} size={size} variant="subtle" className={className} />
      </button>
    </Tooltip>
  )
)
ActionIcon.displayName = 'ActionIcon'