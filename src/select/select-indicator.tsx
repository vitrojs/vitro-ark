import { mergeProps } from '@vitro/zag'
import { useSelectContext } from './select-context'

export type SelectIndicatorProps = JSX.IntrinsicElements['div']

export const SelectIndicator = (props: SelectIndicatorProps) => {
  const api = useSelectContext()
  const mergedProps = mergeProps(props, () => api().indicatorProps)

  return <div {...mergedProps} />
}
