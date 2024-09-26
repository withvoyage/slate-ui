import * as RTabs from '@radix-ui/react-tabs';

import { cn } from '../../utilities';
import { Icon } from '../Icon';
import { TabsProps } from './Tabs.types';

export function Tabs({
  tabs,
  defaultTab,
  styles,
  className,
  ...props
}: TabsProps) {
  return (
    <RTabs.Root
      className={cn('flex flex-col', className)}
      defaultValue={defaultTab}
      style={styles?.root}
      {...props}
    >
      <RTabs.List
        className="shrink-0 flex border-b gap-2 px-2"
        style={styles?.tabContainer}
      >
        {tabs.map((tab) => (
          <RTabs.Trigger
            key={tab.id}
            className={cn(
              'px-2 py-3 flex items-center justify-center text-sm',
              'leading-none select-none gap-2',
              'data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary',
              'hover:text-muted hover:border-b-2 hover:border-muted'
            )}
            value={tab.id}
            style={styles?.tab}
          >
            {tab.iconLeft && <Icon icon={tab.iconLeft} variant="subtle" />}
            <span className="hidden sm:block">{tab.name}</span>
            {tab.iconRight && <Icon icon={tab.iconRight} variant="subtle" />}
          </RTabs.Trigger>
        ))}
      </RTabs.List>

      {tabs.map((tab) => (
        <RTabs.Content
          key={tab.id}
          className="p-5"
          value={tab.id}
          style={styles?.contentContainer}
        >
          {tab.content}
        </RTabs.Content>
      ))}
    </RTabs.Root>
  )
}
