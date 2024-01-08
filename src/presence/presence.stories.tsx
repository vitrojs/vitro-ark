import { $ } from 'vitro'
import { Presence } from './presence'
import { button } from 'styled-system/recipes'
const styles = {
  button: button({ variant: 'outline' }),
}
export const Basic = () => {
  const present = $(false)
  return (
    <>
      <button class={styles.button} onClick={() => present((it) => !it)}>
        Toggle
      </button>
      <Presence present={present}>Hidden and Hidden</Presence>
    </>
  )
}
export const LazyMount = () => {
  const present = $(false)
  return (
    <>
      <button class={styles.button} onClick={() => present((it) => !it)}>
        Toggle
      </button>
      <Presence present={present} lazyMount>
        Unmounted and Hidden
      </Presence>
    </>
  )
}

export const UnmountOnExit = () => {
  const present = $(false)
  return (
    <>
      <button class={styles.button} onClick={() => present((it) => !it)}>
        Toggle
      </button>
      <Presence present={present} unmountOnExit>
        Hidden and Unmounted on Exit
      </Presence>
    </>
  )
}

export const LazyMountAndUnmountOnExit = () => {
  const present = $(false)
  return (
    <>
      <button class={styles.button} onClick={() => present((it) => !it)}>
        Toggle
      </button>
      <Presence present={present} lazyMount unmountOnExit>
        Lazy Mount and Unmounted on Exit
      </Presence>
    </>
  )
}
