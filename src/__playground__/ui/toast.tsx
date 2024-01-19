import { Toast as ArkToast, type ToastProps as ArkToastProps } from '@vitro/ark'

import { toast, type ToastVariantProps } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toast)

export type ToastProps = Assign<ArkToastProps, ToastVariantProps>

const Toast: JSX.Component<ToastProps> = withProvider(ArkToast.Root, 'root')
const ToastCloseTrigger = withContext(ArkToast.CloseTrigger, 'closeTrigger')
const ToastDescription = withContext(ArkToast.Description, 'description')
const ToastGroup = withContext(ArkToast.Group, 'group')
const ToastTitle = withContext(ArkToast.Title, 'title')

const Root = Toast
const CloseTrigger = ToastCloseTrigger
const Description = ToastDescription
const Group = ToastGroup
const Title = ToastTitle

export {
  // Toast,
  // ToastCloseTrigger,
  // ToastDescription,
  // ToastGroup,
  // ToastTitle,

  CloseTrigger,
  Description,
  Group,
  Root,
  Title,
}
