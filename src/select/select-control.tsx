import { For, useMemo } from 'vitro'
import { mergeProps } from '../utils'
import { useSelectContext } from './select-context'

export type SelectControlProps = JSX.IntrinsicElements['div']

export const SelectControl = (props: SelectControlProps) => {
  const api = useSelectContext()
  const mergedProps = mergeProps(props, () => api().controlProps)

  const items = useMemo(() => api().collection.toArray(), { equals: eq })

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
