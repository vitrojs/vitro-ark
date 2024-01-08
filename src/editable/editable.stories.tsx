import { Editable } from '.'

import {
  button as btn,
  editable,
  type ButtonVariantProps,
} from 'styled-system/recipes'

import { Ternary } from 'vitro'

const styles = editable()

const Button = ({
  size,
  variant,
  ...props
}: ButtonVariantProps & Omit<JSX.IntrinsicElements['button'], 'size'>) => {
  return <button class={btn({ size, variant })} {...props} />
}

export const Basic = () => (
  <Editable.Root
    class={styles.root}
    placeholder='Placeholder'
    activationMode='dblclick'
  >
    <Editable.Label class={styles.label}>Label</Editable.Label>
    <Editable.Area class={styles.area}>
      <Editable.Input class={styles.input} />
      <Editable.Preview class={styles.preview} />
    </Editable.Area>
  </Editable.Root>
)

export const CustomControls = () => (
  <Editable.Root placeholder='enter a value' value='Chakra'>
    {(api) => (
      <>
        <Editable.Label class={styles.label}>Label</Editable.Label>
        <Editable.Area class={styles.area}>
          <Editable.Input class={styles.input} />
          <Editable.Preview class={styles.preview} />
        </Editable.Area>
        <Editable.Control>
          <Ternary when={() => api().isEditing}>
            <>
              <Editable.SubmitTrigger class={styles.submitTrigger}>
                Save
              </Editable.SubmitTrigger>
              <Editable.CancelTrigger class={styles.submitTrigger}>
                Canvel
              </Editable.CancelTrigger>
            </>
            <Editable.EditTrigger class={styles.submitTrigger}>
              Edit
            </Editable.EditTrigger>
          </Ternary>
        </Editable.Control>
      </>
    )}
  </Editable.Root>
)
