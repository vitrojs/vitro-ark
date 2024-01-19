import {
  Dialog as ArkDialog,
  type DialogProps as ArkDialogProps,
} from '@vitro/ark'

import { dialog, type DialogVariantProps } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(dialog)
export type DialogProps = Assign<ArkDialogProps, DialogVariantProps>
const Dialog: JSX.Component<DialogProps> = withProvider(ArkDialog.Root)
const DialogBackdrop = withContext(ArkDialog.Backdrop, 'backdrop')
const DialogCloseTrigger = withContext(ArkDialog.CloseTrigger, 'closeTrigger')
const DialogContent = withContext(ArkDialog.Content, 'content')
const DialogDescription = withContext(ArkDialog.Description, 'description')
const DialogPositioner = withContext(ArkDialog.Positioner, 'positioner')
const DialogTitle = withContext(ArkDialog.Title, 'title')
const DialogTrigger = withContext(ArkDialog.Trigger, 'trigger')

const Root = Dialog
const Backdrop = DialogBackdrop
const CloseTrigger = DialogCloseTrigger
const Content = DialogContent
const Description = DialogDescription
const Positioner = DialogPositioner
const Title = DialogTitle
const Trigger = DialogTrigger

export {
  // Dialog,
  // DialogBackdrop,
  // DialogCloseTrigger,
  // DialogContent,
  // DialogDescription,
  // DialogPositioner,
  // DialogTitle,
  // DialogTrigger,
  Backdrop,
  CloseTrigger,
  Content,
  Description,
  Positioner,
  Root,
  Title,
  Trigger,
}
