import { $, If } from 'vitro'
import { Checkbox, type CheckedState } from '.'

import { checkbox } from 'styled-system/recipes'

const styles = checkbox()

export const Basic = () => (
  <Checkbox.Root class={styles.root}>
    {(api) => (
      <>
        <Control api={api} />
        <Checkbox.Label class={styles.label}>
          {() => (api().isChecked ? 'Checked' : 'Unchecked')}
        </Checkbox.Label>
      </>
    )}
  </Checkbox.Root>
)

const Control = ({ api }) => {
  return (
    <Checkbox.Control class={styles.control}>
      <If when={() => api().isChecked}>
        <CheckIcon />
      </If>
      <If when={() => api().isIndeterminate}>
        <MinusIcon />
      </If>
    </Checkbox.Control>
  )
}
export const Controlled = () => {
  const checked = $<CheckedState>(true)
  return (
    <Checkbox.Root
      checked={checked}
      onCheckedChange={(e) => checked(e.checked)}
    >
      {(api) => (
        <>
          <Checkbox.Label class={styles.label}>Checkbox</Checkbox.Label>
          <Control api={api} />
        </>
      )}
    </Checkbox.Root>
  )
}

export const Indeterminate = () => (
  <Checkbox.Root checked='indeterminate'>
    {(api) => (
      <>
        <Checkbox.Label class={styles.label}>Checkbox</Checkbox.Label>
        <Control api={api} />
      </>
    )}
  </Checkbox.Root>
)

export const RenderProp = () => (
  <Checkbox.Root>
    {(api) => (
      <>
        <Checkbox.Label class={styles.label}>Checkbox</Checkbox.Label>
        <Control api={api} />
      </>
    )}
  </Checkbox.Root>
)

const CheckIcon = () => (
  <svg viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M11.6666 3.5L5.24992 9.91667L2.33325 7'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const MinusIcon = () => (
  <svg viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M2.91675 7H11.0834'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
