import { mergeProps } from '@vitro/zag'
import { useMemo } from 'vitro'
import { applyChildren } from '../utils'
import { useProgressContext } from './progress-context'

export type ProgressValueTextProps = JSX.IntrinsicElements['span']

export const ProgressValueText: JSX.Component<ProgressValueTextProps> = ({
	children,
	...props
}) => {
	const api = useProgressContext()
	const mergedProps = mergeProps(props, () => api().valueTextProps)

	const valueAsString = useMemo(() => api().valueAsString)

	return (
		<span {...mergedProps}>
			{children ? applyChildren(children, valueAsString) : valueAsString}
		</span>
	)
}
