import { Portal, render } from 'vitro'
import './index.css'

import { Route, Router } from '@vitro/router'
import { container, flex, stack } from 'styled-system/patterns'
import { button, dialog, iconButton } from 'styled-system/recipes'

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

container({})
const App = () => {
  return (
    <Router
      routes={[
        {
          path: '/',
          to: () => (
            <div class={[container(), css({ w: 'full', p: '8' })]}>
              <div class={[container(), flex({ justifyContent: 'center' })]}>
                <Dialog.Dialog>
                  <Dialog.DialogTrigger asChild>
                    <button class={[dialogStyles.trigger, button()]}>
                      Open Dialog
                    </button>
                  </Dialog.DialogTrigger>
                  <Portal>
                    <Dialog.DialogBackdrop class={dialogStyles.backdrop} />
                    <Dialog.DialogPositioner class={dialogStyles.positioner}>
                      <Dialog.DialogContent class={dialogStyles.content}>
                        <div class={stack({ gap: '8', p: '6' })}>
                          <div class={stack({ gap: '1' })}>
                            <Dialog.DialogTitle class={dialogStyles.title}>
                              Dialog Title
                            </Dialog.DialogTitle>
                            <Dialog.DialogDescription
                              class={dialogStyles.description}
                            >
                              Dialog Description
                            </Dialog.DialogDescription>
                          </div>
                          <div
                            class={stack({
                              gap: '3',
                              direction: 'row',
                              w: 'full',
                            })}
                          >
                            <Dialog.DialogCloseTrigger asChild>
                              <button
                                class={[
                                  dialogStyles.closeTrigger,
                                  button({ variant: 'outline' }),
                                  css({ w: 'full' }),
                                ]}
                              >
                                Cancel
                              </button>
                            </Dialog.DialogCloseTrigger>
                            <button class={[button(), css({ w: 'full' })]}>
                              Confirm
                            </button>
                          </div>
                          <Dialog.DialogCloseTrigger
                            asChild
                            class={[dialogStyles.closeTrigger]}
                          >
                            <button
                              class={[
                                css({ pos: 'absolute', top: '2', right: '2' }),
                                iconButton({ variant: 'ghost', size: 'sm' }),
                              ]}
                            >
                              <X />
                            </button>
                          </Dialog.DialogCloseTrigger>
                        </div>
                      </Dialog.DialogContent>
                    </Dialog.DialogPositioner>
                  </Portal>
                </Dialog.Dialog>
              </div>
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
