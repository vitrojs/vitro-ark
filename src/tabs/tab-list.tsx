import { mergeProps } from '@vitro/zag'
import { useTabsContext } from './tabs-context'

export type TabListProps = JSX.IntrinsicElements['div']

export const TabList: JSX.Component<TabListProps> = (props) => {
	const api = useTabsContext()
	const mergedProps = mergeProps(props, () => api().tablistProps)

	return <div {...mergedProps} />
}
