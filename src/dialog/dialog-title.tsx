import { mergeProps } from '@vitro/zag'
import { useDialogContext } from './dialog-context'

export type DialogTitleProps = JSX.IntrinsicElements['h2']

export const DialogTitle = (props: DialogTitleProps) => {
	const dialog = useDialogContext()
	const mergedProps = mergeProps(props, () => dialog().titleProps)

	return <h2 {...mergedProps} />
}
