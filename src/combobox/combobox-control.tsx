import { mergeProps } from '@vitro/zag'
import { useComboboxContext } from './combobox-context'

export type ComboboxControlProps = JSX.IntrinsicElements['div']

export const ComboboxControl: JSX.Component<ComboboxControlProps> = (props) => {
	const combobox = useComboboxContext()
	const mergedProps = mergeProps(props, () => combobox().controlProps)

	return <div {...mergedProps} />
}
