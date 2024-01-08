import { For } from 'vitro'
import { PinInput } from '.'
import './pin-input.css'

export const Basic = () => (
  <PinInput.Root onValueComplete={(e) => alert(e.valueAsString)}>
    <PinInput.Label>Label</PinInput.Label>
    <PinInput.Control>
      <For values={[0, 1, 2]}>{(id) => <PinInput.Input index={id} />}</For>
    </PinInput.Control>
  </PinInput.Root>
)

export const InitialValue = () => (
  <PinInput.Root value={['1', '2', '3']}>
    <PinInput.Label>Label</PinInput.Label>
    <PinInput.Control>
      <For values={[0, 1, 2]}>{(id) => <PinInput.Input index={id} />}</For>
    </PinInput.Control>
  </PinInput.Root>
)

export const Customized = () => (
  <PinInput.Root placeholder='*'>
    <PinInput.Label>Label</PinInput.Label>
    <PinInput.Control>
      <For values={[0, 1, 2]}>{(id) => <PinInput.Input index={id} />}</For>
    </PinInput.Control>
  </PinInput.Root>
)

export const Blurred = () => (
  <PinInput.Root blurOnComplete>
    <PinInput.Label>Label</PinInput.Label>
    <PinInput.Control>
      <For values={[0, 1, 2]}>{(id) => <PinInput.Input index={id} />}</For>
    </PinInput.Control>
  </PinInput.Root>
)

export const OTPMode = () => (
  <PinInput.Root otp>
    <PinInput.Label>Label</PinInput.Label>
    <PinInput.Control>
      <For values={[0, 1, 2]}>{(id) => <PinInput.Input index={id} />}</For>
    </PinInput.Control>
  </PinInput.Root>
)

export const WithMask = () => (
  <PinInput.Root mask>
    <PinInput.Label>Label</PinInput.Label>
    <PinInput.Control>
      <For values={[0, 1, 2]}>{(id) => <PinInput.Input index={id} />}</For>
    </PinInput.Control>
  </PinInput.Root>
)
