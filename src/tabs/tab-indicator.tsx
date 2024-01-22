import { mergeProps } from '@vitro/zag'
import { useTabsContext } from './tabs-context'

export type TabIndicatorProps = JSX.IntrinsicElements['div']

export const TabIndicator: JSX.Component<TabIndicatorProps> = (props) => {
	const api = useTabsContext()
	const mergedProps = mergeProps(props, () => api().indicatorProps)

	return <div {...mergedProps} />
}
