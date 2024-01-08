import { tooltip } from 'styled-system/recipes'
import { Tooltip } from '.'
import { $, Portal } from 'vitro'

const styles = tooltip()

export const Basic = () => (
  <Tooltip.Root>
    <Tooltip.Trigger class={styles.trigger}>Hover Me</Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner class={styles.positioner}>
        <Tooltip.Content class={styles.content}>
          I am a tooltip!
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
)

export const Controlled = () => {
  const isOpen = $(false)
  return (
    <>
      <button onClick={() => isOpen((it) => !it)}>Toggle</button>
      <Tooltip.Root open={isOpen}>
        <Tooltip.Trigger class={styles.trigger}>Hover Me</Tooltip.Trigger>
        <Portal>
          <Tooltip.Positioner class={styles.positioner}>
            <Tooltip.Content class={styles.content}>
              I am a tooltip!
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
    </>
  )
}

export const RenderFn = () => (
  <Tooltip.Root>
    {(api) => (
      <>
        <Tooltip.Trigger class={styles.trigger}>Hover Me</Tooltip.Trigger>
        <Portal>
          <Tooltip.Positioner class={styles.positioner}>
            <Tooltip.Content class={styles.content}>
              This tooltip is open: {() => api().isOpen.toString()}
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </>
    )}
  </Tooltip.Root>
)

export const Arrow = () => (
  <Tooltip.Root>
    <Tooltip.Trigger class={styles.trigger}>Hover Me</Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner class={styles.positioner}>
        <Tooltip.Arrow class={styles.arrow}>
          <Tooltip.ArrowTip class={styles.arrowTip} />
        </Tooltip.Arrow>
        <Tooltip.Content class={styles.content}>
          I am a tooltip!
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
)

export const Timings = () => (
  <Tooltip.Root closeDelay={0} openDelay={0}>
    <Tooltip.Trigger class={styles.trigger}>Hover Me</Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner class={styles.positioner}>
        <Tooltip.Content class={styles.content}>
          I am a tooltip!
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
)

export const Positioning = () => (
  <Tooltip.Root
    positioning={{
      placement: 'left-start',
      gutter: 16,
      offset: { mainAxis: 12, crossAxis: 12 },
    }}
  >
    <Tooltip.Trigger class={styles.trigger}>Hover Me</Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner class={styles.positioner}>
        <Tooltip.Content class={styles.content}>
          I am a tooltip!
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
)
