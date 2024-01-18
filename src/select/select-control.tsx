import { For, useMemo } from 'vitro'
import { mergeProps } from '@vitro/zag'
import { useSelectContext } from './select-context'
import { shallowEqual as equals } from 'fast-equals'
export type SelectControlProps = JSX.IntrinsicElements['div']

export const SelectControl = (props: SelectControlProps) => {
  const api = useSelectContext()
  const mergedProps = mergeProps(props, () => api().controlProps)

  const items = useMemo(() => api().collection.toArray(), { equals })

  return (
    <>
      <div {...mergedProps} />
      <select {...api().hiddenSelectProps}>
        <For values={items}>
          {(option) => <option value={option.value}>{option.label}</option>}
        </For>
      </select>
    </>
  )
}
