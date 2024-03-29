import { mergeProps } from '@vitro/zag'
import { $$, useMemo } from 'vitro'
import { useSliderContext } from './slider-context'

export type SliderValueTextProps = JSX.IntrinsicElements['div']

export const SliderValueText: JSX.Component<SliderValueTextProps> = ({
	children,
	...props
}) => {
	const api = useSliderContext()
	const mergedProps = mergeProps(props, () => api().valueTextProps)

	const child = useMemo(() => $$(children) ?? (() => api().value.join(',')))

	return <div {...mergedProps}>{child}</div>
}
