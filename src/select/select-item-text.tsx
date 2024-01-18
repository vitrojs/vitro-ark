import { mergeProps } from '@vitro/zag'
import { useSelectContext } from './select-context'
import { useSelectItemContext } from './select-item-context'

export type SelectItemTextProps = JSX.IntrinsicElements['span']

export const SelectItemText = (props: SelectItemTextProps) => {
  const api = useSelectContext()
  const itemProps = useSelectItemContext()
  const mergedProps = mergeProps(props, () =>
    api().getItemTextProps(itemProps()),
  )

  return <span {...mergedProps} />
}
