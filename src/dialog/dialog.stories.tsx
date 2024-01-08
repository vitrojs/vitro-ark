import { StackStyles, stack } from 'styled-system/patterns'
import {
  ButtonVariantProps,
  button,
  dialog,
  iconButton,
} from 'styled-system/recipes'
import { Portal } from 'vitro'
import { Assign } from '../types'
import { Dialog } from '.'
import './dialog.css'

const Button = ({
  variant,
  size,
  ...props
}: Assign<JSX.IntrinsicElements['button'], ButtonVariantProps>) => {
  return <button {...props} class={button({ variant, size })} />
}
const IconButton = ({
  variant,
  size,
  ...props
}: Assign<JSX.IntrinsicElements['button'], ButtonVariantProps>) => {
  return <button {...props} class={iconButton({ variant, size })} />
}
const Stack = ({
  with: _with = {},
  children,
  ...props
}: StackStyles & {
  children?: JSX.Child
  with?: JSX.IntrinsicElements['div']
}) => {
  return (
    <div {..._with} class={stack(props)}>
      {children}
    </div>
  )
}

export const Basic = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>Dialog Description</Dialog.Description>
            <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export const Demo = () => {
  const styles = dialog()
  return (
    <Dialog.Root lazyMount unmountOnExit>
      <Dialog.Trigger class={styles.trigger} asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop class={styles.backdrop} />
        <Dialog.Positioner class={styles.positioner}>
          <Dialog.Content class={styles.content}>
            <Stack gap='8' p='6'>
              <Stack gap='1'>
                <Dialog.Title class={styles.title}>Dialog Title</Dialog.Title>
                <Dialog.Description class={styles.description}>
                  Dialog Description
                </Dialog.Description>
              </Stack>
              <Stack gap='3' direction='row' width='full'>
                <Button width='full'>Confirm</Button>
              </Stack>
            </Stack>
            <Dialog.CloseTrigger
              class={styles.closeTrigger}
              asChild
              position='absolute'
              top='2'
              right='2'
            >
              <IconButton aria-label='Close Dialog' variant='ghost' size='sm'>
                <i class='icon-x' />
              </IconButton>
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export const LazyMount = () => {
  return (
    <Dialog.Root lazyMount unmountOnExit>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>Dialog Description</Dialog.Description>
          <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}

export const RenderFn = () => {
  return (
    <Dialog.Root>
      {(api) => (
        <>
          <Dialog.Trigger>Open Dialog</Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Title>Dialog Title</Dialog.Title>
                <Dialog.Description>Dialog Description</Dialog.Description>
                <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
          <p>Dialog is {api().isOpen ? 'open' : 'closed'}</p>
        </>
      )}
    </Dialog.Root>
  )
}
