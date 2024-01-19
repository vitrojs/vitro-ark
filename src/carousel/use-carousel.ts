import * as carousel from '@zag-js/carousel'

import { Observify, PropTypes, normalizeProps, useMachine } from '@vitro/zag'
import { ObservableReadonly, useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { type Optional } from '../types'
import { createSequenceId } from '../utils'

export interface UseCarouselProps extends Optional<carousel.Context, 'id'> {}
export interface UseCarouselReturn
  extends ObservableReadonly<carousel.Api<PropTypes>> {}

export const useCarousel = (
  props: Observify<UseCarouselProps>,
): UseCarouselReturn => {
  const getRootNode = useEnvironmentContext()

  const [state, send] = useMachine(props, carousel.machine, {
    id: createSequenceId(),
    getRootNode,
  })
  return useMemo(() => carousel.connect(state(), send, normalizeProps))
}
