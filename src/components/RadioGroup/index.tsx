import { cn, SlateId, useSometimesControlled } from '../../utilities'
import { Label } from '../Label'
import { RadioGroupProps } from './RadioGroup.types'

export function RadioGroup<T extends SlateId>({
  items,
  value: valueProp,
  onChange: onChangeProp,
  defaultValue,
  className,
  styles,
  label,
  orientation = 'vertical',
  ...props
}: RadioGroupProps<T>) {
  const [value, setValue] = useSometimesControlled<T | null>({
    valueProp: valueProp,
    onChangeProp,
    defaultValue: defaultValue ?? null
  })

  return (
    <div className="flex flex-col gap-2" style={styles?.root} {...props}>
      {label && <Label styles={styles?.label}>{label}</Label>}

      <div
        className={cn(
          'flex gap-1 items-stretch w-fit',
          orientation === 'vertical' && 'flex-col',
          className
        )}
        style={styles?.wrapper}
      >
        {items.map((item) => (
          <div
            className={cn(
              'flex items-center gap-2 cursor-pointer py-2 pl-3 pr-4 rounded-lg duration-150 border',
              item.id === value
                ? 'bg-primary text-white'
                : 'bg-white hover:bg-muted'
            )}
            key={item.id}
            onClick={() => setValue(item.id)}
            style={styles?.item}
          >
            <button
              className={cn(
                'w-3 h-3 rounded-full',
                item.id === value ? 'bg-white' : 'border'
              )}
              style={styles?.dot}
            />
            <div className="flex flex-col">
              <span className="text-sm" style={styles?.title}>
                {item.name}
              </span>
              {item.description && (
                <span
                  className={cn('text-xs', item.id !== value && 'text-muted')}
                  style={styles?.description}
                >
                  {item.description}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
