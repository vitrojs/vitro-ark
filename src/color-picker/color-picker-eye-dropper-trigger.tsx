import { mergeProps } from '@vitro/zag'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerEyeDropperTriggerProps = JSX.IntrinsicElements['button']

export const ColorPickerEyeDropperTrigger: JSX.Component<
	ColorPickerEyeDropperTriggerProps
> = (props) => {
	const api = useColorPickerContext()
	const mergedProps = mergeProps(props, () => api().eyeDropperTriggerProps)

	return <button {...mergedProps} />
}
