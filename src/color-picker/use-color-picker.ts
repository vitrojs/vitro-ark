import * as colorPicker from '@zag-js/color-picker'

import {
  type Observify,
  type PropTypes,
  normalizeProps,
  useMachine,
} from '@vitro/zag'
import { $$, ObservableReadonly, useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { type Optional } from '../types'
import { createUniqueId } from '../utils'

export interface UseColorPickerProps
  extends Optional<Omit<colorPicker.Context, 'value'>, 'id'> {
  /**
   * The current value of the color picker.
   */
  value?: string
}
export type UseColorPickerReturn = ObservableReadonly<
  colorPicker.Api<PropTypes>
>

export const useColorPicker = ({
  value,
  ...props
}: Observify<UseColorPickerProps>): UseColorPickerReturn => {
  const getRootNode = useEnvironmentContext()

  const [state, send] = useMachine(
    Object.assign(props, {
      value: useMemo(() => {
        const _value = $$(value)
        return _value ? colorPicker.parse(_value) : undefined
      }),
    }),

    colorPicker.machine,
    { id: createUniqueId(), getRootNode },
  )

  return useMemo(() => colorPicker.connect(state(), send, normalizeProps))
}
