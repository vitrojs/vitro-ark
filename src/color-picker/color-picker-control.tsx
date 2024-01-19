import { mergeProps } from '@vitro/zag'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerControlProps = JSX.IntrinsicElements['div']

export const ColorPickerControl = (props: ColorPickerControlProps) => {
	const api = useColorPickerContext()
	const mergedProps = mergeProps(props, () => api().controlProps)

	return <div {...mergedProps} />
}
