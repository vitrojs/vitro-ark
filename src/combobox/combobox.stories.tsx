import { Combobox } from '.'

import { combobox } from 'styled-system/recipes'
import { Portal, For } from 'vitro'

const styles = combobox()

export const Basic = () => {
  const items = ['React', 'Solid', 'Vue']
  return (
    <Combobox.Root class={styles.root} items={items}>
      <Combobox.Label class={styles.label}>Framework</Combobox.Label>
      <Combobox.Control class={styles.control}>
        <Combobox.Input class={styles.input} />
        <Combobox.Trigger class={styles.trigger}>Open</Combobox.Trigger>
        <Combobox.ClearTrigger class={styles.clearTrigger}>
          Clear
        </Combobox.ClearTrigger>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner class={styles.positioner}>
          <Combobox.Content class={styles.content}>
            <Combobox.ItemGroup class={styles.itemGroup} id='framework'>
              <Combobox.ItemGroupLabel
                class={styles.itemGroupLabel}
                for='framework'
              >
                Frameworks
              </Combobox.ItemGroupLabel>
              <For values={items}>
                {(item) => (
                  <Combobox.Item class={styles.item} item={item}>
                    <Combobox.ItemText class={styles.itemText}>
                      {item}
                    </Combobox.ItemText>
                    <Combobox.ItemIndicator class={styles.itemIndicator}>
                      ✓
                    </Combobox.ItemIndicator>
                  </Combobox.Item>
                )}
              </For>
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}

type Item = { label: string; value: string; disabled?: boolean }

export const Advanced = () => {
  const items: Item[] = [
    { label: 'React', value: 'react' },
    { label: 'Solid', value: 'solid' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte', disabled: true },
  ]
  return (
    <Combobox.Root class={styles.root} items={items}>
      <Combobox.Label class={styles.label}>Framework</Combobox.Label>
      <Combobox.Control class={styles.control}>
        <Combobox.Input class={styles.input} />
        <Combobox.Trigger class={styles.trigger}>Open</Combobox.Trigger>
        <Combobox.ClearTrigger class={styles.clearTrigger}>
          Clear
        </Combobox.ClearTrigger>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner class={styles.positioner}>
          <Combobox.Content class={styles.content}>
            <Combobox.ItemGroup class={styles.itemGroup} id='framework'>
              <Combobox.ItemGroupLabel
                class={styles.itemGroupLabel}
                for='framework'
              >
                Frameworks
              </Combobox.ItemGroupLabel>
              <For values={items}>
                {(item) => (
                  <Combobox.Item class={styles.item} item={item}>
                    <Combobox.ItemText class={styles.itemText}>
                      {item.label}
                    </Combobox.ItemText>
                    <Combobox.ItemIndicator class={styles.itemIndicator}>
                      ✓
                    </Combobox.ItemIndicator>
                  </Combobox.Item>
                )}
              </For>
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}
