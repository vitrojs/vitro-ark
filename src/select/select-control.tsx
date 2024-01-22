import { mergeProps } from '@vitro/zag'
import { shallowEqual as equals } from 'fast-equals'
import { For, useMemo } from 'vitro'
import { useSelectContext } from './select-context'
export type SelectControlProps = JSX.IntrinsicElements['div']

export const SelectControl: JSX.Component<SelectControlProps> = (props) => {
	const api = useSelectContext()
	const mergedProps = mergeProps(props, () => api().controlProps)

	const items = useMemo(() => api().collection.toArray(), { equals })

	return (
		<>
			<div {...mergedProps} />
			<select {...api().hiddenSelectProps}>
				<For values={items}>
					{(option) => <option value={option.value}>{option.label}</option>}
				</For>
			</select>
		</>
	)
}
