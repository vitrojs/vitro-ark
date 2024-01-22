import { mergeProps } from '@vitro/zag'
import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { useComboboxContext } from './combobox-context'

export type ComboboxPositionerProps = JSX.IntrinsicElements['div']

export const ComboboxPositioner: JSX.Component<ComboboxPositionerProps> = (props) => {
	const api = useComboboxContext()
	const presenceApi = usePresenceContext()
	const mergedProps = mergeProps(props, () => api().positionerProps)

	return (
		<If when={() => !presenceApi().isUnmounted}>
			<div {...mergedProps} />
		</If>
	)
}
