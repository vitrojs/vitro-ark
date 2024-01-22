import { mergeProps } from '@vitro/zag'
import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerContentProps = JSX.IntrinsicElements['div']

export const ColorPickerContent: JSX.Component<ColorPickerContentProps> = (
	props,
) => {
	const api = useColorPickerContext()
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
