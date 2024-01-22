import { mergeProps } from '@vitro/zag'
import { useColorPickerAreaContext } from './color-picker-area-context'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerAreaThumbProps = JSX.IntrinsicElements['div']

export const ColorPickerAreaThumb: JSX.Component<ColorPickerAreaThumbProps> = (
	props,
) => {
	const colorAreaProps = useColorPickerAreaContext()
	const api = useColorPickerContext()
	const mergedProps = mergeProps(props, () =>
		api().getAreaThumbProps(colorAreaProps()),
	)

	return <div {...mergedProps} />
}
