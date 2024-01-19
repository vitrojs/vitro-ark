import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { mergeProps } from '@vitro/zag'
import { useSelectContext } from './select-context'

export type SelectContentProps = JSX.IntrinsicElements['div']

export const SelectContent = (props: SelectContentProps) => {
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
