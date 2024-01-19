import type { Observify } from '@vitro/zag'
import type { Assign } from '../types'
import { mergeProps } from '@vitro/zag'
import { applyChildren } from '../utils'
import { SliderProvider } from './slider-context'
import {
	useSlider,
	type UseSliderProps,
	type UseSliderReturn,
} from './use-slider'

export type SliderProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<UseSliderProps> & {
		children?: JSX.Element | ((api: UseSliderReturn) => JSX.Element)
	}
>

export const Slider = ({
	'aria-label': ariaLabel,
	'aria-labelledby': ariaLabelledby,
	dir,
	disabled,
	form,
	getAriaValueText,
	getRootNode,
	id,
	ids,
	invalid,
	max,
	min,
	minStepsBetweenThumbs,
	name,
	onFocusChange,
	onValueChange,
	onValueChangeEnd,
	orientation,
	origin,
	readOnly,
	step,
	thumbAlignment,
	thumbSize,
	value,
	// ----
	children,
	...props
}: SliderProps) => {
	const sliderParams = {
		'aria-label': ariaLabel,
		'aria-labelledby': ariaLabelledby,
		dir,
		disabled,
		form,
		getAriaValueText,
		getRootNode,
		id,
		ids,
		invalid,
		max,
		min,
		minStepsBetweenThumbs,
		name,
		onFocusChange,
		onValueChange,
		onValueChangeEnd,
		orientation,
		origin,
		readOnly,
		step,
		thumbAlignment,
		thumbSize,
		value,
	}

	const api = useSlider(sliderParams)
	const mergedProps = mergeProps(props, () => api().rootProps)

	return (
		<SliderProvider value={api}>
			<div {...mergedProps}>{applyChildren(children, api)}</div>
		</SliderProvider>
	)
}
