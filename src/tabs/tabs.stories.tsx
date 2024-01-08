import { css } from 'styled-system/css'
import { Tabs } from '.'

import { tabs } from 'styled-system/recipes'
import { $, For } from 'vitro'
const styles = tabs()

const items = ['react', 'vue', 'solid']

export const Basic = () => (
  <Tabs.Root class={styles.root}>
    <Tabs.List class={styles.list}>
      <For values={items}>
        {(item) => (
          <Tabs.Trigger class={styles.trigger} value={item}>
            {item}
          </Tabs.Trigger>
        )}
      </For>
    </Tabs.List>
    <For values={items}>
      {(item) => (
        <Tabs.Content class={styles.content} value={item}>
          {item} Content
        </Tabs.Content>
      )}
    </For>
  </Tabs.Root>
)

export const InitialTab = () => (
  <Tabs.Root class={styles.root} value='react'>
    <Tabs.List class={styles.list}>
      <Tabs.Trigger class={styles.trigger} value='react'>
        React
      </Tabs.Trigger>
      <Tabs.Trigger class={styles.trigger} value='vue'>
        Vue
      </Tabs.Trigger>
      <Tabs.Trigger class={styles.trigger} value='solid'>
        Solid
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content class={styles.content} value='react'>
      React Content
    </Tabs.Content>
    <Tabs.Content class={styles.content} value='vue'>
      Vue Content
    </Tabs.Content>
    <Tabs.Content class={styles.content} value='solid'>
      Solid Content
    </Tabs.Content>
  </Tabs.Root>
)

export const Indicator = () => {
  const todo = (
    <span class={css({ color: 'red.9' })}>TODO: Indicator is invisible</span>
  )

  return (
    <Tabs.Root class={styles.root}>
      <Tabs.List class={styles.list}>
        <Tabs.Trigger class={styles.trigger} value='react'>
          React
        </Tabs.Trigger>
        <Tabs.Trigger class={styles.trigger} value='vue'>
          Vue
        </Tabs.Trigger>
        <Tabs.Trigger class={styles.trigger} value='solid'>
          Solid
        </Tabs.Trigger>
        <Tabs.Indicator class={styles.indicator} />
      </Tabs.List>
      <Tabs.Content class={styles.content} value='react'>
        React Content {todo}
      </Tabs.Content>
      <Tabs.Content class={styles.content} value='vue'>
        Vue Content {todo}
      </Tabs.Content>
      <Tabs.Content class={styles.content} value='solid'>
        Solid Content {todo}
      </Tabs.Content>
    </Tabs.Root>
  )
}

export const LazyMount = () => (
  <Tabs.Root class={styles.root} lazyMount unmountOnExit>
    <Tabs.List class={styles.list}>
      <Tabs.Trigger class={styles.trigger} value='react'>
        React
      </Tabs.Trigger>
      <Tabs.Trigger class={styles.trigger} value='vue'>
        Vue
      </Tabs.Trigger>
      <Tabs.Trigger class={styles.trigger} value='solid'>
        Solid
      </Tabs.Trigger>
      <Tabs.Indicator />
    </Tabs.List>
    <Tabs.Content class={styles.content} value='react'>
      React Content
    </Tabs.Content>
    <Tabs.Content class={styles.content} value='vue'>
      Vue Content
    </Tabs.Content>
    <Tabs.Content class={styles.content} value='solid'>
      Solid Content
    </Tabs.Content>
  </Tabs.Root>
)

export const DisabledTab = () => (
  <Tabs.Root class={styles.root} value='react'>
    <Tabs.List class={styles.list}>
      <Tabs.Trigger class={styles.trigger} value='react'>
        React
      </Tabs.Trigger>
      <Tabs.Trigger class={styles.trigger} value='vue' disabled>
        Vue
      </Tabs.Trigger>
      <Tabs.Trigger class={styles.trigger} value='solid'>
        Solid
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content class={styles.content} value='react'>
      React Content
    </Tabs.Content>
    <Tabs.Content class={styles.content} value='vue'>
      Vue Content
    </Tabs.Content>
    <Tabs.Content class={styles.content} value='solid'>
      Solid Content
    </Tabs.Content>
  </Tabs.Root>
)

export const Controlled = () => {
  const value = $<string | null>('react')
  return (
    <Tabs.Root
      class={styles.root}
      value={value}
      onValueChange={(e) => value(e.value)}
    >
      <Tabs.List class={styles.list}>
        <Tabs.Trigger class={styles.trigger} value='react'>
          React
        </Tabs.Trigger>
        <Tabs.Trigger class={styles.trigger} value='vue'>
          Vue
        </Tabs.Trigger>
        <Tabs.Trigger class={styles.trigger} value='solid'>
          Solid
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content class={styles.content} value='react'>
        React Content
      </Tabs.Content>
      <Tabs.Content class={styles.content} value='vue'>
        Vue Content
      </Tabs.Content>
      <Tabs.Content class={styles.content} value='solid'>
        Solid Content
      </Tabs.Content>
    </Tabs.Root>
  )
}

export const Vertical = () => (
  <Tabs.Root class={styles.root} orientation='vertical' value='react'>
    <Tabs.List class={styles.list}>
      <Tabs.Trigger class={styles.trigger} value='react'>
        React
      </Tabs.Trigger>
      <Tabs.Trigger class={styles.trigger} value='vue'>
        Vue
      </Tabs.Trigger>
      <Tabs.Trigger class={styles.trigger} value='solid'>
        Solid
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content class={styles.content} value='react'>
      React Content
    </Tabs.Content>
    <Tabs.Content class={styles.content} value='vue'>
      Vue Content
    </Tabs.Content>
    <Tabs.Content class={styles.content} value='solid'>
      Solid Content
    </Tabs.Content>
  </Tabs.Root>
)

export const Manual = () => (
  <Tabs.Root class={styles.root} activationMode='manual' value='react'>
    <Tabs.List class={styles.list}>
      <Tabs.Trigger class={styles.trigger} value='react'>
        React
      </Tabs.Trigger>
      <Tabs.Trigger class={styles.trigger} value='vue'>
        Vue
      </Tabs.Trigger>
      <Tabs.Trigger class={styles.trigger} value='solid'>
        Solid
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content class={styles.content} value='react'>
      React Content
    </Tabs.Content>
    <Tabs.Content class={styles.content} value='vue'>
      Vue Content
    </Tabs.Content>
    <Tabs.Content class={styles.content} value='solid'>
      Solid Content
    </Tabs.Content>
  </Tabs.Root>
)
