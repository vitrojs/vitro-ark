import { Observify } from '@vitro/zag'
import { type Assign } from '../types'
import { ProgressProvider } from './progress-context'
import {
  useProgress,
  type UseProgressProps,
  type UseProgressReturn,
} from './use-progress'
import { mergeProps } from '@vitro/zag'
import { applyChildren } from '../utils'

export type ProgressProps = Assign<
  Assign<
    JSX.IntrinsicElements['div'],
    Observify<UseProgressProps> & {
      children?: JSX.Element | ((api: UseProgressReturn) => JSX.Element)
    }
  >,
  UseProgressProps
>

export const Progress = ({
  dir,
  getRootNode,
  id,
  max,
  min,
  orientation,
  translations,
  value,
  children,
  ...props
}: ProgressProps) => {
  const api = useProgress({
    dir,
    getRootNode,
    id,
    max,
    min,
    orientation,
    translations,
    value,
  })
  const mergedProps = mergeProps(props, () => api().rootProps)

  return (
    <ProgressProvider value={api}>
      <div {...mergedProps}>{applyChildren(children, api)}</div>
    </ProgressProvider>
  )
}
