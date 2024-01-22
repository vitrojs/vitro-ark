import { mergeProps } from '@vitro/zag'
import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { useDialogContext } from './dialog-context'

export type DialogPositionerProps = JSX.IntrinsicElements['div']

export const DialogPositioner: JSX.Component<DialogPositionerProps> = (
	props,
) => {
	const api = useDialogContext()
	const presenceApi = usePresenceContext()
	const mergedProps = mergeProps(props, () => api().positionerProps)

	return (
		<If when={() => !presenceApi().isUnmounted}>
			<div {...mergedProps} />
		</If>
	)
}
