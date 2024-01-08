import type { IndicatorProps } from '@zag-js/progress'

import { Observify } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { mergeProps } from '../utils'
import { useProgressContext } from './progress-context'

export type ProgressIndicatorProps = Assign<
  JSX.IntrinsicElements['span'],
  Observify<IndicatorProps>
>

export const ProgressIndicator = ({
  state,
  ...props
}: ProgressIndicatorProps) => {
  const api = useProgressContext()
  const mergedProps = mergeProps(props, () =>
    api().getIndicatorProps({ state: $$(state) }),
  )

  return <span {...mergedProps} />
}
