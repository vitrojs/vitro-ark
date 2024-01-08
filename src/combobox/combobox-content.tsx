import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { mergeProps } from '../utils'
import { useComboboxContext } from './combobox-context'

export type ComboboxContentProps = JSX.IntrinsicElements['div']

export const ComboboxContent = (props: ComboboxContentProps) => {
  const api = useComboboxContext()
  const presenceApi = usePresenceContext()

  const mergedProps = mergeProps(
    props,
    () => api().contentProps,
    () => presenceApi().presenceProps,
  )

  return (
    <If when={() => !presenceApi().isUnmounted}>
      <div {...mergedProps} />
    </If>
  )
}
