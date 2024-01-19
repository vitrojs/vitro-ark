import { Portal, render } from 'vitro'
import './index.css'

import { Route, Router } from '@vitro/router'
import {
  StackStyles,
  flex,
  stack
} from 'styled-system/patterns'
import {
  ButtonVariantProps,
  IconButtonVariantProps,
  button,
  dialog,
  iconButton,
} from 'styled-system/recipes'

import { X } from '@vitro/lucide'
import { css } from 'styled-system/css'
import * as Dialog from '../dialog'
import { Environment } from '../environment/environment'

const Layout = () => {
  return (
    <Environment>
      <div
        class={flex({
          p: '2',
        })}
      >
        <Route />
      </div>
    </Environment>
  )
}

const dialogStyles = dialog()

const Stack = ({
  css: stackStyle = {},
  ...props
}: JSX.IntrinsicElements['div'] & { css?: StackStyles }) => {
  return <div {...props} class={[stack(stackStyle), props.class]} />
}

const Button = ({
  css: buttonStyles = {},
  ...props
}: JSX.IntrinsicElements['button'] & { css?: ButtonVariantProps }) => {
  return <button {...props} class={[button(buttonStyles), props.class]} />
}

const IconButton = ({
  css: iconButtonStyles = {},
  ...props
}: JSX.IntrinsicElements['button'] & { css?: IconButtonVariantProps }) => (
  <button {...props} class={[iconButton(iconButtonStyles), props.class]} />
)

const App = () => {
  return (
    <Router
      routes={[
        {
          path: '/',
          to: () => (
            <div>
              <h2>Home</h2>

              <Button css={{ variant: 'solid' }}>Docs</Button>

              <Dialog.Dialog>
                <Dialog.DialogTrigger class={dialogStyles.trigger}>
                  Open Dialog
                </Dialog.DialogTrigger>
                <Portal>
                  <Dialog.DialogBackdrop class={dialogStyles.backdrop} />
                  <Dialog.DialogPositioner class={dialogStyles.positioner}>
                    <Dialog.DialogContent class={dialogStyles.content}>
                      <Stack css={{ gap: '8', p: '6' }}>
                        <Stack css={{ gap: '1' }}>
                          <Dialog.DialogTitle class={dialogStyles.title}>
                            Dialog Title
                          </Dialog.DialogTitle>
                          <Dialog.DialogDescription
                            class={dialogStyles.description}
                          >
                            Dialog Description
                          </Dialog.DialogDescription>
                        </Stack>
                        <Stack
                          css={{
                            gap: '3',
                            direction: 'row',
                            w: 'full',
                          }}
                        >
                          <Dialog.DialogCloseTrigger asChild>
                            <Button
                              css={{ variant: 'outline' }}
                              class={[
                                dialogStyles.closeTrigger,
                                css({ w: 'full' }),
                              ]}
                            >
                              Cancel
                            </Button>
                          </Dialog.DialogCloseTrigger>
                          <Button class={css({ w: 'full' })}>Confirm</Button>
                        </Stack>
                        <Dialog.DialogCloseTrigger
                          asChild
                          class={[
                            dialogStyles.closeTrigger,
                            css({ pos: 'absolute', top: '2', right: '2' }),
                          ]}
                        >
                          <IconButton css={{ variant: 'ghost', size: 'sm' }}>
                            <X />
                          </IconButton>
                        </Dialog.DialogCloseTrigger>
                      </Stack>
                    </Dialog.DialogContent>
                  </Dialog.DialogPositioner>
                </Portal>
              </Dialog.Dialog>
            </div>
          ),
        },
      ]}
    >
      <Layout />
    </Router>
  )
}

render(<App />, document.getElementById('root'))
