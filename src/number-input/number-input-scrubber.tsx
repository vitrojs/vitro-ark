import { mergeProps } from '@vitro/zag'
import { useNumberInputContext } from './number-input-context'

export type NumberInputScrubberProps = JSX.IntrinsicElements['div']

export const NumberInputScrubber: JSX.Component<NumberInputScrubberProps> = (
	props,
) => {
	const api = useNumberInputContext()
	const mergedProps = mergeProps(props, () => api().scrubberProps)

	return <div {...mergedProps} />
}
