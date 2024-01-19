import { Observify, PropTypes, normalizeProps, useMachine } from '@vitro/zag'
import * as fileUpload from '@zag-js/file-upload'
import { useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { Accessor, type Optional } from '../types'
import { createSequenceId } from '../utils'

export interface UseFileUploadProps
  extends Optional<fileUpload.Context, 'id'> {}
export interface UseFileUploadReturn
  extends Accessor<fileUpload.Api<PropTypes>> {}

export const useFileUpload = (
  props: Observify<UseFileUploadProps>,
): UseFileUploadReturn => {
  const getRootNode = useEnvironmentContext()

  const [state, send] = useMachine(props, fileUpload.machine, {
    id: createSequenceId(),
    getRootNode,
  })

  return useMemo(() => fileUpload.connect(state(), send, normalizeProps))
}
