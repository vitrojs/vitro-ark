import { mergeProps } from '@vitro/zag'
import { useDialogContext } from './dialog-context'

export type DialogDescriptionProps = JSX.IntrinsicElements['p']

export const DialogDescription: JSX.Component<DialogDescriptionProps> = (
	props,
) => {
	const dialog = useDialogContext()
	const mergedProps = mergeProps(props, () => dialog().descriptionProps)

	return <p {...mergedProps} />
}
