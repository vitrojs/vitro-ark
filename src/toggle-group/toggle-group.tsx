import type { Observify } from '@vitro/zag'
import type { Assign } from '../types'
import { mergeProps } from '@vitro/zag'
import { ToggleGroupProvider } from './toggle-group-context'
import { useToggleGroup, type UseToggleGroupProps } from './use-toggle-group'

export type ToggleGroupProps = Assign<
  JSX.IntrinsicElements['div'],
  Observify<UseToggleGroupProps>
>

export const ToggleGroup = ({
  dir,
  disabled,
  getRootNode,
  id,
  ids,
  loop,
  multiple,
  onValueChange,
  orientation,
  rovingFocus,
  value,
  // ----
  ...props
}: ToggleGroupProps) => {
  const api = useToggleGroup({
    dir,
    disabled,
    getRootNode,
    id,
    ids,
    loop,
    multiple,
    onValueChange,
    orientation,
    rovingFocus,
    value,
  })
  const mergedProps = mergeProps(props, () => api().rootProps)

  return (
    <ToggleGroupProvider value={api}>
      <div {...mergedProps} />
    </ToggleGroupProvider>
  )
}
