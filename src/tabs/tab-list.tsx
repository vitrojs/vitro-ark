import { mergeProps } from '../utils'
import { useTabsContext } from './tabs-context'

export type TabListProps = JSX.IntrinsicElements['div']

export const TabList = (props: TabListProps) => {
  const api = useTabsContext()
  const mergedProps = mergeProps(props, () => api().tablistProps)

  return <div {...mergedProps} />
}
