import * as datePicker from '@zag-js/date-picker'

import { Observify, PropTypes, normalizeProps, useMachine } from '@vitro/zag'
import { $$, ObservableReadonly, useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { type Optional } from '../types'
import { createSequenceId } from '../utils'

export interface UseDatePickerProps
  extends Optional<Omit<datePicker.Context, 'value' | 'focusedValue'>, 'id'> {
  /**
   * The focused date.
   */
  focusedValue?: string
  /**
   * The value of the date picker
   */
  value?: string[]
}
export interface UseDatePickerReturn
  extends ObservableReadonly<datePicker.Api<PropTypes>> {}

export const useDatePicker = ({
  value,
  focusedValue,
  ...props
}: Observify<UseDatePickerProps>): UseDatePickerReturn => {
  const getRootNode = useEnvironmentContext()

  const [state, send] = useMachine(
    {
      ...props,
      focusedValue: useMemo(() => {
        const _focusedValue = $$(focusedValue)
        return _focusedValue ? datePicker.parse(_focusedValue) : undefined
      }),
      value: useMemo(() => {
        const _value = $$(value)
        return _value ? datePicker.parse(_value) : undefined
      }),
    },
    datePicker.machine,
    {
      id: createSequenceId(),
      getRootNode,
    },
  )

  return useMemo(() => datePicker.connect(state(), send, normalizeProps))
}
