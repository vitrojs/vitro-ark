import { mergeProps } from '@vitro/zag'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerControlProps = JSX.IntrinsicElements['div']

export const ColorPickerControl: JSX.Component<ColorPickerControlProps> = (
	props,
) => {
	const api = useColorPickerContext()
	const mergedProps = mergeProps(props, () => api().controlProps)

	return <div {...mergedProps} />
}
