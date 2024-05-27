import React, { forwardRef } from 'react'

import * as RTooltip from '@radix-ui/react-tooltip'

import { cn } from '../../utilities'
import { TooltipProps } from './Tooltip.types'

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    { children, content, delayDuration = 300, withArrow = true, ...props },
    ref
  ) => {
    return (
      <RTooltip.Root delayDuration={delayDuration}>
        <RTooltip.Trigger>{children}</RTooltip.Trigger>
        <RTooltip.Portal>
          {content && (
            <RTooltip.Content
              className={cn(
                'data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade',
                'data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade',
                'data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade',
                'data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade',
                `z-50 w-[100%] select-none text-sm rounded-md bg-black text-white px-2 py-1`
              )}
              sideOffset={5}
              ref={ref}
              {...props}
            >
              {content}
              {withArrow && <RTooltip.Arrow className="fill-black" />}
            </RTooltip.Content>
          )}
        </RTooltip.Portal>
      </RTooltip.Root>
    )
  }
)
export const TooltipProvider = RTooltip.Provider
TooltipProvider.displayName = 'TooltipProvider'
Tooltip.displayName = 'Tooltip'
