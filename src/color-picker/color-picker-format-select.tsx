import { mergeProps } from '@vitro/zag'
import { For } from 'vitro'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerFormatSelectProps = JSX.IntrinsicElements['select']

export const ColorPickerFormatSelect: JSX.Component<
	ColorPickerFormatSelectProps
> = (props) => {
	const api = useColorPickerContext()
	const mergedProps = mergeProps(props, () => api().formatSelectProps)

	return (
		<select {...mergedProps}>
			<For values={['rgba', 'hsla', 'hsba']}>
				{(format) => <option value={format}>{format}</option>}
			</For>
		</select>
	)
}
