import { mergeProps } from '@vitro/zag'
import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { useComboboxContext } from './combobox-context'

export type ComboboxContentProps = JSX.IntrinsicElements['div']

export const ComboboxContent: JSX.Component<ComboboxContentProps> = (props) => {
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
