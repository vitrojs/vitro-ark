import { mergeProps } from '@vitro/zag'
import { useColorPickerAreaContext } from './color-picker-area-context'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerAreaBackgroundProps = JSX.IntrinsicElements['div']

export const ColorPickerAreaBackground: JSX.Component<
	ColorPickerAreaBackgroundProps
> = (props) => {
	const colorAreaProps = useColorPickerAreaContext()
	const api = useColorPickerContext()
	const mergedProps = mergeProps(props, () =>
		api().getAreaBackgroundProps(colorAreaProps()),
	)

	return <div {...mergedProps} />
}
