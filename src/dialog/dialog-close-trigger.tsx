import { mergeProps } from '@vitro/zag'
import { useDialogContext } from './dialog-context'

export type DialogCloseTriggerProps = JSX.IntrinsicElements['button']

export const DialogCloseTrigger = (props: DialogCloseTriggerProps) => {
	const dialog = useDialogContext()
	const mergedProps = mergeProps(props, () => dialog().closeTriggerProps)

	return <button {...mergedProps} />
}
