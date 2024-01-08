import { hoverCard } from 'styled-system/recipes'
import { HoverCard } from '.'
import { $, Portal } from 'vitro'
const styles = hoverCard()

export const Basic = () => (
  <HoverCard.Root>
    <HoverCard.Trigger class={styles.trigger}>Hover me</HoverCard.Trigger>
    <Portal>
      <HoverCard.Positioner class={styles.positioner}>
        <HoverCard.Content class={styles.content}>
          <HoverCard.Arrow class={styles.arrow}>
            <HoverCard.ArrowTip class={styles.arrowTip} />
          </HoverCard.Arrow>
          Content
        </HoverCard.Content>
      </HoverCard.Positioner>
    </Portal>
  </HoverCard.Root>
)

export const Controlled = () => {
  const open = $(false)
  return (
    <>
      <button onClick={() => open((it) => !it)}>click me</button>
      <HoverCard.Root open={open} onOpenChange={() => open(false)}>
        <HoverCard.Trigger class={styles.trigger}>Hover me</HoverCard.Trigger>
        <Portal>
          <HoverCard.Positioner class={styles.positioner}>
            <HoverCard.Content class={styles.content}>
              <HoverCard.Arrow class={styles.arrow}>
                <HoverCard.ArrowTip class={styles.arrowTip} />
              </HoverCard.Arrow>
              Content
            </HoverCard.Content>
          </HoverCard.Positioner>
        </Portal>
      </HoverCard.Root>
    </>
  )
}

export const Positioning = () => (
  <HoverCard.Root positioning={{ placement: 'right', gutter: 12 }}>
    <HoverCard.Trigger class={styles.trigger}>Hover me</HoverCard.Trigger>
    <Portal>
      <HoverCard.Positioner class={styles.positioner}>
        <HoverCard.Content class={styles.content}>
          <HoverCard.Arrow class={styles.arrow}>
            <HoverCard.ArrowTip class={styles.arrowTip} />
          </HoverCard.Arrow>
          Content
        </HoverCard.Content>
      </HoverCard.Positioner>
    </Portal>
  </HoverCard.Root>
)

export const RenderProp = () => (
  <HoverCard.Root>
    {(api) => (
      <>
        <HoverCard.Trigger class={styles.trigger}>
          Hover me {api().isOpen ? '▲' : '▼'}{' '}
        </HoverCard.Trigger>
        <Portal>
          <HoverCard.Positioner class={styles.positioner}>
            <HoverCard.Content class={styles.content}>
              <HoverCard.Arrow class={styles.arrow}>
                <HoverCard.ArrowTip class={styles.arrowTip} />
              </HoverCard.Arrow>
              Content
            </HoverCard.Content>
          </HoverCard.Positioner>
        </Portal>
      </>
    )}
  </HoverCard.Root>
)
