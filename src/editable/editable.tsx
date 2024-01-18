import type { Observify } from '@vitro/zag'
import type { Assign } from '../types'
import { mergeProps } from '@vitro/zag'
import { applyChildren } from '../utils'
import { EditableProvider } from './editable-context'
import {
  useEditable,
  type UseEditableProps,
  type UseEditableReturn,
} from './use-editable'

export type EditableProps = Assign<
  JSX.IntrinsicElements['div'],
  Observify<UseEditableProps> & {
    children?: JSX.Element | ((api: UseEditableReturn) => JSX.Element)
  }
>

export const Editable = ({
  activationMode,
  autoResize,
  dir,
  disabled,
  finalFocusEl,
  form,
  getRootNode,
  id,
  ids,
  invalid,
  maxLength,
  name,
  onEdit,
  onFocusOutside,
  onInteractOutside,
  onPointerDownOutside,
  onValueChange,
  onValueCommit,
  onValueRevert,
  placeholder,
  readOnly,
  selectOnFocus,
  startWithEditView,
  submitMode,
  translations,
  value,
  // ----
  children,
  ...props
}: EditableProps) => {
  const useEditableProps = {
    activationMode,
    autoResize,
    dir,
    disabled,
    finalFocusEl,
    form,
    getRootNode,
    id,
    ids,
    invalid,
    maxLength,
    name,
    onEdit,
    onFocusOutside,
    onInteractOutside,
    onPointerDownOutside,
    onValueChange,
    onValueCommit,
    onValueRevert,
    placeholder,
    readOnly,
    selectOnFocus,
    startWithEditView,
    submitMode,
    translations,
    value,
  }

  const api = useEditable(useEditableProps)
  const mergedProps = mergeProps(props, () => api().rootProps)

  return (
    <EditableProvider value={api}>
      <div {...mergedProps}>{applyChildren(children, api)}</div>
    </EditableProvider>
  )
}
