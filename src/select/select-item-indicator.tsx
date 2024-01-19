import { mergeProps } from '@vitro/zag'
import { useSelectContext } from './select-context'
import { useSelectItemContext } from './select-item-context'

export type SelectItemIndicatorProps = JSX.IntrinsicElements['div']

export const SelectItemIndicator = (props: SelectItemIndicatorProps) => {
	const api = useSelectContext()
	const itemProps = useSelectItemContext()
	const mergedProps = mergeProps(props, () =>
		api().getItemIndicatorProps(itemProps()),
	)

	return <div {...mergedProps} />
}
