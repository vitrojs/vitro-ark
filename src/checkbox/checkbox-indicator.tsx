import { mergeProps } from '@vitro/zag'
import { useCheckboxContext } from './checkbox-context'

export type CheckboxIndicatorProps = JSX.IntrinsicElements['div']

export const CheckboxIndicator: JSX.Component<CheckboxIndicatorProps> = (
	props,
) => {
	const api = useCheckboxContext()
	const mergedProps = mergeProps(props, () => api().indicatorProps)

	return <div {...mergedProps} />
}
