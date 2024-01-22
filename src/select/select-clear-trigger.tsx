import { mergeProps } from '@vitro/zag'
import { useSelectContext } from './select-context'

export type SelectClearTriggerProps = JSX.IntrinsicElements['button']

export const SelectClearTrigger: JSX.Component<SelectClearTriggerProps> = (
	props,
) => {
	const api = useSelectContext()
	const mergedProps = mergeProps(props, () => api().clearTriggerProps)

	return <button {...mergedProps} />
}
