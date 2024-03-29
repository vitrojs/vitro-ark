import { mergeProps } from '@vitro/zag'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerTriggerProps = JSX.IntrinsicElements['button']

export const ColorPickerTrigger: JSX.Component<ColorPickerTriggerProps> = (
	props,
) => {
	const api = useColorPickerContext()
	const mergedProps = mergeProps(props, () => api().triggerProps)

	return <button {...mergedProps} />
}
