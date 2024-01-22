import { useCheckboxContext } from './checkbox-context'

import { mergeProps } from '@vitro/zag'
export type CheckboxControlProps = JSX.IntrinsicElements['div']

export const CheckboxControl: JSX.Component<CheckboxControlProps> = (
	props = {},
) => {
	const api = useCheckboxContext()

	const controlProps = mergeProps(props, () => api().controlProps)
	const hiddenInputProps = mergeProps({}, () => api().hiddenInputProps)

	return (
		<>
			<div {...controlProps} />
			<input {...hiddenInputProps} />
		</>
	)
}
