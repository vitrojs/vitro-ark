import { mergeProps } from '@vitro/zag'
import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { useSelectContext } from './select-context'

export type SelectContentProps = JSX.IntrinsicElements['div']

export const SelectContent: JSX.Component<SelectContentProps> = (props) => {
	const api = useSelectContext()
	const presenceApi = usePresenceContext()
	const mergedProps = mergeProps(
		props,
		() => api().contentProps,
		() => presenceApi().presenceProps,
	)

	return (
		<If when={!presenceApi().isUnmounted}>
			<div {...mergedProps} />
		</If>
	)
}
