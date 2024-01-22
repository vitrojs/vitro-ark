import { mergeProps } from '@vitro/zag'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerFormatTriggerProps = JSX.IntrinsicElements['button']

export const ColorPickerFormatTrigger: JSX.Component<
	ColorPickerFormatTriggerProps
> = (props) => {
	const api = useColorPickerContext()
	const mergedProps = mergeProps(props, () => api().formatTriggerProps)

	return <button {...mergedProps} />
}
