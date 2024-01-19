import { useMemo, $, If, FunctionMaybe, $$ } from 'vitro'
import { EnvironmentProvider } from './environment-context'

export interface EnvironmentProps {
	children?: JSX.Element
	value?: FunctionMaybe<ShadowRoot | Document | Node>
}

export const Environment = (props: EnvironmentProps) => {
	// eslint-disable-next-line prefer-const
	const spanRef = $<HTMLSpanElement>()

	const currentEnv = useMemo(
		() => $$(props.value) ?? spanRef()?.ownerDocument ?? document,
	)

	return (
		<EnvironmentProvider value={currentEnv}>
			{props.children}
			<If when={!props.value}>
				<span hidden ref={spanRef} />
			</If>
		</EnvironmentProvider>
	)
}
