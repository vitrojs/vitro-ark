import { popover } from 'styled-system/recipes'
import { Popover } from '.'
import { $, Portal } from 'vitro'
const styles = popover()

export const Basic = () => (
  <Popover.Root>
    <Popover.Trigger class={styles.trigger}>
      Click Me{' '}
      <Popover.Indicator class={styles.indicator}>{'>'}</Popover.Indicator>
    </Popover.Trigger>
    <Popover.Positioner class={styles.positioner}>
      <Popover.Content class={styles.content}>
        <Popover.Title class={styles.title}>Title</Popover.Title>
        <Popover.Description class={styles.description}>
          Description
        </Popover.Description>
      </Popover.Content>
    </Popover.Positioner>
  </Popover.Root>
)

export const Portalled = () => (
  <Popover.Root portalled>
    <Popover.Trigger class={styles.trigger}>
      Click Me{' '}
      <Popover.Indicator class={styles.indicator}>{'>'}</Popover.Indicator>
    </Popover.Trigger>
    <Portal>
      <Popover.Positioner class={styles.positioner}>
        <Popover.Content class={styles.content}>
          <Popover.Title class={styles.title}>Title</Popover.Title>
          <Popover.Description class={styles.description}>
            Description
          </Popover.Description>
        </Popover.Content>
      </Popover.Positioner>
    </Portal>
  </Popover.Root>
)

export const OnOpenChange = () => {
  return (
    <Popover.Root onOpenChange={(open) => alert(open ? 'opened' : 'closed')}>
      <Popover.Trigger class={styles.trigger}>
        Click Me{' '}
        <Popover.Indicator class={styles.indicator}>{'>'}</Popover.Indicator>
      </Popover.Trigger>
      <Popover.Positioner class={styles.positioner}>
        <Popover.Content class={styles.content}>
          <Popover.Title class={styles.title}>Title</Popover.Title>
          <Popover.Description class={styles.description}>
            Description
          </Popover.Description>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  )
}

export const Controlled = () => {
  const open = $(false)
  return (
    <>
      <button onClick={() => open((it) => !it)}>Toggle</button>
      <Popover.Root open={open}>
        <Popover.Anchor>Anchor</Popover.Anchor>
        <Popover.Positioner class={styles.positioner}>
          <Popover.Content class={styles.content}>
            <Popover.Title class={styles.title}>Title</Popover.Title>
            <Popover.Description class={styles.description}>
              Description
            </Popover.Description>
            <Popover.CloseTrigger>Close</Popover.CloseTrigger>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.Root>
    </>
  )
}

export const RenderFn = () => (
  <Popover.Root>
    {(api) => (
      <>
        <Popover.Trigger class={styles.trigger}>Click Me</Popover.Trigger>
        <Popover.Positioner class={styles.positioner}>
          <Popover.Content class={styles.content}>
            <Popover.Title class={styles.title}>Title</Popover.Title>
            <Popover.Description class={styles.description}>
              Description: {api().isOpen.toString()}
            </Popover.Description>
            <Popover.CloseTrigger>Close</Popover.CloseTrigger>
          </Popover.Content>
        </Popover.Positioner>
      </>
    )}
  </Popover.Root>
)

export const Arrow = () => (
  <Popover.Root>
    <Popover.Trigger class={styles.trigger}>Click Me</Popover.Trigger>
    <Popover.Positioner class={styles.positioner}>
      <Popover.Content class={styles.content}>
        <Popover.Arrow>
          <Popover.ArrowTip />
        </Popover.Arrow>
        <Popover.Title class={styles.title}>Title</Popover.Title>
        <Popover.Description class={styles.description}>
          Description
        </Popover.Description>
        <Popover.CloseTrigger>Close</Popover.CloseTrigger>
      </Popover.Content>
    </Popover.Positioner>
  </Popover.Root>
)

export const CloseBehavior = () => (
  <Popover.Root closeOnEsc={false} closeOnInteractOutside={false}>
    <Popover.Trigger class={styles.trigger}>Click Me</Popover.Trigger>
    <Portal>
      <Popover.Positioner class={styles.positioner}>
        <Popover.Content class={styles.content}>
          <Popover.Title class={styles.title}>Title</Popover.Title>
          <Popover.Description class={styles.description}>
            Description
          </Popover.Description>
          <Popover.CloseTrigger>Close</Popover.CloseTrigger>
        </Popover.Content>
      </Popover.Positioner>
    </Portal>
  </Popover.Root>
)

export const Positioning = () => (
  <Popover.Root
    positioning={{
      placement: 'left-start',
      gutter: 16,
      offset: { mainAxis: 12, crossAxis: 12 },
    }}
  >
    <Popover.Trigger class={styles.trigger}>Click Me</Popover.Trigger>
    <Popover.Positioner class={styles.positioner}>
      <Popover.Content class={styles.content}>
        <Popover.Title class={styles.title}>Title</Popover.Title>
        <Popover.Description class={styles.description}>
          Description
        </Popover.Description>
        <Popover.CloseTrigger>Close</Popover.CloseTrigger>
      </Popover.Content>
    </Popover.Positioner>
  </Popover.Root>
)

export const Modal = () => (
  <Popover.Root modal>
    <Popover.Trigger class={styles.trigger}>Click Me</Popover.Trigger>
    <Popover.Positioner class={styles.positioner}>
      <Popover.Content class={styles.content}>
        <Popover.Title class={styles.title}>Title</Popover.Title>
        <Popover.Description class={styles.description}>
          Description
        </Popover.Description>
        <Popover.CloseTrigger>Close</Popover.CloseTrigger>
      </Popover.Content>
    </Popover.Positioner>
  </Popover.Root>
)
