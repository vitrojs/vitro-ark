import { mergeProps } from '@vitro/zag'
import { useComboboxContext } from './combobox-context'

export type ComboboxInputProps = JSX.IntrinsicElements['input']

export const ComboboxInput: JSX.Component<ComboboxInputProps> = (props) => {
	const combobox = useComboboxContext()
	const mergedProps = mergeProps(props, () => combobox().inputProps)

	return <input {...mergedProps} />
}
