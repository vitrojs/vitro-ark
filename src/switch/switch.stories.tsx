import { $ } from 'vitro'
import { Switch } from '.'

import { switchRecipe } from 'styled-system/recipes'
const styles = switchRecipe({ size: 'md' })

export const Basic = () => (
  <Switch.Root class={styles.root}>
    <Switch.Control class={styles.control}>
      <Switch.Thumb class={styles.thumb} />
    </Switch.Control>
    <Switch.Label class={styles.label}>Label</Switch.Label>
  </Switch.Root>
)

export const InitialValue = () => (
  <Switch.Root checked>
    <Switch.Control>
      <Switch.Thumb />
    </Switch.Control>
    <Switch.Label>Label</Switch.Label>
  </Switch.Root>
)

export const Controlled = () => {
  const checked = $(false)

  return (
    <Switch.Root checked={checked} onCheckedChange={(e) => checked(e.checked)}>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Label</Switch.Label>
    </Switch.Root>
  )
}

export const Disabled = () => {
  return (
    <Switch.Root disabled>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Label</Switch.Label>
    </Switch.Root>
  )
}

export const RenderProp = () => (
  <Switch.Root>
    {(api) => (
      <>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>
          Feature is {() => (api().isChecked ? 'enabled' : 'disabled')}
        </Switch.Label>
      </>
    )}
  </Switch.Root>
)
