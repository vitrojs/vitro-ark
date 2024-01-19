// /** @jsxImportSource solid-js */
import {
	RowData,
	TableOptions,
	TableOptionsResolved,
	createTable,
} from '@tanstack/table-core'

import { $, h, useEffect } from 'vitro'
import { mergeProxy } from './merge-proxy'

export * from '@tanstack/table-core'

export function flexRender<TProps extends {}>(Comp: any, props: TProps) {
	if (!Comp) return null

	if (typeof Comp === 'function') {
		return h(Comp, props)
	}

	return Comp
}

export function useVitroTable<TData extends RowData>(
	options: TableOptions<TData>,
) {
	const resolvedOptions: TableOptionsResolved<TData> = mergeProxy(
		{
			state: {}, // Dummy state
			onStateChange: () => {}, // noop
			renderFallbackValue: null,
			mergeOptions(
				defaultOptions: TableOptions<TData>,
				options: TableOptions<TData>,
			) {
				return mergeProxy(defaultOptions, options)
			},
		},
		options,
	)

	const table = createTable<TData>(resolvedOptions)
	// can't use `reactive` because update needs to be immutable
	const state = $(table.initialState)

	useEffect(() => {
		const localState = state()
		table.setOptions((prev) => {
			const stateProxy = new Proxy({} as typeof localState, {
				get: (_, prop) => localState[prop as keyof typeof state],
			})

			return mergeProxy(prev, options, {
				// merge the initialState and `options.state`
				// create a new proxy on each `setOptions` call
				// and get the value from state on each property access
				state: mergeProxy(stateProxy, options.state ?? {}),
				// Similarly, we'll maintain both our internal state and any user-provided
				// state.
				onStateChange: (updater: any) => {
					state(updater)
					options.onStateChange?.(updater)
				},
			})
		})
	})

	return table
}
