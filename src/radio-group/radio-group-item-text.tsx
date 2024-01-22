import { mergeProps } from '@vitro/zag'
import { useRadioGroupContext } from './radio-group-context'
import { useRadioGroupItemContext } from './radio-group-item-context'

export type RadioGroupItemTextProps = JSX.IntrinsicElements['span']

export const RadioGroupItemText: JSX.Component<RadioGroupItemTextProps> = (
	props,
) => {
	const api = useRadioGroupContext()
	const itemProps = useRadioGroupItemContext()
	const mergedProps = mergeProps(props, () =>
		api().getItemTextProps(itemProps()),
	)

	return <span {...mergedProps} />
}
